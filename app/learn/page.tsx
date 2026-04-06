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

      <section className="py-12 sm:py-16">
        <div className="section-wrap">
          <div className="mb-6 flex flex-wrap gap-2 sm:mb-8">
            {learnCategories.map((category) => (
              <Link
                key={category.slug}
                href={`/learn/category/${category.slug}`}
                className="inline-flex min-h-10 items-center rounded-full border border-line bg-bone-white/72 px-4 py-2 text-[10px] uppercase tracking-[0.16em] text-muted transition hover:border-sage/70 hover:text-obsidian"
              >
                {category.name}
              </Link>
            ))}
          </div>
          <div className="grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
            {learnArticles.map((article) => (
              <article
                key={article.slug}
                className="luxury-card rounded-[22px] p-5 transition hover:-translate-y-1 sm:rounded-[26px] sm:p-6"
              >
                <p className="eyebrow">{article.publishedOn}</p>
                <h2 className="display-title mt-3 text-[1.9rem] font-medium sm:text-3xl">
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
                  className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-bone-white/75 px-4 text-xs font-semibold uppercase tracking-[0.15em] text-obsidian transition hover:translate-x-1 hover:border-sage/70 hover:text-terracotta"
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
