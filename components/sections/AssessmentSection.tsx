import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { sectionPatterns } from "@/components/ui/sectionStyles";

export function AssessmentSection() {
  return (
    <section id="assessment-preview" className="section-space">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Assessment"
          title="Begin with the Sila Assessment."
          description="A 15-question educational self-reflection flow designed to generate your Sila Score."
        />

        <div className={`${sectionPatterns.compactGrid} lg:grid-cols-[1.15fr_0.85fr]`}>
          <article className={`luxury-card ${sectionPatterns.cardFrame} md:p-7`}>
            <p className="eyebrow">Assessment flow</p>
            <h3 className="display-title mt-2.5 max-w-[13ch] text-[1.64rem] font-medium leading-[1.06] sm:mt-3 sm:max-w-none sm:text-[2.1rem] md:text-[2.5rem]">
              Your Sila Score in about 5 minutes.
            </h3>
            <ul className="mt-4 space-y-3 text-[0.94rem] text-muted sm:mt-5 sm:text-sm">
              <li>01. Pillar-by-pillar mental wellness intake</li>
              <li>02. Stress and resilience score mapping</li>
              <li>03. Personalised pathway recommendation</li>
            </ul>
            <Link
              href="/assessment"
              className="ui-caps mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full border border-line bg-bone-white/82 px-5 text-obsidian transition duration-300 hover:border-sage/70 hover:text-terracotta focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:mt-7 sm:w-auto"
            >
              Start the assessment
            </Link>
          </article>

          <article className={`glass-card ${sectionPatterns.cardFrame} md:p-7`}>
            <p className="eyebrow">Why this matters</p>
            <p className="mt-2.5 text-[0.94rem] leading-relaxed text-muted sm:mt-3 sm:text-sm">
              Most people choose wellness products before diagnosing their
              actual bottleneck. The Sila Assessment segments your needs first
              so recommendations are targeted, measurable, and sustainable.
            </p>
            <Link
              href="/subscribe"
              className="ui-caps mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full border border-line bg-bone-white/82 px-5 text-obsidian transition duration-300 hover:border-sage/70 hover:text-terracotta focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:mt-7 sm:w-auto"
            >
              See Membership
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
