import Image from "next/image";
import { getCategoryBySlug, learnArticles } from "@/content/learn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ActionButton } from "@/components/ui/ActionButton";
import { sectionPatterns } from "@/components/ui/sectionStyles";

export function JournalSection() {
  return (
    <section id="journal" className="section-space">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Education / Journal"
          title="Editorial intelligence for better decisions."
          description="Practical longevity thinking for adults optimizing body, skin, and cognitive health."
        />

        <ul className={`${sectionPatterns.contentGrid} md:grid-cols-2 xl:grid-cols-3`}>
          {learnArticles.map((entry) => (
            <li
              key={entry.slug}
              className="group luxury-card flex h-full flex-col overflow-hidden rounded-[22px] transition duration-500 hover:border-sage/70 md:hover:-translate-y-1 sm:rounded-[28px]"
            >
              <div className="relative h-44 overflow-hidden border-b border-line sm:h-52 md:h-56">
                <Image
                  src={entry.image}
                  alt={entry.title}
                  fill
                  className="object-cover object-[center_40%] transition duration-700 md:group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-bone-white/65 via-transparent to-transparent" />
              </div>
              <div className="p-4 sm:p-5 md:p-6">
                <p className="text-[11px] uppercase tracking-[0.22em] text-terracotta">
                  {getCategoryBySlug(entry.categorySlug)?.name ?? "Journal"}
                </p>
                <h3 className="display-title mt-2.5 text-[1.56rem] font-medium leading-[1.07] text-heading sm:text-[1.86rem] md:text-[2.06rem]">
                  {entry.title}
                </h3>
                <p className="mt-2.5 text-[0.94rem] leading-relaxed text-muted sm:text-sm">
                  {entry.excerpt}
                </p>
                <p className="ui-caps mt-4 text-muted/85">5 min read</p>
                <div className="mt-5">
                  <ActionButton
                    href={`/learn/${entry.slug}`}
                    variant="secondary"
                    className="sm:w-auto"
                  >
                    Read Article
                  </ActionButton>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
