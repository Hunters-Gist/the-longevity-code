import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Join The Sila Community for weekly education, accountability, and practical wellness execution.",
  alternates: {
    canonical: "/community",
  },
};

export default function CommunityPage() {
  return (
    <>
      <PageHero
        eyebrow="Community"
        title="The Sila Community"
        description="A free, psychology-informed space for accountability, weekly implementation prompts, and practical wellbeing education."
      />
      <section className="py-12 sm:py-16">
        <div className="section-wrap space-y-4">
          <article className="glass-card rounded-[24px] p-6 sm:p-8">
            <h2 className="display-title text-3xl text-heading sm:text-4xl">
              What you get inside
            </h2>
            <div className="mt-4 overflow-hidden rounded-[24px] border border-line lg:rounded-t-[140px] lg:rounded-b-[30px]">
              <Image
                src="/images/hero/premium_photo-1676815865390-8e3a9336f64b.avif"
                alt="Community wellbeing banner"
                width={1600}
                height={1100}
                className="h-44 w-full object-cover object-[center_38%] transition duration-700 ease-out hover:scale-105 sm:h-56"
              />
            </div>
            <ul className="mt-4 grid gap-2 text-sm text-muted sm:grid-cols-2">
              <li>Weekly content drops mapped to the five pillars</li>
              <li>Implementation prompts and habit reinforcement</li>
              <li>Community-led accountability and momentum</li>
              <li>Priority updates on product and programme releases</li>
            </ul>
          </article>
          <article className="luxury-card rounded-[24px] p-6 sm:p-8">
            <h3 className="display-title text-2xl text-heading">Join via Skool</h3>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
              The Sila Community is hosted on Skool so members can engage with
              lessons, updates, and discussion in one place.
            </p>
            <Link
              href="https://thesilacode.skool.com"
              className="mt-6 inline-flex min-h-11 items-center rounded-full bg-obsidian px-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-bone-white transition duration-300 hover:bg-terracotta"
            >
              Go to the Sila Community
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}
