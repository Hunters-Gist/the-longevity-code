/**
 * Idempotent Stripe product + price bootstrapper.
 *
 * Run: npx tsx scripts/stripe-setup.ts
 *
 * For each logical tier:
 *   1. Looks up a Product by `metadata.sila_key` (unique per tier).
 *   2. Creates the Product if missing.
 *   3. Ensures each Price variant exists with the correct amount and recurrence.
 *   4. Writes the final price IDs to .env.local (under the STRIPE_PRICE_* keys).
 *
 * Safe to re-run after editing SILA_PRICING in lib/stripe/client.ts: Stripe
 * prices are immutable, so if the amount changed a new Price is created and
 * the old one archived automatically (Stripe best practice).
 */

import { config as loadEnv } from "dotenv";
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import Stripe from "stripe";

loadEnv({ path: ".env.local" });

import { SILA_PRICING } from "../lib/stripe/pricing";

const secret = process.env.STRIPE_SECRET_KEY;
if (!secret) {
  console.error("STRIPE_SECRET_KEY is not set in .env.local");
  process.exit(1);
}

const stripe = new Stripe(secret, { apiVersion: "2026-03-25.dahlia" });

type EnvUpdate = { key: string; value: string };

async function ensureProduct(args: {
  silaKey: string;
  name: string;
  description: string;
  shippable: boolean;
}): Promise<string> {
  const existing = await stripe.products.search({
    query: `metadata['sila_key']:'${args.silaKey}'`,
    limit: 1,
  });
  if (existing.data[0]) {
    return existing.data[0].id;
  }
  const created = await stripe.products.create({
    name: args.name,
    description: args.description,
    metadata: { sila_key: args.silaKey },
    shippable: args.shippable,
  });
  console.log(`  created product ${args.silaKey} → ${created.id}`);
  return created.id;
}

async function ensureRecurringPrice(args: {
  productId: string;
  unitAmount: number;
  interval: "month" | "year";
  nickname: string;
}): Promise<string> {
  const list = await stripe.prices.list({
    product: args.productId,
    active: true,
    limit: 100,
  });
  const match = list.data.find(
    (price) =>
      price.unit_amount === args.unitAmount &&
      price.recurring?.interval === args.interval &&
      price.currency === SILA_PRICING.currency,
  );
  if (match) return match.id;
  const created = await stripe.prices.create({
    product: args.productId,
    currency: SILA_PRICING.currency,
    unit_amount: args.unitAmount,
    recurring: { interval: args.interval },
    nickname: args.nickname,
  });
  console.log(`  created price ${args.nickname} → ${created.id}`);
  return created.id;
}

async function ensureOneTimePrice(args: {
  productId: string;
  unitAmount: number;
  nickname: string;
}): Promise<string> {
  const list = await stripe.prices.list({
    product: args.productId,
    active: true,
    limit: 100,
  });
  const match = list.data.find(
    (price) =>
      price.unit_amount === args.unitAmount &&
      price.recurring === null &&
      price.currency === SILA_PRICING.currency,
  );
  if (match) return match.id;
  const created = await stripe.prices.create({
    product: args.productId,
    currency: SILA_PRICING.currency,
    unit_amount: args.unitAmount,
    nickname: args.nickname,
  });
  console.log(`  created one-time price ${args.nickname} → ${created.id}`);
  return created.id;
}

function writeEnvUpdates(updates: EnvUpdate[]) {
  const envPath = path.resolve(".env.local");
  let contents: string;
  try {
    contents = readFileSync(envPath, "utf8");
  } catch {
    contents = "";
  }
  let next = contents;
  for (const { key, value } of updates) {
    const line = `${key}=${value}`;
    const pattern = new RegExp(`^${key}=.*$`, "m");
    if (pattern.test(next)) {
      next = next.replace(pattern, line);
    } else {
      next += next.endsWith("\n") || next === "" ? line + "\n" : "\n" + line + "\n";
    }
  }
  writeFileSync(envPath, next, "utf8");
  console.log("\n.env.local updated with the following keys:");
  for (const { key } of updates) console.log(`  ${key}`);
}

async function main() {
  console.log("Setting up Stripe products and prices for The Sila Code...\n");

  const { theCode, capsule, founding, silaFocus } = SILA_PRICING.products;

  console.log("→ The Code");
  const theCodeProduct = await ensureProduct({
    silaKey: theCode.key,
    name: theCode.name,
    description: theCode.description,
    shippable: false,
  });
  const theCodeMonthly = await ensureRecurringPrice({
    productId: theCodeProduct,
    unitAmount: theCode.monthly.amount,
    interval: "month",
    nickname: "The Code — Monthly",
  });
  const theCodeAnnual = await ensureRecurringPrice({
    productId: theCodeProduct,
    unitAmount: theCode.annual.amount,
    interval: "year",
    nickname: "The Code — Annual",
  });

  console.log("→ The Code + Capsule");
  const capsuleProduct = await ensureProduct({
    silaKey: capsule.key,
    name: capsule.name,
    description: capsule.description,
    shippable: true,
  });
  const capsuleMonthly = await ensureRecurringPrice({
    productId: capsuleProduct,
    unitAmount: capsule.monthly.amount,
    interval: "month",
    nickname: "The Code + Capsule — Monthly",
  });
  const capsuleAnnual = await ensureRecurringPrice({
    productId: capsuleProduct,
    unitAmount: capsule.annual.amount,
    interval: "year",
    nickname: "The Code + Capsule — Annual",
  });

  console.log("→ Founding 100 (lifetime, capped)");
  const foundingProduct = await ensureProduct({
    silaKey: founding.key,
    name: founding.name,
    description: founding.description,
    shippable: true,
  });
  const foundingPrice = await ensureOneTimePrice({
    productId: foundingProduct,
    unitAmount: founding.oneTime.amount,
    nickname: "Founding 100 — Lifetime seat",
  });

  console.log("→ Sila Focus (one-off)");
  const silaFocusProduct = await ensureProduct({
    silaKey: silaFocus.key,
    name: silaFocus.name,
    description: silaFocus.description,
    shippable: true,
  });
  const silaFocusPrice = await ensureOneTimePrice({
    productId: silaFocusProduct,
    unitAmount: silaFocus.oneTime.amount,
    nickname: "Sila Focus — Single bottle",
  });

  writeEnvUpdates([
    { key: "STRIPE_PRICE_THE_CODE_MONTHLY", value: theCodeMonthly },
    { key: "STRIPE_PRICE_THE_CODE_ANNUAL", value: theCodeAnnual },
    { key: "STRIPE_PRICE_CAPSULE_MONTHLY", value: capsuleMonthly },
    { key: "STRIPE_PRICE_CAPSULE_ANNUAL", value: capsuleAnnual },
    { key: "STRIPE_PRICE_FOUNDING_100", value: foundingPrice },
    { key: "STRIPE_PRICE_SILA_FOCUS", value: silaFocusPrice },
  ]);

  console.log("\nDone. Next steps:");
  console.log("  1. Run 'npm run db:push' to apply the Neon schema");
  console.log("  2. Run 'npm run db:seed-founding' to allocate Founding 100 seats");
  console.log("  3. For local webhook testing: 'stripe listen --forward-to localhost:3000/api/stripe/webhook'");
  console.log("     → copy the whsec_ it prints into STRIPE_WEBHOOK_SECRET in .env.local");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
