import { homeContent } from "@/content/homepage";
import { PillarIcon } from "@/components/ui/PillarIcon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { sectionPatterns } from "@/components/ui/sectionStyles";
import Link from "next/link";

export function PillarsSection() {
  return (
    <section id="pillars" className="section-space">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Core Pillars"
          title="The five pillars of Sila."
          description="Every product, lesson, and recommendation maps back to Brain, Skin, Body, Longevity, or Recovery."
        />
        <div className="vine-line mt-5 sm:mt-6" aria-hidden="true" />

        <ul
          className={`${sectionPatterns.contentGrid} md:grid-cols-2 xl:grid-cols-12 xl:items-stretch xl:gap-6 2xl:gap-7`}
          aria-label="Sila wellness pillars"
        >
          {homeContent.pillars.map((pillar, index) => (
            <li
              key={pillar.title}
              className={`${
                index === 0
                  ? "md:col-span-2 xl:col-span-4"
                  : index === homeContent.pillars.length - 1
                    ? "md:col-span-2 xl:col-span-2"
                    : "xl:col-span-2"
              }`}
            >
              <Link
                href={`/the-code#${pillar.title.toLowerCase()}`}
                className={`group luxury-card relative block h-full overflow-hidden ${sectionPatterns.cardFrame} transition duration-500 hover:border-sage/55 md:hover:-translate-y-1 ${
                  index === 0
                    ? "lg:grid lg:grid-cols-[0.9fr_2fr] lg:items-center lg:gap-6 lg:p-7 xl:min-h-74"
                    : "xl:min-h-74 xl:px-5 xl:py-6"
                }`}
              >
                <div className="pointer-events-none absolute -right-10 -top-12 h-36 w-36 rounded-full bg-teal/18 blur-3xl transition duration-700 group-hover:bg-teal/30" />
                <div className="mb-4 inline-flex items-center gap-2.5 sm:mb-5">
                  <div className="inline-flex rounded-2xl border border-line/80 bg-bone-white/85 p-2.5 sm:p-3">
                    <PillarIcon icon={pillar.icon} />
                  </div>
                  <span className="ui-caps text-muted/80">0{index + 1}</span>
                </div>
                <div>
                  <h3
                    className={`display-title font-medium leading-[1.06] text-heading ${
                      index === 0 ? "text-[1.62rem] sm:text-[1.85rem]" : "text-[1.5rem] sm:text-[1.72rem]"
                    }`}
                  >
                    {pillar.title}
                  </h3>
                  <p className={`mt-2.5 text-[0.94rem] leading-relaxed text-muted sm:mt-3 sm:text-sm ${index === 0 ? "max-w-[36ch]" : "max-w-[30ch]"}`}>
                    {pillar.copy}
                  </p>
                  <p className="ui-caps mt-4 text-sage/90 transition duration-300 group-hover:text-terracotta">
                    Explore pillar
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
