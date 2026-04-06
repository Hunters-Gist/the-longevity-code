import { CtaRail } from "@/components/ui/CtaRail";
import { PageHero } from "@/components/ui/PageHero";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A premium longevity house for thoughtful adults."
        description="The Longevity Code blends assessment, protocol design, and editorial education into a single system for people who treat health as strategy."
      />

      <section className="py-16">
        <div className="section-wrap grid gap-4 lg:grid-cols-2">
          <article className="glass-card rounded-[28px] p-7 sm:p-9">
            <p className="eyebrow">Our philosophy</p>
            <h2 className="display-title mt-4 text-4xl font-medium sm:text-5xl">
              Restore the system, not just symptoms.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              We design around compounding outcomes: better sleep architecture,
              steadier energy, sharper cognition, and healthier aging over
              years, not weeks.
            </p>
          </article>
          <article className="luxury-card rounded-[28px] p-7 sm:p-9">
            <p className="eyebrow">Method</p>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              Every journey starts with an assessment baseline. From there, we
              match protocols to priorities, then evolve your plan with
              membership continuity so progress does not plateau.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-stone">
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
