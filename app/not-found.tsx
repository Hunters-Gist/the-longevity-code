import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "The page you requested no longer exists or has been moved. Return to The Sila Code.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="404"
        title="This page has moved, or never was."
        description="Use the links below to find what you were looking for, or return to the homepage."
      />
      <section className="py-12 sm:py-16">
        <div className="section-wrap">
          <div className="luxury-card rounded-[24px] p-6 sm:p-9">
            <p className="eyebrow">Most common destinations</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <Link
                href="/"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-obsidian px-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-bone-white transition hover:bg-terracotta"
              >
                Return home
              </Link>
              <Link
                href="/assessment"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-sage/70 bg-bone-white/75 px-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-obsidian transition hover:border-terracotta hover:text-terracotta"
              >
                Take the Sila Assessment
              </Link>
              <Link
                href="/subscribe"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-line bg-bone-white/75 px-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-obsidian transition hover:border-terracotta hover:text-terracotta"
              >
                View Membership
              </Link>
              <Link
                href="/blog"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-line bg-bone-white/75 px-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-obsidian transition hover:border-terracotta hover:text-terracotta"
              >
                Read the Journal
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
