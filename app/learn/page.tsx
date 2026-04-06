import Link from "next/link";
import { CtaRail } from "@/components/ui/CtaRail";
import { PageHero } from "@/components/ui/PageHero";
import { learnArticles, learnCategories } from "@/content/learn";

export default function LearnPage() {
  return (
    <>
      <PageHero
        eyebrow="Journal / Learn"
        title="Editorial intelligence for long-horizon health."
        description="Learn from applied strategy, recovery science, and system-level wellness thinking."
      />

      <section className="py-16">
        <div className="section-wrap">
          <div className="mb-8 flex flex-wrap gap-2">
            {learnCategories.map((category) => (
              <Link
                key={category.slug}
                href={`/learn/category/${category.slug}`}
                className="rounded-full border border-line bg-bone-white/72 px-4 py-2 text-[10px] uppercase tracking-[0.17em] text-muted transition hover:border-sage/70 hover:text-obsidian"
              >
                {category.name}
              </Link>
            ))}
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {learnArticles.map((article) => (
              <article
                key={article.slug}
                className="luxury-card rounded-[26px] p-6 transition hover:-translate-y-1"
              >
                <p className="eyebrow">{article.publishedOn}</p>
                <h2 className="display-title mt-3 text-3xl font-medium">
                  {article.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {article.excerpt}
                </p>
                <p className="mt-3 text-[11px] uppercase tracking-[0.16em] text-stone/80">
                  {article.readTime}
                </p>
                <Link
                  href={`/learn/${article.slug}`}
                  className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-obsidian transition hover:translate-x-1 hover:text-terracotta"
                >
                  Read article
                  <span aria-hidden="true">{"->"}</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaRail
        title="Turn insight into action."
        description="When you are ready, move from reading to a personalized assessment and protocol path."
        primary={{ label: "Start Assessment", href: "/assessment" }}
        secondary={{ label: "View Protocols", href: "/protocols" }}
      />
    </>
  );
}
