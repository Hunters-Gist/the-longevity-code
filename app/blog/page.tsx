import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS, SILA_PILLARS } from "@/content/sila";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "The Sila Journal",
  description:
    "Psychology-backed wellness content across Brain, Skin, Body, Longevity, and Rehab.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="The Sila Journal"
        title="Clinical thinking for daily wellbeing."
        description="Articles designed to build authority, improve execution, and support long-term outcomes."
      />

      <section className="py-12 sm:py-16">
        <div className="section-wrap">
          <div className="mb-6 flex flex-wrap gap-2">
            {SILA_PILLARS.map((pillar) => (
              <span
                key={pillar.key}
                className="rounded-full border border-line px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-muted"
              >
                {pillar.name}
              </span>
            ))}
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <article key={post.slug} className="luxury-card rounded-[24px] p-6">
                <p className="font-mono text-xs text-muted">
                  {post.publishedOn} | {post.readTime}
                </p>
                <h2 className="mt-3 text-2xl text-bone-white">{post.title}</h2>
                <p className="mt-3 text-sm text-muted">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-5 inline-flex min-h-10 items-center rounded-full border border-line px-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-bone-white transition hover:border-gold hover:text-gold"
                >
                  Read article
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
