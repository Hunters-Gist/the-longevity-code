/**
 * Pure pricing reference. Safe to import from server code, client code,
 * and standalone Node scripts (e.g. scripts/stripe-setup.ts).
 *
 * Keep this file free of runtime side-effects — no fetches, no client init,
 * no "server-only" imports. It is the single source of truth for tier amounts.
 */

export const SILA_PRICING = {
  currency: "aud" as const,
  products: {
    theCode: {
      key: "the_code",
      name: "The Code",
      description:
        "Private-practice digital membership: full course library, monthly masterclass, and member-only community.",
      monthly: { amount: 14900, interval: "month" as const },
      annual: { amount: 149000, interval: "year" as const },
    },
    capsule: {
      key: "code_plus_capsule",
      name: "The Code + Capsule",
      description:
        "The concierge tier. Everything in The Code plus monthly Sila Focus delivery and quarterly 1:1 check-ins.",
      monthly: { amount: 34900, interval: "month" as const },
      annual: { amount: 349000, interval: "year" as const },
    },
    founding: {
      key: "founding_100",
      name: "Founding 100",
      description:
        "Lifetime access at a fixed one-time payment. Capped at 100 members. Closes forever.",
      oneTime: { amount: 490000 },
      cap: 100,
    },
    silaFocus: {
      key: "sila_focus",
      name: "Sila Focus",
      description:
        "A daily wellness capsule featuring L-Theanine, Citicoline, Alpha-GPC and saffron extract. One bottle = 30-day supply.",
      oneTime: { amount: 8900 },
    },
  },
} as const;

export type SilaTierKey =
  | "the_code_monthly"
  | "the_code_annual"
  | "capsule_monthly"
  | "capsule_annual"
  | "founding_100"
  | "sila_focus";

export function isFounding100Enabled() {
  return process.env.NEXT_PUBLIC_ENABLE_FOUNDING_100 === "true";
}

/**
 * Resolves a tier key into the Stripe price ID from env. Returns null when
 * the price has not been created yet (so UI can fall back to contact flow).
 * Pure function — safe to call from scripts and server actions alike.
 */
export function getPriceIdForTier(tier: SilaTierKey): string | null {
  if (tier === "founding_100" && !isFounding100Enabled()) {
    return null;
  }

  const envKeyByTier: Record<SilaTierKey, string> = {
    the_code_monthly: "STRIPE_PRICE_THE_CODE_MONTHLY",
    the_code_annual: "STRIPE_PRICE_THE_CODE_ANNUAL",
    capsule_monthly: "STRIPE_PRICE_CAPSULE_MONTHLY",
    capsule_annual: "STRIPE_PRICE_CAPSULE_ANNUAL",
    founding_100: "STRIPE_PRICE_FOUNDING_100",
    sila_focus: "STRIPE_PRICE_SILA_FOCUS",
  };
  const envKey = envKeyByTier[tier];
  const value = process.env[envKey];
  return value && value.startsWith("price_") ? value : null;
}
