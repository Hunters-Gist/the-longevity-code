import { homeContent } from "@/content/homepage";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 lg:py-32">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="How It Works"
          title="The Sila onboarding funnel."
          description="Assessment first, then personalised pathways and recurring support that compound over time."
          align="center"
        />

        <ol className="mt-10 grid gap-3 sm:mt-12 sm:gap-4 md:grid-cols-2">
          {homeContent.process.map((step, index) => (
            <li
              key={step.title}
              className="group luxury-card relative overflow-hidden rounded-[24px] p-5 transition duration-300 hover:-translate-y-1 hover:border-sage/55 sm:rounded-[28px] sm:p-7"
            >
              <div className="absolute -right-8 top-0 h-24 w-24 rounded-full bg-sage/16 blur-2xl transition duration-300 group-hover:bg-sage/26" />
              <p className="text-xs uppercase tracking-[0.22em] text-muted">
                Step {index + 1}
              </p>
              <h3 className="display-title mt-3 text-[2rem] font-medium text-heading sm:mt-4 sm:text-4xl">
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
