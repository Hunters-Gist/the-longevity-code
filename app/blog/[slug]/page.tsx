import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/content/sila";
import { PageHero } from "@/components/ui/PageHero";
import Image from "next/image";
import { absoluteUrl, siteConfig } from "@/lib/site-config";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((entry) => entry.slug === slug);

  if (!post) {
    return {
      title: "Article",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((entry) => entry.slug === slug);

  if (!post) {
    notFound();
  }

  const imageByCategory = {
    brain: "/images/hero/image.jpg",
    skin: "/images/journal/skin-aging.svg",
    body: "/images/journal/recovery-debt.svg",
    longevity: "/images/journal/longevity-strategy.svg",
    rehab: "/images/journal/recovery-debt.svg",
  } as const;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(`/blog/${post.slug}`),
    },
    author: {
      "@type": "Organization",
      name: "The Sila Code",
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: "The Sila Code Pty Ltd",
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/og-image.png"),
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Journal",
        item: absoluteUrl("/blog"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: absoluteUrl(`/blog/${post.slug}`),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <PageHero
        eyebrow="The Sila Journal"
        title={post.title}
        description={post.excerpt}
      />
      <section className="py-12 sm:py-16">
        <div className="section-wrap">
          <article className="glass-card rounded-[24px] p-6 sm:p-10">
            <div className="mb-6 overflow-hidden rounded-[24px] border border-line">
              <Image
                src={imageByCategory[post.category]}
                alt={`Editorial visual for ${post.title}`}
                width={900}
                height={620}
                className="h-56 w-full object-cover object-[center_40%] transition duration-700 ease-out hover:scale-105 sm:h-72"
              />
            </div>
            <p className="font-mono text-xs text-muted">
              {post.publishedOn} | {post.readTime}
            </p>
            <div className="mt-6 space-y-6">
              {post.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="display-title text-2xl text-heading sm:text-3xl">
                    {section.heading}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                    {section.body}
                  </p>
                </section>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/blog"
                className="inline-flex min-h-10 items-center rounded-full border border-sage/70 bg-bone-white/75 px-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-obsidian transition duration-300 hover:border-terracotta hover:text-terracotta"
              >
                Back to journal
              </Link>
              <Link
                href="/assessment"
                className="inline-flex min-h-10 items-center rounded-full bg-obsidian px-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-bone-white transition duration-300 hover:bg-terracotta"
              >
                Take the assessment
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
