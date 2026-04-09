import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function MembershipSection() {
  return (
    <section id="membership-preview" className="py-16 sm:py-24 lg:py-32">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Membership"
          title="Subscription paths built for real-world commitment."
          description="Move from free education into digital structure, then into capsule-backed continuity as your goals mature."
        />

        <div className="mt-10 grid gap-3 sm:mt-12 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
          <article className="glass-card rounded-[22px] p-5 sm:rounded-[26px] sm:p-6">
            <p className="eyebrow">Digital</p>
            <h3 className="display-title mt-3 text-[1.9rem] font-medium sm:text-3xl">The Code</h3>
            <p className="mt-3 text-sm text-muted">
              $29/month for the full course library, masterclasses, and pillar implementation tools.
            </p>
          </article>
          <article className="luxury-card rounded-[22px] p-5 sm:rounded-[26px] sm:p-6">
            <p className="eyebrow">Core Revenue Tier</p>
            <h3 className="display-title mt-3 text-[1.9rem] font-medium sm:text-3xl">Code + Capsule</h3>
            <p className="mt-3 text-sm text-muted">
              $69/month for digital access plus monthly nootropic capsule supply on auto-ship.
            </p>
          </article>
          <article className="glass-card rounded-[22px] p-5 sm:rounded-[26px] sm:p-6 md:col-span-2 lg:col-span-1">
            <p className="eyebrow">Launch Offer</p>
            <h3 className="display-title mt-3 text-[1.9rem] font-medium sm:text-3xl">Founding Member</h3>
            <p className="mt-3 text-sm text-muted">
              $49/month locked pricing with early access and long-term member advantages.
            </p>
          </article>
        </div>

        <div className="mt-7 grid gap-2 sm:mt-8 sm:flex sm:flex-wrap sm:gap-3">
          <Link
            href="/membership"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-obsidian px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-bone-white transition hover:bg-deep-charcoal sm:w-auto sm:text-xs sm:tracking-[0.16em]"
          >
            View membership
          </Link>
          <Link
            href="/assessment"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-sage/70 bg-bone-white/75 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-obsidian transition hover:border-terracotta hover:text-terracotta sm:w-auto sm:text-xs sm:tracking-[0.16em]"
          >
            Start with assessment
          </Link>
        </div>
      </div>
    </section>
  );
}
