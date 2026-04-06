import { CtaRail } from "@/components/ui/CtaRail";
import { PageHero } from "@/components/ui/PageHero";

const plans = [
  {
    name: "Essential",
    price: "$149/mo",
    note: "For disciplined consistency and guided progression.",
  },
  {
    name: "Advanced",
    price: "$299/mo",
    note: "For health-conscious adults optimizing longevity and resilience.",
  },
  {
    name: "Executive",
    price: "$749/mo",
    note: "For white-glove strategic oversight and priority support.",
  },
];

export default function MembershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Membership"
        title="Direct join membership for the long game."
        description="Choose your level and start immediately. Assessment remains recommended for best-fit protocol sequencing."
      />

      <section id="join" className="py-16">
        <div className="section-wrap grid gap-4 lg:grid-cols-3">
          {plans.map((plan) => (
            <article key={plan.name} className="luxury-card rounded-[28px] p-7">
              <p className="eyebrow">{plan.name}</p>
              <h2 className="display-title mt-3 text-4xl font-semibold">{plan.price}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{plan.note}</p>
              <button
                type="button"
                className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-obsidian px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-bone-white transition hover:bg-deep-charcoal"
              >
                Join {plan.name}
              </button>
            </article>
          ))}
        </div>
      </section>

      <CtaRail
        title="Want a personalized starting point first?"
        description="Run assessment before joining to get a cleaner protocol match and faster momentum."
        primary={{ label: "Start Assessment", href: "/assessment" }}
        secondary={{ label: "Read FAQs", href: "/faq" }}
      />
    </>
  );
}
