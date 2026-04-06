import { PageHero } from "@/components/ui/PageHero";

const faqs = [
  {
    question: "Should I start with assessment or membership?",
    answer:
      "Assessment is ideal for precision. Membership supports direct join, but assessment improves fit and speed of results.",
  },
  {
    question: "Are protocol pages standalone programs?",
    answer:
      "Yes. Protocols can be run independently or stacked as part of a broader membership progression.",
  },
  {
    question: "Is this medical advice?",
    answer:
      "No. The platform provides educational and wellness guidance and does not replace licensed medical care.",
  },
  {
    question: "Will there be products in the future?",
    answer:
      "Yes. Premium wellness products are planned and will be integrated into the editorial and protocol ecosystem.",
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Answers for high-intent decisions."
        description="The essentials on assessment, protocols, membership, and platform boundaries."
      />

      <section className="py-12 sm:py-16">
        <div className="section-wrap grid gap-3 sm:gap-4">
          {faqs.map((faq) => (
            <article key={faq.question} className="glass-card rounded-[22px] p-5 sm:rounded-[24px] sm:p-7">
              <h2 className="display-title text-[1.8rem] font-medium sm:text-3xl">{faq.question}</h2>
              <p className="mt-3 max-w-4xl text-sm leading-relaxed text-muted sm:text-base">
                {faq.answer}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
