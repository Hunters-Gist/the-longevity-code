import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaRail } from "@/components/ui/CtaRail";
import { PageHero } from "@/components/ui/PageHero";
import { getArticleBySlug, getCategoryBySlug, learnArticles } from "@/content/learn";

type LearnArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return learnArticles.map((article) => ({ slug: article.slug }));
}

export default async function LearnArticlePage({ params }: LearnArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const category = getCategoryBySlug(article.categorySlug);

  return (
    <>
      <PageHero
        eyebrow={category?.name ?? "Journal"}
        title={article.title}
        description={article.excerpt}
      />

      <section className="py-12 sm:py-16">
        <div className="section-wrap">
          <article className="glass-card rounded-[24px] p-5 sm:rounded-[28px] sm:p-10">
            <div className="mb-5 flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-stone/80 sm:mb-6 sm:gap-3 sm:tracking-[0.16em]">
              <span>{article.publishedOn}</span>
              <span>-</span>
              <span>{article.readTime}</span>
              {category ? (
                <>
                  <span>-</span>
                  <Link href={`/learn/category/${category.slug}`}>{category.name}</Link>
                </>
              ) : null}
            </div>
            <div className="space-y-7 sm:space-y-8">
              {article.sections.map((section) => (
                <section key={section.heading} className="space-y-3">
                  <h2 className="display-title text-[1.8rem] font-medium sm:text-4xl">
                    {section.heading}
                  </h2>
                  <p className="max-w-4xl text-sm leading-relaxed text-muted sm:text-base">
                    {section.body}
                  </p>
                </section>
              ))}
            </div>
          </article>
        </div>
      </section>

      <CtaRail
        title="Apply what you just learned."
        description="Move from education to execution with an assessment-backed protocol."
        primary={{ label: "Start Assessment", href: "/assessment" }}
        secondary={{ label: "Explore Membership", href: "/membership" }}
      />
    </>
  );
}
