"use server";

import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

import { db, schema } from "@/lib/db/client";
import { absoluteUrl } from "@/lib/site-config";
import { stripe } from "@/lib/stripe/client";
import type { SilaTierKey } from "@/lib/stripe/pricing";

/**
 * Thin server-action wrappers. The real checkout logic lives at
 * /api/checkout/[tier] (GET) so it can participate in Clerk's
 * post-auth redirect_url flow and be shared by guests + members alike.
 *
 * These wrappers exist so that <form action={startCheckout}> on the
 * marketing pages keeps working without JavaScript.
 */

export async function createCheckoutSession(tier: SilaTierKey) {
  redirect(`/api/checkout/${tier}`);
}

export async function openCustomerPortal() {
  const { userId: clerkUserId } = await auth();
  if (!clerkUserId) {
    redirect("/sign-in?redirect_url=/subscribe");
  }

  const [user] = await db
    .select()
    .from(schema.users)
    .where(eq(schema.users.clerkUserId, clerkUserId))
    .limit(1);

  if (!user?.stripeCustomerId) {
    redirect("/subscribe?portal=missing-customer");
  }

  const portal = await stripe.billingPortal.sessions.create({
    customer: user.stripeCustomerId,
    return_url: absoluteUrl("/subscribe?portal=returned"),
  });

  redirect(portal.url);
}
