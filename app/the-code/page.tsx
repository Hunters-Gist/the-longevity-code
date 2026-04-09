import type { Metadata } from "next";
import { SILA_PILLARS } from "@/content/sila";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "The Code",
  description:
    "The five-pillar Sila methodology for cognitive wellness, resilience, and long-term health outcomes.",
  alternates: {
    canonical: "/the-code",
  },
};

export default function TheCodePage() {
  return (
    <>
      <PageHero
        eyebrow="Methodology"
        title="The Sila Code"
        description="A psychology-backed system organised across five pillars: Brain, Skin, Body, Longevity, and Rehab."
      />
      <section className="py-12 sm:py-16">
        <div className="section-wrap space-y-4">
          {SILA_PILLARS.map((pillar) => (
            <article
              id={pillar.key}
              key={pillar.key}
              className="glass-card rounded-[24px] border-l-4 p-6 sm:p-8"
              style={{ borderLeftColor: pillar.accent }}
            >
              <p className="eyebrow">{pillar.name}</p>
              <h2 className="display-title mt-3 text-3xl text-heading sm:text-4xl">
                {pillar.consumerLanguage}
              </h2>
              <p className="mt-3 max-w-4xl text-sm leading-relaxed text-muted sm:text-base">
                {pillar.focus}. Each recommendation in The Sila Code maps to
                this pillar so users can focus on the highest leverage point
                first, then layer progress over time.
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
