/**
 * Seeds the founding_seats table with seat numbers 1..100 as 'available'.
 * Safe to re-run: existing rows are preserved via ON CONFLICT DO NOTHING.
 *
 * Run: npx tsx scripts/seed-founding-seats.ts
 */

import { config as loadEnv } from "dotenv";
loadEnv({ path: ".env.local" });

import { neon } from "@neondatabase/serverless";
import { SILA_PRICING } from "../lib/stripe/pricing";

const connectionString =
  process.env.DATABASE_URL_UNPOOLED ?? process.env.DATABASE_URL;

if (!connectionString) {
  console.error("DATABASE_URL is not set in .env.local");
  process.exit(1);
}

const sql = neon(connectionString);

async function main() {
  const cap = SILA_PRICING.products.founding.cap;
  console.log(`Seeding ${cap} founding seats...`);
  const seatNumbers = Array.from({ length: cap }, (_, index) => index + 1);

  for (const seatNumber of seatNumbers) {
    await sql`
      insert into founding_seats (seat_number, status)
      values (${seatNumber}, 'available')
      on conflict (seat_number) do nothing
    `;
  }

  const remaining = await sql`
    select count(*)::int as count from founding_seats where status = 'available'
  `;
  console.log(
    `Seats available: ${remaining[0]?.count ?? 0} / ${cap}`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
