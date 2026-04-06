import Image from "next/image";
import { getCategoryBySlug, learnArticles } from "@/content/learn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function JournalSection() {
  return (
    <section id="journal" className="py-24 sm:py-32">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Education / Journal"
          title="Editorial intelligence for better decisions."
          description="Practical longevity thinking for adults optimizing body, skin, and cognitive health."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {learnArticles.map((entry) => (
            <article
              key={entry.slug}
              className="group luxury-card overflow-hidden rounded-[30px] transition duration-500 hover:-translate-y-1.5 hover:border-sage/70"
            >
              <div className="relative h-56 overflow-hidden border-b border-line">
                <Image
                  src={entry.image}
                  alt={entry.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bone-white/65 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <p className="text-[11px] uppercase tracking-[0.22em] text-gold">
                  {getCategoryBySlug(entry.categorySlug)?.name ?? "Journal"}
                </p>
                <h3 className="display-title mt-3 text-4xl font-medium leading-tight text-heading">
                  {entry.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {entry.excerpt}
                </p>
                <a
                  href={`/learn/${entry.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-obsidian transition duration-300 group-hover:translate-x-1 group-hover:text-terracotta"
                >
                  Read Article
                  <span aria-hidden="true">{"->"}</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
