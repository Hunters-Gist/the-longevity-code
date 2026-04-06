import { CtaRail } from "@/components/ui/CtaRail";
import { PageHero } from "@/components/ui/PageHero";

export default function AssessmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Assessment"
        title="A diagnostic entry into your longevity plan."
        description="Assessment is the fastest way to understand your current baseline and route into the right protocol sequence."
      />

      <section className="py-16">
        <div className="section-wrap grid gap-4 lg:grid-cols-3">
          <article className="glass-card rounded-[26px] p-6">
            <p className="eyebrow">Step 1</p>
            <h2 className="display-title mt-3 text-3xl font-medium">Intake</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Recovery, stress, and lifestyle questionnaire.
            </p>
          </article>
          <article className="luxury-card rounded-[26px] p-6">
            <p className="eyebrow">Step 2</p>
            <h2 className="display-title mt-3 text-3xl font-medium">Baseline</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Structured baseline map with high-impact opportunities.
            </p>
          </article>
          <article className="glass-card rounded-[26px] p-6">
            <p className="eyebrow">Step 3</p>
            <h2 className="display-title mt-3 text-3xl font-medium">Plan</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Protocol recommendation and clear next-step membership path.
            </p>
          </article>
        </div>
      </section>

      <CtaRail
        title="Ready to map your baseline?"
        description="Use assessment as your first move, then either run a focused protocol or join membership directly."
        primary={{ label: "Begin Assessment", href: "/contact" }}
        secondary={{ label: "View Membership", href: "/membership" }}
      />
    </>
  );
}
