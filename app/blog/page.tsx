import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS, SILA_PILLARS } from "@/content/sila";
import { PageHero } from "@/components/ui/PageHero";
import { SafeImage } from "@/components/ui/SafeImage";

export const metadata: Metadata = {
  title: "The Sila Journal",
  description:
    "Psychology-backed wellness content across Brain, Skin, Body, Longevity, and Recovery.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  const coverImages = [
    "/images/hero/image.jpg",
    "/images/journal/skin-aging.svg",
    "/images/journal/recovery-debt.svg",
    "/images/journal/longevity-strategy.svg",
    "/images/hero/image.jpg",
  ];

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
            {BLOG_POSTS.map((post, index) => (
              <article
                key={post.slug}
                className={`luxury-card rounded-[24px] p-6 transition duration-500 hover:-translate-y-1 ${
                  index % 2 === 1 ? "lg:translate-y-6" : ""
                }`}
              >
                <div className="mb-4 overflow-hidden rounded-[20px] border border-line">
                  <SafeImage
                    src={coverImages[index % coverImages.length]}
                    alt={`Journal cover image for ${post.title}`}
                    width={900}
                    height={620}
                    fallbackLabel="Sila journal visual"
                    className="h-44 w-full object-cover object-[center_40%] transition duration-700 ease-out hover:scale-105"
                  />
                </div>
                <p className="font-mono text-xs text-muted">
                  {post.publishedOn} | {post.readTime}
                </p>
                <h2 className="display-title mt-3 text-2xl text-heading">{post.title}</h2>
                <p className="mt-3 text-sm text-muted">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-5 inline-flex min-h-10 items-center rounded-full border border-sage/70 bg-bone-white/75 px-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-obsidian transition duration-300 hover:border-terracotta hover:text-terracotta"
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
