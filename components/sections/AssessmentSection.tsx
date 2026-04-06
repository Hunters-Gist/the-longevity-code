import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AssessmentSection() {
  return (
    <section id="assessment-preview" className="py-24 sm:py-32">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Assessment"
          title="Begin with precision, not guesswork."
          description="Our assessment maps recovery patterns, stress profile, and wellbeing priorities before recommending any protocol."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="luxury-card rounded-[28px] p-7 sm:p-8">
            <p className="eyebrow">Assessment flow</p>
            <h3 className="display-title mt-4 text-4xl font-medium sm:text-5xl">
              Your baseline in under 12 minutes.
            </h3>
            <ul className="mt-6 space-y-3 text-sm text-muted">
              <li>01. Recovery and wellbeing intake</li>
              <li>02. Lifestyle and stress-load mapping</li>
              <li>03. Strategic protocol recommendation</li>
            </ul>
            <Link
              href="/assessment"
              className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-obsidian transition hover:translate-x-1 hover:text-terracotta"
            >
              Start the assessment
              <span aria-hidden="true">{"->"}</span>
            </Link>
          </article>

          <article className="glass-card rounded-[28px] p-7 sm:p-8">
            <p className="eyebrow">Why this matters</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Most people apply generic routines to specific problems.
              Assessment lets us match your protocol to your current system
              state so changes are targeted, measurable, and sustainable.
            </p>
            <Link
              href="/protocols"
              className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-obsidian transition hover:translate-x-1 hover:text-terracotta"
            >
              See protocols
              <span aria-hidden="true">{"->"}</span>
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
