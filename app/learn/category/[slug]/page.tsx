import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import {
  getCategoryBySlug,
  learnArticles,
  learnCategories,
} from "@/content/learn";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return learnCategories.map((category) => ({ slug: category.slug }));
}

export default async function LearnCategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const articles = learnArticles.filter(
    (article) => article.categorySlug === category.slug,
  );

  return (
    <>
      <PageHero
        eyebrow="Learn Category"
        title={category.name}
        description={category.description}
      />

      <section className="py-16">
        <div className="section-wrap grid gap-4 lg:grid-cols-2">
          {articles.map((article) => (
            <article key={article.slug} className="glass-card rounded-[26px] p-6">
              <h2 className="display-title text-3xl font-medium">{article.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {article.excerpt}
              </p>
              <Link
                href={`/learn/${article.slug}`}
                className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-obsidian transition hover:translate-x-1 hover:text-terracotta"
              >
                Read article
                <span aria-hidden="true">{"->"}</span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
