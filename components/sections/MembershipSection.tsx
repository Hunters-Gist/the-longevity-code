import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function MembershipSection() {
  return (
    <section id="membership-preview" className="py-16 sm:py-24 lg:py-32">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Membership"
          title="Premium continuity for people who value compounding health."
          description="A direct join model with monthly and annual options, built around strategic progression and editorial-level guidance."
        />

        <div className="mt-10 grid gap-3 sm:mt-12 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
          <article className="glass-card rounded-[22px] p-5 sm:rounded-[26px] sm:p-6">
            <p className="eyebrow">Foundation</p>
            <h3 className="display-title mt-3 text-[1.9rem] font-medium sm:text-3xl">Essential</h3>
            <p className="mt-3 text-sm text-muted">
              For building consistency through a clear guided structure.
            </p>
          </article>
          <article className="luxury-card rounded-[22px] p-5 sm:rounded-[26px] sm:p-6">
            <p className="eyebrow">Progression</p>
            <h3 className="display-title mt-3 text-[1.9rem] font-medium sm:text-3xl">Advanced</h3>
            <p className="mt-3 text-sm text-muted">
              For health-conscious adults optimizing the next decade.
            </p>
          </article>
          <article className="glass-card rounded-[22px] p-5 sm:rounded-[26px] sm:p-6 md:col-span-2 lg:col-span-1">
            <p className="eyebrow">Private</p>
            <h3 className="display-title mt-3 text-[1.9rem] font-medium sm:text-3xl">Executive</h3>
            <p className="mt-3 text-sm text-muted">
              White-glove oversight for maximal precision and continuity.
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
