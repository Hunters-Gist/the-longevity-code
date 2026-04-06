import Image from "next/image";
import { getCategoryBySlug, learnArticles } from "@/content/learn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function JournalSection() {
  return (
    <section id="journal" className="py-16 sm:py-24 lg:py-32">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Education / Journal"
          title="Editorial intelligence for better decisions."
          description="Practical longevity thinking for adults optimizing body, skin, and cognitive health."
        />

        <div className="mt-10 grid gap-3 sm:mt-12 sm:gap-4 md:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-5">
          {learnArticles.map((entry) => (
            <article
              key={entry.slug}
              className="group luxury-card overflow-hidden rounded-[24px] transition duration-500 hover:-translate-y-1.5 hover:border-sage/70 sm:rounded-[30px]"
            >
              <div className="relative h-48 overflow-hidden border-b border-line sm:h-56">
                <Image
                  src={entry.image}
                  alt={entry.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bone-white/65 via-transparent to-transparent" />
              </div>
              <div className="p-5 sm:p-6">
                <p className="text-[11px] uppercase tracking-[0.22em] text-gold">
                  {getCategoryBySlug(entry.categorySlug)?.name ?? "Journal"}
                </p>
                <h3 className="display-title mt-3 text-[2rem] font-medium leading-tight text-heading sm:text-4xl">
                  {entry.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {entry.excerpt}
                </p>
                <a
                  href={`/learn/${entry.slug}`}
                  className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-bone-white/80 px-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-obsidian transition duration-300 group-hover:translate-x-1 group-hover:border-sage/60 group-hover:text-terracotta"
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
