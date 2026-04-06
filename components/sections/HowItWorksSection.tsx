import { homeContent } from "@/content/homepage";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="How It Works"
          title="A clear path to measurable longevity."
          description="Structured onboarding, intelligent protocols, and progress tracking designed to compound results."
          align="center"
        />

        <ol className="mt-12 grid gap-4 md:grid-cols-2">
          {homeContent.process.map((step, index) => (
            <li
              key={step.title}
              className="glass-card rounded-3xl p-6 sm:p-7 transition hover:border-sage/50"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-teal">
                Step {index + 1}
              </p>
              <h3 className="mt-3 text-2xl font-display font-medium text-bone-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
