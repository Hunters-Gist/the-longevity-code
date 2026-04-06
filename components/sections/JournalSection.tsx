import Image from "next/image";
import { homeContent } from "@/content/homepage";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function JournalSection() {
  return (
    <section id="journal" className="py-20 sm:py-28">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Education / Journal"
          title="Editorial intelligence for better decisions."
          description="Practical longevity thinking for men optimizing body, skin, and cognitive health."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {homeContent.journal.map((entry) => (
            <article
              key={entry.title}
              className="group overflow-hidden rounded-3xl border border-line bg-surface/70"
            >
              <div className="relative h-52 overflow-hidden border-b border-line">
                <Image
                  src={entry.image}
                  alt={entry.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-gold">
                  {entry.category}
                </p>
                <h3 className="mt-3 text-2xl font-display font-medium leading-tight text-bone-white">
                  {entry.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {entry.excerpt}
                </p>
                <a
                  href="#"
                  className="mt-5 inline-flex text-xs font-semibold uppercase tracking-[0.16em] text-teal transition hover:text-sage"
                >
                  Read Article
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
