import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { sectionPatterns } from "@/components/ui/sectionStyles";

export function MembershipSection() {
  return (
    <section id="membership-preview" className="section-space">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Membership"
          title="Private-practice membership across five tiers."
          description="From free community to the invitation-only Inner Circle — one standard across every tier."
        />

        <div className={`${sectionPatterns.compactGrid} md:grid-cols-2 xl:grid-cols-3`}>
          <article className={`glass-card ${sectionPatterns.cardFrame}`}>
            <p className="eyebrow">The Code</p>
            <h3 className="display-title mt-2.5 text-[1.52rem] font-medium leading-[1.07] sm:text-[1.75rem]">
              A$149 / month
            </h3>
            <p className="mt-2.5 text-[0.94rem] leading-relaxed text-muted sm:text-sm">
              Full course library, monthly masterclasses, member-only community, and complete pillar implementation tools.
            </p>
            <p className="ui-caps mt-4 text-muted/85">Digital practice</p>
          </article>
          <article className={`border border-line-strong bg-obsidian text-bone-white shadow-[0_24px_50px_-28px_rgba(10,18,15,0.75)] ${sectionPatterns.cardFrame}`}>
            <p className="eyebrow text-sage/90">The concierge tier</p>
            <h3 className="display-title mt-2.5 text-[1.52rem] font-medium leading-[1.07] text-bone-white sm:text-[1.75rem]">
              The Code + Capsule
            </h3>
            <p className="mt-2.5 text-[0.94rem] leading-relaxed text-bone-white/75 sm:text-sm">
              A$349/month. Everything in The Code plus monthly Sila Focus delivery, quarterly 1:1 check-in, and concierge support.
            </p>
            <p className="ui-caps mt-4 text-sage/85">Most complete pathway</p>
          </article>
          <article className={`glass-card ${sectionPatterns.cardFrame} md:col-span-2 xl:col-span-1`}>
            <p className="eyebrow">Founder waitlist</p>
            <h3 className="display-title mt-2.5 text-[1.52rem] font-medium leading-[1.07] sm:text-[1.75rem]">
              Founding 100
            </h3>
            <p className="mt-2.5 text-[0.94rem] leading-relaxed text-muted sm:text-sm">
              Release-gated while legal, fulfilment, and member operations are finalised. Join the waitlist before public checkout opens.
            </p>
            <p className="ui-caps mt-4 text-muted/85">Coming soon</p>
          </article>
        </div>

        <div className={sectionPatterns.ctaRow}>
          <Link
            href="/subscribe"
            className={sectionPatterns.ctaLinkPrimary}
          >
            View all tiers
          </Link>
          <Link
            href="/assessment"
            className={sectionPatterns.ctaLinkSecondary}
          >
            Start with assessment
          </Link>
        </div>
      </div>
    </section>
  );
}
