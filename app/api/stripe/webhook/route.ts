import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import Stripe from "stripe";
import { eq, sql } from "drizzle-orm";

import { db, schema } from "@/lib/db/client";
import { stripe } from "@/lib/stripe/client";
import { isFounding100Enabled } from "@/lib/stripe/pricing";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Stripe webhook.
 *
 * Responsibilities:
 *   - Verify signature (prevents spoofed events).
 *   - Deduplicate by event.id (Stripe can retry).
 *   - Provision entitlements for paid subscriptions and one-off purchases.
 *   - Enforce the Founding 100 cap atomically via a single UPDATE ... RETURNING.
 *   - Record Capsule-tier shipments so ops can fulfil.
 *
 * The signing secret is set via Stripe CLI locally and via the Stripe Dashboard
 * for production. Missing secret → 500 (we never accept unsigned events).
 */

const SIGNING_SECRET = process.env.STRIPE_WEBHOOK_SECRET;

async function alreadyProcessed(eventId: string): Promise<boolean> {
  const rows = await db
    .select({ eventId: schema.processedWebhookEvents.eventId })
    .from(schema.processedWebhookEvents)
    .where(eq(schema.processedWebhookEvents.eventId, eventId))
    .limit(1);
  return rows.length > 0;
}

async function markProcessed(eventId: string) {
  await db
    .insert(schema.processedWebhookEvents)
    .values({ eventId, source: "stripe" })
    .onConflictDoNothing();
}

function tierFromMetadata(meta: Stripe.Metadata | null | undefined): string | null {
  const tier = meta?.sila_tier;
  return typeof tier === "string" && tier.length > 0 ? tier : null;
}

async function claimFoundingSeat(args: {
  clerkUserId: string;
  stripeSessionId: string;
}): Promise<number | null> {
  const [userRow] = await db
    .select()
    .from(schema.users)
    .where(eq(schema.users.clerkUserId, args.clerkUserId))
    .limit(1);

  if (!userRow) return null;

  // Atomic claim: picks the lowest-numbered available seat in one SQL round trip.
  const rows = await db.execute<{ seat_number: number }>(sql`
    update founding_seats
    set
      user_id = ${userRow.id},
      stripe_session_id = ${args.stripeSessionId},
      status = 'claimed',
      claimed_at = now()
    where seat_number = (
      select seat_number
      from founding_seats
      where status = 'available'
      order by seat_number asc
      limit 1
      for update skip locked
    )
    returning seat_number
  `);

  const seatNumber = rows?.rows?.[0]?.seat_number ?? null;
  return typeof seatNumber === "number" ? seatNumber : null;
}

async function upsertUserFromSession(session: Stripe.Checkout.Session) {
  const clerkUserId =
    (session.metadata?.clerk_user_id as string | undefined) ??
    (session.client_reference_id as string | undefined);
  const email =
    session.customer_details?.email ??
    (typeof session.customer_email === "string"
      ? session.customer_email
      : undefined);

  if (!clerkUserId || !email) return null;

  const customerId =
    typeof session.customer === "string" ? session.customer : session.customer?.id;

  const userRowId = `usr_${clerkUserId.slice(-24)}`;
  await db
    .insert(schema.users)
    .values({
      id: userRowId,
      clerkUserId,
      email,
      stripeCustomerId: customerId ?? null,
    })
    .onConflictDoUpdate({
      target: schema.users.clerkUserId,
      set: {
        email,
        stripeCustomerId: customerId ?? null,
        updatedAt: new Date(),
      },
    });

  return clerkUserId;
}

async function provisionSubscriptionEntitlement(subscription: Stripe.Subscription) {
  const clerkUserId = subscription.metadata?.clerk_user_id;
  const tier = tierFromMetadata(subscription.metadata);
  if (!clerkUserId || !tier) return;

  const [user] = await db
    .select()
    .from(schema.users)
    .where(eq(schema.users.clerkUserId, clerkUserId))
    .limit(1);
  if (!user) return;

  const item = subscription.items.data[0];
  const periodEnd = item?.current_period_end ?? null;

  await db
    .insert(schema.entitlements)
    .values({
      userId: user.id,
      tier,
      source: "stripe_subscription",
      stripeSubscriptionId: subscription.id,
      stripePriceId: item?.price.id ?? null,
      status: subscription.status,
      currentPeriodEnd: periodEnd ? new Date(periodEnd * 1000) : null,
    })
    .onConflictDoUpdate({
      target: schema.entitlements.stripeSubscriptionId,
      set: {
        status: subscription.status,
        stripePriceId: item?.price.id ?? null,
        currentPeriodEnd: periodEnd ? new Date(periodEnd * 1000) : null,
        cancelledAt: subscription.canceled_at
          ? new Date(subscription.canceled_at * 1000)
          : null,
        updatedAt: new Date(),
      },
    });
}

async function recordCapsuleShipment(invoice: Stripe.Invoice) {
  const parentSub =
    "parent" in invoice && invoice.parent?.type === "subscription_details"
      ? invoice.parent.subscription_details
      : null;
  const subscriptionId = parentSub?.subscription;
  if (!subscriptionId || typeof subscriptionId !== "string") return;

  const subscription = await stripe.subscriptions.retrieve(subscriptionId);
  const tier = tierFromMetadata(subscription.metadata);
  if (tier !== "capsule_monthly" && tier !== "capsule_annual") return;

  const clerkUserId = subscription.metadata?.clerk_user_id;
  if (!clerkUserId) return;

  const [user] = await db
    .select()
    .from(schema.users)
    .where(eq(schema.users.clerkUserId, clerkUserId))
    .limit(1);
  if (!user) return;

  const customerId =
    typeof invoice.customer === "string" ? invoice.customer : invoice.customer?.id;
  if (!customerId) return;

  const customer = await stripe.customers.retrieve(customerId);
  if (customer.deleted) return;

  const address = customer.shipping?.address ?? customer.address ?? null;
  if (!address) return;

  await db
    .insert(schema.shipments)
    .values({
      userId: user.id,
      stripeInvoiceId: invoice.id ?? "",
      shippingAddress: address,
      status: "pending",
    })
    .onConflictDoNothing();
}

export async function POST(request: NextRequest) {
  if (!SIGNING_SECRET) {
    return NextResponse.json(
      { error: "STRIPE_WEBHOOK_SECRET is not configured" },
      { status: 500 },
    );
  }

  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json({ error: "missing signature" }, { status: 400 });
  }

  const rawBody = await request.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, SIGNING_SECRET);
  } catch (error) {
    console.error("[stripe-webhook] signature verification failed", error);
    return NextResponse.json({ error: "invalid signature" }, { status: 400 });
  }

  if (await alreadyProcessed(event.id)) {
    return NextResponse.json({ ok: true, duplicate: true });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        const clerkUserId = await upsertUserFromSession(session);
        const tier = tierFromMetadata(session.metadata);

        if (clerkUserId && tier === "founding_100") {
          if (!isFounding100Enabled()) {
            if (session.payment_intent && typeof session.payment_intent === "string") {
              await stripe.refunds.create({ payment_intent: session.payment_intent });
            }
            console.error(
              "[stripe-webhook] founding 100 checkout received while disabled; refunded session",
              session.id,
            );
            break;
          }

          const seat = await claimFoundingSeat({
            clerkUserId,
            stripeSessionId: session.id,
          });
          if (seat === null) {
            // Sold out → issue a refund rather than grant access we can't honour.
            if (session.payment_intent && typeof session.payment_intent === "string") {
              await stripe.refunds.create({ payment_intent: session.payment_intent });
            }
            console.error(
              "[stripe-webhook] founding 100 sold out, refunded session",
              session.id,
            );
            break;
          }
          const [user] = await db
            .select()
            .from(schema.users)
            .where(eq(schema.users.clerkUserId, clerkUserId))
            .limit(1);
          if (user) {
            await db
              .insert(schema.entitlements)
              .values({
                userId: user.id,
                tier: "founding_100",
                source: "stripe_one_time",
                status: "active",
              });
          }
        }

        if (
          clerkUserId &&
          tier === "sila_focus" &&
          session.mode === "payment"
        ) {
          // One-off Sila Focus purchase. Nothing to gate — shipments handled on
          // invoice.paid for subscriptions; one-offs fulfil via Stripe order metadata.
        }
        break;
      }

      case "customer.subscription.created":
      case "customer.subscription.updated":
      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;
        await provisionSubscriptionEntitlement(subscription);
        break;
      }

      case "invoice.paid": {
        const invoice = event.data.object as Stripe.Invoice;
        await recordCapsuleShipment(invoice);
        break;
      }

      default:
        // Unhandled events are still marked as processed so Stripe stops retrying.
        break;
    }

    await markProcessed(event.id);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[stripe-webhook] handler error", error);
    return NextResponse.json({ error: "handler error" }, { status: 500 });
  }
}
