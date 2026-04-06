import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function MembershipSection() {
  return (
    <section id="membership-preview" className="py-24 sm:py-32">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Membership"
          title="Premium continuity for people who value compounding health."
          description="A direct join model with monthly and annual options, built around strategic progression and editorial-level guidance."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          <article className="glass-card rounded-[26px] p-6">
            <p className="eyebrow">Foundation</p>
            <h3 className="display-title mt-3 text-3xl font-medium">Essential</h3>
            <p className="mt-3 text-sm text-muted">
              For building consistency through a clear guided structure.
            </p>
          </article>
          <article className="luxury-card rounded-[26px] p-6">
            <p className="eyebrow">Progression</p>
            <h3 className="display-title mt-3 text-3xl font-medium">Advanced</h3>
            <p className="mt-3 text-sm text-muted">
              For health-conscious adults optimizing the next decade.
            </p>
          </article>
          <article className="glass-card rounded-[26px] p-6">
            <p className="eyebrow">Private</p>
            <h3 className="display-title mt-3 text-3xl font-medium">Executive</h3>
            <p className="mt-3 text-sm text-muted">
              White-glove oversight for maximal precision and continuity.
            </p>
          </article>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/membership"
            className="inline-flex items-center justify-center rounded-full bg-obsidian px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-bone-white transition hover:bg-deep-charcoal"
          >
            View membership
          </Link>
          <Link
            href="/assessment"
            className="inline-flex items-center justify-center rounded-full border border-sage/70 bg-bone-white/75 px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-obsidian transition hover:border-terracotta hover:text-terracotta"
          >
            Start with assessment
          </Link>
        </div>
      </div>
    </section>
  );
}
