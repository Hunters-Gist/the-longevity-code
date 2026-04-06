import { homeContent } from "@/content/homepage";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="How It Works"
          title="A clear path to measurable longevity."
          description="Structured onboarding, intelligent protocols, and progress tracking designed to compound results."
          align="center"
        />

        <ol className="mt-14 grid gap-4 md:grid-cols-2">
          {homeContent.process.map((step, index) => (
            <li
              key={step.title}
              className="group luxury-card relative overflow-hidden rounded-[28px] p-6 sm:p-7 transition duration-300 hover:-translate-y-1 hover:border-sage/55"
            >
              <div className="absolute -right-8 top-0 h-24 w-24 rounded-full bg-sage/16 blur-2xl transition duration-300 group-hover:bg-sage/26" />
              <p className="text-xs uppercase tracking-[0.22em] text-teal">
                Step {index + 1}
              </p>
              <h3 className="display-title mt-4 text-4xl font-medium text-bone-white">
                {step.title}
              </h3>
              <p className="mt-3 max-w-[38ch] text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
