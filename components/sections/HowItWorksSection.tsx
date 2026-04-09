import { homeContent } from "@/content/homepage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { sectionPatterns } from "@/components/ui/sectionStyles";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="section-space">
      <div className="section-wrap">
        <div className="luxury-panel grain-overlay rounded-[24px] p-4 sm:rounded-[30px] sm:p-7 md:p-8 lg:p-10">
          <SectionHeading
            eyebrow="How It Works"
            title="The Sila onboarding funnel."
            description="Assessment first, then personalised pathways and recurring support that compound over time."
            align="center"
          />

          <ol className={`${sectionPatterns.compactGrid} md:grid-cols-2`}>
            {homeContent.process.map((step, index) => (
              <li
                key={step.title}
                className={`group glass-card relative overflow-hidden ${sectionPatterns.cardFrame} transition duration-500 hover:border-sage/55 md:hover:-translate-y-1`}
              >
                <div className="absolute -right-8 top-0 h-24 w-24 rounded-full bg-sage/16 blur-2xl transition duration-300 group-hover:bg-sage/26" />
                <div className="inline-flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-line bg-bone-white text-xs font-semibold text-sage">
                    {index + 1}
                  </span>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-muted">Step</p>
                </div>
                <h3 className="display-title mt-3 text-[1.56rem] font-medium leading-[1.07] text-heading sm:text-[1.92rem] md:text-[2.1rem]">
                  {step.title}
                </h3>
                <p className="mt-2.5 max-w-[38ch] text-[0.94rem] leading-relaxed text-muted sm:text-sm">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
