import { homeContent } from "@/content/homepage";
import { PillarIcon } from "@/components/ui/PillarIcon";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PillarsSection() {
  return (
    <section id="pillars" className="py-16 sm:py-24 lg:py-32">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Core Pillars"
          title="A complete longevity framework."
          description="Four integrated systems designed to support how you age, recover, and feel over time."
        />

        <div className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:mt-14 lg:grid-cols-12">
          {homeContent.pillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className={`group luxury-card relative overflow-hidden rounded-[24px] p-5 transition duration-300 hover:-translate-y-1.5 hover:border-sage/55 sm:rounded-[28px] sm:p-6 ${
                index === 0 ? "lg:col-span-6 lg:p-8" : "lg:col-span-3"
              }`}
            >
              <div className="pointer-events-none absolute -right-10 -top-12 h-36 w-36 rounded-full bg-teal/18 blur-3xl transition duration-500 group-hover:bg-teal/30" />
              <div className="mb-5 inline-flex rounded-2xl border border-line/80 bg-bone-white/75 p-3">
                <PillarIcon icon={pillar.icon} />
              </div>
              <h3 className="display-title text-[1.8rem] font-medium text-heading sm:text-[2rem]">
                {pillar.title}
              </h3>
              <p className="mt-3 max-w-[34ch] text-sm leading-relaxed text-muted sm:mt-4">
                {pillar.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
