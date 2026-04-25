import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth, currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";

import { db, schema } from "@/lib/db/client";
import { absoluteUrl } from "@/lib/site-config";
import { stripe } from "@/lib/stripe/client";
import { getPriceIdForTier, type SilaTierKey } from "@/lib/stripe/pricing";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * GET /api/checkout/:tier
 *
 * Purpose: Clerk's post-auth redirect_url must be a GET URL, but our server
 * action for starting checkout lives on /subscribe. This route is the bridge:
 *   - Unauthenticated request → redirect to /sign-up?redirect_url=this
 *   - Authenticated request → create Checkout session, redirect to Stripe
 *
 * So the UX is:
 *   1. User clicks "Buy once" while signed out
 *   2. Server action from /shop or /subscribe redirects to /sign-up?redirect_url=/api/checkout/sila_focus
 *   3. User signs up with Clerk
 *   4. Clerk redirects to /api/checkout/sila_focus
 *   5. This route creates the Checkout session and redirects to Stripe
 */

const VALID_TIERS: readonly SilaTierKey[] = [
  "the_code_monthly",
  "the_code_annual",
  "capsule_monthly",
  "capsule_annual",
  "founding_100",
  "sila_focus",
] as const;

const PHYSICAL_TIERS = new Set<SilaTierKey>([
  "capsule_monthly",
  "capsule_annual",
  "founding_100",
  "sila_focus",
]);

const ONE_OFF_TIERS = new Set<SilaTierKey>(["founding_100", "sila_focus"]);

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ tier: string }> },
) {
  const { tier: tierParam } = await params;
  const tier = tierParam as SilaTierKey;

  if (!VALID_TIERS.includes(tier)) {
    return NextResponse.redirect(
      new URL(absoluteUrl(`/subscribe?checkout=invalid-tier`)),
    );
  }

  const priceId = getPriceIdForTier(tier);
  if (!priceId) {
    return NextResponse.redirect(
      new URL(absoluteUrl(`/subscribe?checkout=unavailable&tier=${tier}`)),
    );
  }

  const { userId: clerkUserId } = await auth();
  if (!clerkUserId) {
    const redirectBack = `/api/checkout/${tier}`;
    return NextResponse.redirect(
      new URL(
        `/sign-up?redirect_url=${encodeURIComponent(redirectBack)}`,
        absoluteUrl(),
      ),
    );
  }

  const user = await currentUser();
  const primaryEmail =
    user?.emailAddresses.find((e) => e.id === user.primaryEmailAddressId)
      ?.emailAddress ?? user?.emailAddresses[0]?.emailAddress;

  if (!primaryEmail) {
    return NextResponse.redirect(
      new URL(absoluteUrl("/sign-up?error=email-required")),
    );
  }

  const [existing] = await db
    .select()
    .from(schema.users)
    .where(eq(schema.users.clerkUserId, clerkUserId))
    .limit(1);

  let stripeCustomerId = existing?.stripeCustomerId ?? undefined;
  if (!stripeCustomerId) {
    const customer = await stripe.customers.create({
      email: primaryEmail,
      metadata: { clerk_user_id: clerkUserId },
    });
    stripeCustomerId = customer.id;
  }

  const userRowId = existing?.id ?? `usr_${clerkUserId.slice(-24)}`;
  await db
    .insert(schema.users)
    .values({
      id: userRowId,
      clerkUserId,
      email: primaryEmail,
      stripeCustomerId,
    })
    .onConflictDoUpdate({
      target: schema.users.clerkUserId,
      set: {
        email: primaryEmail,
        stripeCustomerId,
        updatedAt: new Date(),
      },
    });

  const isSubscription = !ONE_OFF_TIERS.has(tier);
  const needsShipping = PHYSICAL_TIERS.has(tier);

  const session = await stripe.checkout.sessions.create({
    mode: isSubscription ? "subscription" : "payment",
    customer: stripeCustomerId,
    client_reference_id: clerkUserId,
    line_items: [{ price: priceId, quantity: 1 }],
    allow_promotion_codes: true,
    billing_address_collection: "required",
    ...(needsShipping
      ? {
          shipping_address_collection: {
            allowed_countries: [
              "AU",
              "NZ",
              "US",
              "GB",
              "CA",
              "IE",
              "SG",
              "JP",
              "AE",
            ],
          },
        }
      : {}),
    success_url: absoluteUrl(
      `/subscribe?checkout=success&tier=${tier}&session_id={CHECKOUT_SESSION_ID}`,
    ),
    cancel_url: absoluteUrl(`/subscribe?checkout=cancelled&tier=${tier}`),
    metadata: {
      sila_tier: tier,
      clerk_user_id: clerkUserId,
    },
    ...(isSubscription
      ? {
          subscription_data: {
            metadata: {
              sila_tier: tier,
              clerk_user_id: clerkUserId,
            },
          },
        }
      : {}),
  });

  if (!session.url) {
    return NextResponse.redirect(
      new URL(absoluteUrl(`/subscribe?checkout=error&tier=${tier}`)),
    );
  }

  return NextResponse.redirect(session.url);
}
