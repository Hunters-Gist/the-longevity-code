import {
  bigint,
  index,
  integer,
  jsonb,
  pgTable,
  primaryKey,
  text,
  timestamp,
  uniqueIndex,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * Database schema for The Sila Code.
 *
 * Design principles:
 *   - Clerk is the identity system. We never store passwords.
 *   - Stripe is the source of truth for billing. We mirror just enough
 *     to enforce entitlements without round-tripping Stripe on every request.
 *   - The Founding 100 counter is enforced atomically via a UNIQUE index on
 *     seat_number so concurrent webhook processing cannot oversell.
 */

export const users = pgTable(
  "users",
  {
    id: varchar("id", { length: 64 }).primaryKey(),
    clerkUserId: varchar("clerk_user_id", { length: 64 }).notNull(),
    email: varchar("email", { length: 320 }).notNull(),
    stripeCustomerId: varchar("stripe_customer_id", { length: 64 }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    uniqueIndex("users_clerk_user_id_idx").on(table.clerkUserId),
    uniqueIndex("users_email_idx").on(table.email),
    index("users_stripe_customer_id_idx").on(table.stripeCustomerId),
  ],
);

/**
 * A user may have multiple active entitlements (e.g. monthly Code + annual Capsule
 * during a mid-cycle upgrade). One row per active subscription or lifetime grant.
 */
export const entitlements = pgTable(
  "entitlements",
  {
    id: bigint("id", { mode: "number" }).generatedAlwaysAsIdentity().primaryKey(),
    userId: varchar("user_id", { length: 64 })
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    tier: varchar("tier", { length: 32 }).notNull(),
    source: varchar("source", { length: 32 }).notNull(),
    stripeSubscriptionId: varchar("stripe_subscription_id", { length: 64 }),
    stripePriceId: varchar("stripe_price_id", { length: 64 }),
    status: varchar("status", { length: 32 }).notNull(),
    currentPeriodEnd: timestamp("current_period_end", { withTimezone: true }),
    cancelledAt: timestamp("cancelled_at", { withTimezone: true }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    index("entitlements_user_id_idx").on(table.userId),
    uniqueIndex("entitlements_stripe_subscription_id_idx").on(
      table.stripeSubscriptionId,
    ),
    index("entitlements_tier_status_idx").on(table.tier, table.status),
  ],
);

/**
 * Founding 100 seats. Seat numbers 1..100 are pre-allocated as free rows
 * (user_id null, status 'available') by the setup script. The webhook handler
 * claims the lowest-numbered available seat in a single UPDATE ... RETURNING
 * transaction, which guarantees no over-selling under concurrent load.
 */
export const foundingSeats = pgTable(
  "founding_seats",
  {
    seatNumber: integer("seat_number").primaryKey(),
    userId: varchar("user_id", { length: 64 }).references(() => users.id, {
      onDelete: "set null",
    }),
    stripeSessionId: varchar("stripe_session_id", { length: 128 }),
    status: varchar("status", { length: 32 }).notNull().default("available"),
    claimedAt: timestamp("claimed_at", { withTimezone: true }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    uniqueIndex("founding_seats_stripe_session_idx").on(table.stripeSessionId),
    index("founding_seats_status_idx").on(table.status),
  ],
);

/**
 * Capsule fulfilment queue. A row is inserted every time a Capsule-tier
 * subscription renews (via invoice.paid webhook). Operator marks fulfilled
 * from the admin surface when the parcel ships.
 */
export const shipments = pgTable(
  "shipments",
  {
    id: bigint("id", { mode: "number" }).generatedAlwaysAsIdentity().primaryKey(),
    userId: varchar("user_id", { length: 64 })
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    stripeInvoiceId: varchar("stripe_invoice_id", { length: 64 }).notNull(),
    shippingAddress: jsonb("shipping_address").notNull(),
    status: varchar("status", { length: 32 }).notNull().default("pending"),
    carrier: varchar("carrier", { length: 64 }),
    trackingNumber: varchar("tracking_number", { length: 128 }),
    shippedAt: timestamp("shipped_at", { withTimezone: true }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    uniqueIndex("shipments_stripe_invoice_idx").on(table.stripeInvoiceId),
    index("shipments_user_id_idx").on(table.userId),
    index("shipments_status_idx").on(table.status),
  ],
);

/**
 * Lead capture. Used by the marketing forms before a visitor becomes a user.
 * Deduped by email + source so a visitor submitting twice does not duplicate.
 */
export const leads = pgTable(
  "leads",
  {
    email: varchar("email", { length: 320 }).notNull(),
    source: varchar("source", { length: 32 }).notNull(),
    name: varchar("name", { length: 200 }),
    message: text("message"),
    metadata: jsonb("metadata"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [primaryKey({ columns: [table.email, table.source] })],
);

/**
 * Assessment submissions. We store score inputs and computed results only after
 * explicit email capture so the assessment can be followed up responsibly.
 */
export const assessmentSubmissions = pgTable(
  "assessment_submissions",
  {
    id: bigint("id", { mode: "number" }).generatedAlwaysAsIdentity().primaryKey(),
    email: varchar("email", { length: 320 }).notNull(),
    sourceRoute: varchar("source_route", { length: 128 }).notNull().default("/assessment"),
    answers: jsonb("answers").notNull(),
    scoreByPillar: jsonb("score_by_pillar").notNull(),
    overallScore: integer("overall_score").notNull(),
    lowestPillar: varchar("lowest_pillar", { length: 32 }).notNull(),
    marketingConsent: integer("marketing_consent").notNull().default(0),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    index("assessment_submissions_email_idx").on(table.email),
    index("assessment_submissions_created_at_idx").on(table.createdAt),
  ],
);

/**
 * Webhook idempotency. Stripe can deliver the same event multiple times.
 * We upsert the event ID here and skip processing if it already exists.
 */
export const processedWebhookEvents = pgTable("processed_webhook_events", {
  eventId: varchar("event_id", { length: 128 }).primaryKey(),
  source: varchar("source", { length: 32 }).notNull(),
  processedAt: timestamp("processed_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});
