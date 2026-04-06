import { homeContent } from "@/content/homepage";
import { PillarIcon } from "@/components/ui/PillarIcon";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PillarsSection() {
  return (
    <section id="pillars" className="py-20 sm:py-28">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Core Pillars"
          title="A complete longevity framework."
          description="Four integrated systems designed to improve how you age, recover, and perform."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {homeContent.pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="group glass-card rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:border-sage/50"
            >
              <div className="mb-4 inline-flex rounded-xl border border-line/80 bg-black/20 p-2.5">
                <PillarIcon icon={pillar.icon} />
              </div>
              <h3 className="text-xl font-display font-medium text-bone-white">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {pillar.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
