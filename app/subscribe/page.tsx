import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { timingSafeEqual } from "node:crypto";
import { createCheckoutSession, openCustomerPortal } from "@/app/actions/checkout";
import { isFounding100Enabled, type SilaTierKey } from "@/lib/stripe/pricing";
import { communityHref } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "Private-practice membership across five tiers — from free community access to lifetime Founding 100 seats and the invitation-only Inner Circle.",
  alternates: {
    canonical: "/subscribe",
  },
};

type Tier = {
  name: string;
  price: string;
  priceNote?: string;
  positioning: string;
  rows: string[];
  cta: string;
  ctaHref?: string;
  stripeTier?: SilaTierKey;
  featured?: boolean;
  invitationOnly?: boolean;
};

const TIERS: Tier[] = [
  {
    name: "Community",
    price: "Free",
    positioning: "Begin the work.",
    rows: [
      "Full access to the Sila Community on Skool",
      "Weekly editorial drops across the five pillars",
      "The Sila Assessment and personalised Sila Score",
      "Invitations to complimentary live events",
    ],
    cta: "Join Community",
    ctaHref: communityHref(),
  },
  {
    name: "The Code",
    price: "A$149 / month",
    priceNote: "or A$1,490 / year — save A$298",
    positioning: "The private practice.",
    rows: [
      "The full Sila course library and new releases",
      "Monthly founder masterclass and member Q&A",
      "Priority community access and member-only drops",
      "Digital library of every Sila ebook and protocol",
      "Full Sila Assessment progression and pillar reviews",
    ],
    cta: "Become a Member",
    stripeTier: "the_code_monthly",
  },
  {
    name: "The Code + Capsule",
    price: "A$349 / month",
    priceNote: "or A$3,490 / year — save A$698",
    positioning: "The concierge tier.",
    rows: [
      "Everything in The Code",
      "Monthly delivery of Sila Focus — your cognitive formula",
      "Quarterly 1:1 check-in call with a Sila practitioner",
      "Early access to new formulations and retreats",
      "Concierge support on WhatsApp, Mon–Fri",
    ],
    cta: "Join the Capsule",
    stripeTier: "capsule_monthly",
    featured: true,
  },
  {
    name: "Founding 100",
    price: "A$4,900 one-time",
    priceNote: "Waitlist-only while operations, legal, and fulfilment are finalised.",
    positioning: "Founding waitlist.",
    rows: [
      "Lifetime access details will be confirmed before any payment is accepted",
      "Founder recognition and priority access once the release is ready",
      "Private retreat and formulation input subject to final operating terms",
      "No public checkout while the release flag is disabled",
      "Join the waitlist for first access to confirmed deliverables",
    ],
    cta: "Join the Waitlist",
    stripeTier: "founding_100",
  },
  {
    name: "Inner Circle",
    price: "A$25,000 / year",
    priceNote: "By invitation only.",
    positioning: "Concierge advisory.",
    rows: [
      "12-month private advisory with the founder",
      "Bespoke behavioural and longevity protocols",
      "Two private retreats in Australia per year",
      "Direct-line access: WhatsApp and private events",
      "All lower-tier benefits, included by default",
    ],
    cta: "Request an Invitation",
    ctaHref:
      "mailto:contact@thesilacode.com?subject=Inner%20Circle%20Application",
    invitationOnly: true,
  },
];

async function startCheckout(formData: FormData) {
  "use server";
  const tier = String(formData.get("tier") ?? "") as SilaTierKey;
  await createCheckoutSession(tier);
}

async function launchPortal() {
  "use server";
  await openCustomerPortal();
}

const MEMBER_COURSES = [
  {
    title: "The Sila Foundations",
    level: "Member Core",
    summary:
      "Build your baseline with practical lessons on behavior design, identity reinforcement, and weekly implementation.",
    access: "Digital + Capsule members",
  },
  {
    title: "Pillar Deep Dives",
    level: "Member Core",
    summary:
      "Target the Brain, Skin, Body, Longevity, and Recovery pillars with structured modules and downloadable guides.",
    access: "Digital + Capsule members",
  },
  {
    title: "Performance Integration",
    level: "Advanced",
    summary:
      "Turn knowledge into execution with routines, check-in templates, and guided monthly progression frameworks.",
    access: "Capsule + Founding members",
  },
] as const;

const MEMBER_ACCESS_COOKIE = "sila_member_access";
const MEMBER_ACCESS_GRANTED = "granted";
const MEMBER_ATTEMPTS_COOKIE = "sila_member_attempts";
const MEMBER_LOCKED_UNTIL_COOKIE = "sila_member_locked_until";
const MAX_MEMBER_UNLOCK_ATTEMPTS = 5;
const MEMBER_LOCK_DURATION_MS = 15 * 60 * 1000;

function secureCookieOptions() {
  return {
    httpOnly: true,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    path: "/",
  };
}

function parseInteger(value: string | undefined): number | null {
  if (!value) {
    return null;
  }

  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) ? parsed : null;
}

function constantTimeMatch(submittedCode: string, configuredCode: string): boolean {
  const submittedBytes = Buffer.from(submittedCode);
  const configuredBytes = Buffer.from(configuredCode);

  if (submittedBytes.length !== configuredBytes.length) {
    return false;
  }

  return timingSafeEqual(submittedBytes, configuredBytes);
}

async function unlockMemberCourses(formData: FormData) {
  "use server";

  const submittedCode = String(formData.get("memberCode") ?? "").trim();
  const configuredCode = process.env.MEMBER_ACCESS_CODE;
  const cookieStore = await cookies();
  const now = Date.now();

  const lockedUntil = parseInteger(cookieStore.get(MEMBER_LOCKED_UNTIL_COOKIE)?.value);
  if (lockedUntil && now < lockedUntil) {
    redirect("/subscribe?member-error=locked#member-courses");
  }

  if (!configuredCode) {
    redirect("/subscribe?member-error=unavailable#member-courses");
  }

  const failedAttempts = parseInteger(cookieStore.get(MEMBER_ATTEMPTS_COOKIE)?.value) ?? 0;
  const isMatch = submittedCode
    ? constantTimeMatch(submittedCode, configuredCode)
    : false;

  if (!isMatch) {
    const nextAttempts = failedAttempts + 1;
    cookieStore.set({
      name: MEMBER_ATTEMPTS_COOKIE,
      value: String(nextAttempts),
      maxAge: 60 * 60 * 24,
      ...secureCookieOptions(),
    });

    if (nextAttempts >= MAX_MEMBER_UNLOCK_ATTEMPTS) {
      cookieStore.set({
        name: MEMBER_LOCKED_UNTIL_COOKIE,
        value: String(now + MEMBER_LOCK_DURATION_MS),
        maxAge: 60 * 60 * 24,
        ...secureCookieOptions(),
      });
      redirect("/subscribe?member-error=locked#member-courses");
    }

    redirect("/subscribe?member-error=invalid#member-courses");
  }

  cookieStore.delete(MEMBER_ATTEMPTS_COOKIE);
  cookieStore.delete(MEMBER_LOCKED_UNTIL_COOKIE);
  cookieStore.set({
    name: MEMBER_ACCESS_COOKIE,
    value: MEMBER_ACCESS_GRANTED,
    maxAge: 60 * 60 * 24 * 30,
    ...secureCookieOptions(),
  });

  redirect("/subscribe?member-unlocked=1#member-courses");
}

async function lockMemberCourses() {
  "use server";

  const cookieStore = await cookies();
  cookieStore.delete(MEMBER_ACCESS_COOKIE);
  cookieStore.delete(MEMBER_ATTEMPTS_COOKIE);
  cookieStore.delete(MEMBER_LOCKED_UNTIL_COOKIE);
  redirect("/subscribe#member-courses");
}

type SubscribePageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function SubscribePage({ searchParams }: SubscribePageProps) {
  const cookieStore = await cookies();
  const params = searchParams ? await searchParams : {};
  const hasMemberAccess = cookieStore.get(MEMBER_ACCESS_COOKIE)?.value === MEMBER_ACCESS_GRANTED;
  const memberUnlocked = params["member-unlocked"] === "1";
  const memberError = params["member-error"] === "invalid";
  const memberLocked = params["member-error"] === "locked";
  const memberUnavailable = params["member-error"] === "unavailable";
  const checkoutStatus = params.checkout;
  const portalStatus = params.portal;
  const foundingEnabled = isFounding100Enabled();

  return (
    <>
      <PageHero
        eyebrow="Membership"
        title="Five tiers. One standard."
        description="The Sila Code is a lifestyle, not a subscription box. Each tier is a private practice — choose the depth of support that meets your ambition."
      />
      <section className="py-12 sm:py-16">
        <div className="section-wrap space-y-6">
          {checkoutStatus === "success" ? (
            <div
              role="status"
              aria-live="polite"
              className="rounded-2xl border border-sage/40 bg-sage/10 px-4 py-3 text-sm text-heading"
            >
              Thank you — your membership is being provisioned. You will receive a confirmation
              email within a few minutes.
            </div>
          ) : null}
          {checkoutStatus === "cancelled" ? (
            <div
              role="status"
              aria-live="polite"
              className="rounded-2xl border border-terracotta/40 bg-terracotta/10 px-4 py-3 text-sm text-heading"
            >
              Checkout was cancelled. No payment was taken — you can try again below.
            </div>
          ) : null}
          {checkoutStatus === "unavailable" ? (
            <div
              role="status"
              aria-live="polite"
              className="rounded-2xl border border-line bg-bone-white/75 px-4 py-3 text-sm text-heading"
            >
              Membership checkout is activating for the first cohort. Please try again shortly — or
              contact us at{" "}
              <a
                href="mailto:contact@thesilacode.com"
                className="underline decoration-sage/60 underline-offset-4 hover:text-terracotta"
              >
                contact@thesilacode.com
              </a>
              .
            </div>
          ) : null}
          {portalStatus === "missing-customer" ? (
            <div
              role="status"
              aria-live="polite"
              className="rounded-2xl border border-line bg-bone-white/75 px-4 py-3 text-sm text-heading"
            >
              We couldn’t find an active subscription on your account yet. Join a tier below, or
              email us if you believe this is an error.
            </div>
          ) : null}
          <div className="grid gap-4 lg:grid-cols-3">
            {TIERS.map((tier) => {
              const foundingDisabled =
                tier.stripeTier === "founding_100" && !foundingEnabled;
              const foundingActive =
                tier.stripeTier === "founding_100" && foundingEnabled;
              const displayedRows = foundingActive
                ? [
                    "Lifetime access to The Code + Capsule at today’s rate",
                    "Founder recognition inside the community",
                    "Private invitation to the inaugural Sila retreat",
                    "Direct input into formulations and programming",
                    "All future tier benefits, included by default",
                  ]
                : tier.rows;
              const displayedCta = foundingActive ? "Claim a Founding Seat" : tier.cta;
              const displayedPriceNote = foundingActive
                ? "Capped at 100 members. Closes forever."
                : tier.priceNote;
              const displayedPositioning = foundingActive
                ? "Lifetime ownership."
                : tier.positioning;
              const ctaClasses = `mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full px-5 text-[11px] font-semibold uppercase tracking-[0.14em] transition duration-300 ${
                tier.featured
                  ? "bg-bone-white text-obsidian hover:bg-terracotta hover:text-bone-white"
                  : "bg-obsidian text-bone-white hover:bg-terracotta"
              }`;
              return (
                <article
                  key={tier.name}
                  className={`glass-card rounded-[24px] p-6 transition duration-500 hover:-translate-y-1 ${
                    tier.featured
                      ? "border border-line-strong bg-obsidian text-bone-white shadow-[0_24px_50px_-28px_rgba(10,18,15,0.7)] lg:-translate-y-4 hover:border-terracotta/60"
                      : ""
                  }`}
                >
                  <p className={`eyebrow ${tier.featured ? "text-sage/85" : ""}`}>
                    {displayedPositioning}
                  </p>
                  <h2
                    className={`mt-3 display-title text-2xl leading-tight sm:text-[1.85rem] ${
                      tier.featured ? "text-bone-white" : "text-heading"
                    }`}
                  >
                    {tier.name}
                  </h2>
                  <p
                    className={`mt-3 font-mono text-2xl ${
                      tier.featured ? "text-bone-white" : "text-terracotta"
                    }`}
                  >
                    {tier.price}
                  </p>
                  {displayedPriceNote ? (
                    <p
                      className={`mt-1 text-xs ${
                        tier.featured ? "text-bone-white/70" : "text-muted"
                      }`}
                    >
                      {displayedPriceNote}
                    </p>
                  ) : null}
                  <ul
                    className={`mt-4 space-y-2 text-sm ${
                      tier.featured ? "text-bone-white/85" : "text-muted"
                    }`}
                  >
                    {displayedRows.map((row) => (
                      <li key={row}>— {row}</li>
                    ))}
                  </ul>
                  {foundingDisabled ? (
                    <Link href="/contact" className={ctaClasses}>
                      {displayedCta}
                    </Link>
                  ) : tier.stripeTier ? (
                    <form action={startCheckout}>
                      <input type="hidden" name="tier" value={tier.stripeTier} />
                      <button type="submit" className={ctaClasses}>
                        {displayedCta}
                      </button>
                    </form>
                  ) : tier.ctaHref ? (
                    <Link
                      href={tier.ctaHref}
                      className={ctaClasses}
                      {...(tier.ctaHref.startsWith("http")
                        ? { target: "_blank", rel: "noreferrer" }
                        : {})}
                    >
                      {displayedCta}
                    </Link>
                  ) : null}
                  {tier.invitationOnly ? (
                    <p
                      className={`mt-3 text-xs ${
                        tier.featured ? "text-bone-white/65" : "text-muted"
                      }`}
                    >
                      Membership extended on a case-by-case basis.
                    </p>
                  ) : null}
                </article>
              );
            })}
          </div>
          <article className="luxury-card flex flex-wrap items-center justify-between gap-3 rounded-[24px] p-6">
            <div>
              <p className="eyebrow">Existing member?</p>
              <p className="mt-2 text-sm text-muted">
                Manage your plan, update your card, or view invoices in the secure Stripe portal.
              </p>
            </div>
            <form action={launchPortal}>
              <button
                type="submit"
                className="inline-flex min-h-11 items-center rounded-full border border-line bg-bone-white/80 px-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-obsidian transition duration-300 hover:border-terracotta hover:text-terracotta"
              >
                Manage membership
              </button>
            </form>
          </article>

          <article
            id="member-courses"
            className="glass-card rounded-[24px] border border-line/80 p-6 sm:p-8"
          >
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="eyebrow">Members only</p>
                <h3 className="mt-3 text-2xl text-heading sm:text-[2rem]">
                  Online course section for members
                </h3>
                <p className="mt-2 max-w-2xl text-sm text-muted">
                  Every paid member tier includes structured online coursework designed to build long-term consistency.
                </p>
              </div>
            </div>

            {hasMemberAccess ? (
              <>
                {memberUnlocked ? (
                  <p className="mt-4 rounded-xl border border-sage/40 bg-sage/10 px-4 py-3 text-sm text-heading">
                    Member access unlocked. Your online courses are now visible.
                  </p>
                ) : null}
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  {MEMBER_COURSES.map((course) => (
                    <article
                      key={course.title}
                      className="rounded-2xl border border-line/70 bg-bone-white/80 p-5"
                    >
                      <p className="ui-caps text-muted/85">{course.level}</p>
                      <h4 className="mt-2 text-lg text-heading">{course.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{course.summary}</p>
                      <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-terracotta">
                        Access: {course.access}
                      </p>
                    </article>
                  ))}
                </div>
                <form action={lockMemberCourses} className="mt-6">
                  <button
                    type="submit"
                    className="inline-flex min-h-11 items-center rounded-full border border-line bg-bone-white/80 px-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-obsidian transition duration-300 hover:border-terracotta hover:text-terracotta"
                  >
                    Lock member section
                  </button>
                </form>
              </>
            ) : (
              <div className="mt-6 rounded-2xl border border-dashed border-line bg-bone-white/70 p-5 sm:p-6">
                <p className="text-sm text-muted">
                  This course library is visible to members only. Enter your member access code to unlock.
                </p>
                {memberError ? (
                  <p className="mt-3 rounded-xl border border-terracotta/40 bg-terracotta/10 px-4 py-3 text-sm text-heading">
                    That member code is not valid. Please try again.
                  </p>
                ) : null}
                {memberLocked ? (
                  <p className="mt-3 rounded-xl border border-terracotta/40 bg-terracotta/10 px-4 py-3 text-sm text-heading">
                    Too many failed attempts. Please wait 15 minutes before trying again.
                  </p>
                ) : null}
                {memberUnavailable ? (
                  <p className="mt-3 rounded-xl border border-terracotta/40 bg-terracotta/10 px-4 py-3 text-sm text-heading">
                    Member access is temporarily unavailable. Please contact support.
                  </p>
                ) : null}
                <form action={unlockMemberCourses} className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <label htmlFor="memberCode" className="sr-only">
                    Member access code
                  </label>
                  <input
                    id="memberCode"
                    name="memberCode"
                    type="password"
                    required
                    autoComplete="off"
                    placeholder="Enter member code"
                    className="min-h-11 flex-1 rounded-full border border-line bg-white px-4 text-sm text-heading outline-none transition focus:border-terracotta"
                  />
                  <button
                    type="submit"
                    className="inline-flex min-h-11 items-center justify-center rounded-full bg-obsidian px-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-bone-white transition duration-300 hover:bg-terracotta"
                  >
                    Unlock courses
                  </button>
                </form>
              </div>
            )}
          </article>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/assessment"
              className="inline-flex min-h-11 items-center rounded-full border border-sage/70 bg-bone-white/75 px-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-obsidian transition duration-300 hover:border-terracotta hover:text-terracotta"
            >
              Take the assessment first
            </Link>
            <Link
              href="/shop/sila-focus"
              className="inline-flex min-h-11 items-center rounded-full bg-obsidian px-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-bone-white transition duration-300 hover:bg-terracotta"
            >
              View Sila Focus
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
