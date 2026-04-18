import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import Image from "next/image";
import { forumGroups, weeklyTopics } from "@/content/community";
import { buildCommunityInsightsSnapshot } from "@/lib/communityAnalytics";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Join The Sila Community for weekly education, accountability, and practical wellness execution.",
  alternates: {
    canonical: "/community",
  },
};

export default function CommunityPage() {
  const analyticsPreview = buildCommunityInsightsSnapshot();

  return (
    <>
      <PageHero
        eyebrow="Community"
        title="The Sila Community"
        description="A members-first forum where people can share what works for illness support, mental health, beauty goals, and everyday wellbeing."
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
              <li>Community groups for peptides, aging, supplements, and psychology</li>
              <li>Skin care and new product forums with member-led feedback</li>
              <li>Peer support on mental health and real-world wellness results</li>
              <li>AI-prioritised weekly topics based on member demand signals</li>
            </ul>
          </article>
          <article className="glass-card rounded-[24px] p-6 sm:p-8">
            <h3 className="display-title text-2xl text-heading">Member forum groups</h3>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
              Consumers can bounce ideas off each other, compare approaches, and
              document what helps most across illness support, wellbeing, and beauty.
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {forumGroups.map((group) => (
                <li
                  key={group.slug}
                  className="rounded-[18px] border border-line bg-bone-white/75 p-4"
                >
                  <p className="font-semibold text-heading">{group.title}</p>
                  <p className="mt-2 text-sm text-muted">{group.summary}</p>
                  <p className="mt-3 text-xs text-muted">
                    Outcomes: {group.outcomes.join(" | ")}
                  </p>
                </li>
              ))}
            </ul>
          </article>
          <article className="luxury-card rounded-[24px] p-6 sm:p-8">
            <h3 className="display-title text-2xl text-heading">Weekly intelligence feed</h3>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
              AI ranks weekly content priorities from member conversations so education
              and resources stay aligned to what people want right now.
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {weeklyTopics.map((topic) => (
                <li
                  key={topic.title}
                  className="rounded-[18px] border border-line bg-bone-white/70 p-4"
                >
                  <p className="font-semibold text-heading">{topic.title}</p>
                  <p className="mt-2 text-sm text-muted">{topic.summary}</p>
                  <p className="mt-3 ui-caps text-muted">{topic.cadence}</p>
                </li>
              ))}
            </ul>
          </article>
          <article className="glass-card rounded-[24px] p-6 sm:p-8">
            <h3 className="display-title text-2xl text-heading">
              Autonomous BOH analytics preview
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
              Live intelligence tracks what members discuss most, what outcomes they
              are chasing, and what your next weekly drop should focus on.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="rounded-[16px] border border-line bg-bone-white/80 p-4">
                <p className="ui-caps text-muted">Active now</p>
                <p className="mt-1 text-2xl font-semibold text-heading">
                  {analyticsPreview.activeMembersNow}
                </p>
              </div>
              <div className="rounded-[16px] border border-line bg-bone-white/80 p-4">
                <p className="ui-caps text-muted">Weekly posts</p>
                <p className="mt-1 text-2xl font-semibold text-heading">
                  {analyticsPreview.weeklyPosts}
                </p>
              </div>
              <div className="rounded-[16px] border border-line bg-bone-white/80 p-4">
                <p className="ui-caps text-muted">Weekly comments</p>
                <p className="mt-1 text-2xl font-semibold text-heading">
                  {analyticsPreview.weeklyComments}
                </p>
              </div>
            </div>
            <Link
              href="/boh"
              className="mt-6 inline-flex min-h-11 items-center rounded-full border border-sage/70 bg-bone-white px-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-obsidian transition duration-300 hover:border-terracotta hover:text-terracotta"
            >
              Open BOH dashboard
            </Link>
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
