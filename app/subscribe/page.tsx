import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import Image from "next/image";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { timingSafeEqual } from "node:crypto";

export const metadata: Metadata = {
  title: "Subscribe",
  description:
    "Compare Sila membership tiers and access member-only online courses.",
  alternates: {
    canonical: "/subscribe",
  },
};

const TIERS = [
  {
    name: "Community (Free)",
    price: "$0/month",
    rows: [
      "Sila Community access: Yes",
      "Weekly content drops: Yes",
      "Full course library: No",
      "Monthly masterclass: No",
      "Ebooks: Free only",
      "Monthly Sila Focus supply: No",
    ],
  },
  {
    name: "The Code (Digital)",
    price: "$29/month",
    rows: [
      "Sila Community access: Yes",
      "Weekly content drops: Yes",
      "Full course library: Yes",
      "Monthly masterclass: Yes",
      "Ebooks: All access",
      "Monthly Sila Focus supply: No",
    ],
  },
  {
    name: "The Code + Capsule",
    price: "$69/month",
    rows: [
      "Sila Community access: Yes",
      "Weekly content drops: Yes",
      "Full course library: Yes",
      "Monthly masterclass: Yes",
      "Ebooks: All access",
      "Monthly Sila Focus supply: Yes (auto-shipped)",
    ],
  },
];

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
      "Target the Brain, Skin, Body, Longevity, and Rehab pillars with structured modules and downloadable guides.",
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

  return (
    <>
      <PageHero
        eyebrow="Subscribe"
        title="Membership tiers built for momentum."
        description="Start with free community access and progress into digital or capsule-backed support."
      />
      <section className="py-12 sm:py-16">
        <div className="section-wrap space-y-6">
          <article className="glass-card overflow-hidden rounded-[24px] border border-line">
            <Image
              src="/images/hero/windows-241bwQl2uWE-unsplash-scaled.webp"
              alt="Subscription lifestyle visual"
              width={1600}
              height={1100}
              className="h-52 w-full object-cover object-[center_40%] transition duration-700 ease-out hover:scale-105 sm:h-60"
            />
          </article>
          <div className="grid gap-4 lg:grid-cols-3">
            {TIERS.map((tier, index) => (
              <article
                key={tier.name}
                className={`glass-card rounded-[24px] p-6 transition duration-500 hover:-translate-y-1 ${
                  index === 1 ? "lg:-translate-y-4" : ""
                }`}
              >
                <p className="eyebrow">{tier.name}</p>
                <h2 className="mt-3 font-mono text-3xl text-terracotta">{tier.price}</h2>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  {tier.rows.map((row) => (
                    <li key={row}>{row}</li>
                  ))}
                </ul>
                <button
                  type="button"
                  className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-obsidian px-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-bone-white transition duration-300 hover:bg-terracotta"
                >
                  Choose plan
                </button>
              </article>
            ))}
          </div>

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

          <article className="luxury-card rounded-[24px] p-6">
            <p className="eyebrow">Founding member callout</p>
            <h3 className="mt-3 text-2xl text-heading">
              The first 100 members lock in $49/month for life.
            </h3>
            <p className="mt-2 text-sm text-muted">
              This launch price never increases once secured.
            </p>
            <div className="mt-4 h-2 rounded-full bg-surface">
              <div className="h-full w-[68%] rounded-full bg-sage" />
            </div>
            <p className="mt-2 font-mono text-xs text-muted">32 founding spots remaining</p>
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
