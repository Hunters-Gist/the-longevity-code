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
        title="Membership designed for the long game."
        description="Choose your level and start immediately. Assessment remains recommended for best-fit protocol sequencing."
      />

      <section id="join" className="py-12 sm:py-16">
        <div className="section-wrap grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className="luxury-card rounded-[24px] p-5 sm:rounded-[28px] sm:p-7 md:last:col-span-2 lg:last:col-span-1"
            >
              <p className="eyebrow">{plan.name}</p>
              <h2 className="display-title mt-3 text-[2rem] font-semibold sm:text-4xl">{plan.price}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{plan.note}</p>
              <button
                type="button"
                className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-obsidian px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-bone-white transition hover:bg-deep-charcoal sm:mt-7 sm:text-xs sm:tracking-[0.16em]"
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
