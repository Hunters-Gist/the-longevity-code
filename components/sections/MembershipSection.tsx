import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { sectionPatterns } from "@/components/ui/sectionStyles";

export function MembershipSection() {
  return (
    <section id="membership-preview" className="section-space">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Membership"
          title="Subscription paths built for real-world commitment."
          description="Move from free education into digital structure, then into capsule-backed continuity as your goals mature."
        />

        <div className={`${sectionPatterns.compactGrid} md:grid-cols-2 xl:grid-cols-3`}>
          <article className={`glass-card ${sectionPatterns.cardFrame}`}>
            <p className="eyebrow">Digital</p>
            <h3 className="display-title mt-2.5 text-[1.52rem] font-medium leading-[1.07] sm:text-[1.75rem]">
              The Code
            </h3>
            <p className="mt-2.5 text-[0.94rem] leading-relaxed text-muted sm:text-sm">
              $29/month for the full course library, masterclasses, and pillar implementation tools.
            </p>
            <p className="ui-caps mt-4 text-muted/85">Course library + tools</p>
          </article>
          <article className={`border border-line-strong bg-obsidian text-bone-white shadow-[0_24px_50px_-28px_rgba(10,18,15,0.75)] ${sectionPatterns.cardFrame}`}>
            <p className="eyebrow text-sage/90">Core Revenue Tier</p>
            <h3 className="display-title mt-2.5 text-[1.52rem] font-medium leading-[1.07] text-bone-white sm:text-[1.75rem]">
              Code + Capsule
            </h3>
            <p className="mt-2.5 text-[0.94rem] leading-relaxed text-bone-white/75 sm:text-sm">
              $69/month for digital access plus monthly nootropic capsule supply on auto-ship.
            </p>
            <p className="ui-caps mt-4 text-sage/85">Most complete pathway</p>
          </article>
          <article className={`glass-card ${sectionPatterns.cardFrame} md:col-span-2 xl:col-span-1`}>
            <p className="eyebrow">Launch Offer</p>
            <h3 className="display-title mt-2.5 text-[1.52rem] font-medium leading-[1.07] sm:text-[1.75rem]">
              Founding Member
            </h3>
            <p className="mt-2.5 text-[0.94rem] leading-relaxed text-muted sm:text-sm">
              $49/month locked pricing with early access and long-term member advantages.
            </p>
            <p className="ui-caps mt-4 text-muted/85">Early member pricing</p>
          </article>
        </div>

        <div className={sectionPatterns.ctaRow}>
          <Link
            href="/membership"
            className={sectionPatterns.ctaLinkPrimary}
          >
            View membership
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
