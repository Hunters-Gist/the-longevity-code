import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/content/sila";
import { PageHero } from "@/components/ui/PageHero";

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

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedOn,
    author: {
      "@type": "Organization",
      name: "The Sila Code",
    },
    publisher: {
      "@type": "Organization",
      name: "The Sila Code Pty Ltd",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
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
            <p className="font-mono text-xs text-muted">
              {post.publishedOn} | {post.readTime}
            </p>
            <div className="mt-6 space-y-6">
              {post.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-2xl text-bone-white sm:text-3xl">
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
                className="inline-flex min-h-10 items-center rounded-full border border-line px-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-bone-white"
              >
                Back to journal
              </Link>
              <Link
                href="/assessment"
                className="inline-flex min-h-10 items-center rounded-full bg-gold px-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-obsidian"
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
