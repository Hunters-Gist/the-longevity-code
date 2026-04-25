import "server-only";

import Stripe from "stripe";
import { siteConfig } from "@/lib/site-config";

/**
 * Server-only Stripe client. Never import this from a Client Component.
 * For pricing constants / tier helpers that need to be available in
 * scripts and client code, import from `lib/stripe/pricing.ts` instead.
 */

const stripeSecret = process.env.STRIPE_SECRET_KEY;

if (!stripeSecret) {
  if (process.env.NODE_ENV === "production") {
    throw new Error(
      "STRIPE_SECRET_KEY is not configured. Set it in Vercel → Environment Variables.",
    );
  }
}

export const stripe = new Stripe(stripeSecret ?? "sk_test_missing", {
  apiVersion: "2026-03-25.dahlia",
  typescript: true,
  appInfo: {
    name: "The Sila Code",
    url: siteConfig.url,
  },
});

// Re-export pricing helpers for convenience so existing imports keep working.
export { SILA_PRICING, getPriceIdForTier, type SilaTierKey } from "./pricing";
