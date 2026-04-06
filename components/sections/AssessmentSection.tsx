import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AssessmentSection() {
  return (
    <section id="assessment-preview" className="py-16 sm:py-24 lg:py-32">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Assessment"
          title="Begin with precision, not guesswork."
          description="Our assessment maps recovery patterns, stress profile, and wellbeing priorities before recommending any protocol."
        />

        <div className="mt-10 grid gap-3 sm:mt-12 sm:gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="luxury-card rounded-[24px] p-5 sm:rounded-[28px] sm:p-8">
            <p className="eyebrow">Assessment flow</p>
            <h3 className="display-title mt-3 text-[2rem] font-medium sm:mt-4 sm:text-5xl">
              Your baseline in under 12 minutes.
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-muted sm:mt-6">
              <li>01. Recovery and wellbeing intake</li>
              <li>02. Lifestyle and stress-load mapping</li>
              <li>03. Strategic protocol recommendation</li>
            </ul>
            <Link
              href="/assessment"
              className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-bone-white/80 px-4 text-xs font-semibold uppercase tracking-[0.15em] text-obsidian transition hover:translate-x-1 hover:border-sage/70 hover:text-terracotta sm:mt-8"
            >
              Start the assessment
              <span aria-hidden="true">{"->"}</span>
            </Link>
          </article>

          <article className="glass-card rounded-[24px] p-5 sm:rounded-[28px] sm:p-8">
            <p className="eyebrow">Why this matters</p>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:mt-4">
              Most people apply generic routines to specific problems.
              Assessment lets us match your protocol to your current system
              state so changes are targeted, measurable, and sustainable.
            </p>
            <Link
              href="/protocols"
              className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-bone-white/80 px-4 text-xs font-semibold uppercase tracking-[0.15em] text-obsidian transition hover:translate-x-1 hover:border-sage/70 hover:text-terracotta sm:mt-8"
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
