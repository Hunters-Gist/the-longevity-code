import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Subscribe",
  description:
    "Compare Sila subscription tiers: Community, The Code Digital, and The Code + Capsule.",
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

export default function SubscribePage() {
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
