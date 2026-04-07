import { CtaRail } from "@/components/ui/CtaRail";
import { PageHero } from "@/components/ui/PageHero";
import { BRAND_NAME } from "@/content/brand";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A premium longevity studio for thoughtful adults."
        description={`${BRAND_NAME} blends assessment, protocol design, and editorial education into a single system for people who treat health as strategy.`}
      />

      <section className="py-12 sm:py-16">
        <div className="section-wrap grid gap-3 sm:gap-4 lg:grid-cols-2">
          <article className="glass-card rounded-[24px] p-5 sm:rounded-[28px] sm:p-9">
            <p className="eyebrow">Our philosophy</p>
            <h2 className="display-title mt-3 text-[2rem] font-medium sm:mt-4 sm:text-5xl">
              Restore the system, not just symptoms.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              We design around compounding outcomes: better sleep architecture,
              steadier energy, sharper cognition, and healthier aging over
              years, not weeks.
            </p>
          </article>
          <article className="luxury-card rounded-[24px] p-5 sm:rounded-[28px] sm:p-9">
            <p className="eyebrow">Method</p>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              Every journey starts with an assessment baseline. From there, we
              match protocols to priorities, then evolve your plan with
              membership continuity so progress does not plateau.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-muted">
              <li>Assessment-first intake</li>
              <li>Protocol mapping by objective</li>
              <li>Membership-led progression</li>
            </ul>
          </article>
        </div>
      </section>

      <CtaRail
        title="Build your long-game baseline."
        description="Start with assessment if you want precision, or explore protocols if you already know your objective."
        primary={{ label: "Start Assessment", href: "/assessment" }}
        secondary={{ label: "Explore Protocols", href: "/protocols" }}
      />
    </>
  );
}
