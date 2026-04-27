import { PageHero } from "@/components/ui/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Sila Focus, assessment scoring, subscriptions, and compliance.",
  alternates: {
    canonical: "/faq",
  },
};

const faqs = [
  {
    question: "What is the Sila Assessment?",
    answer:
      "It is a free 15-question educational self-reflection flow that scores you across Brain, Skin, Body, Longevity, and Recovery to guide your best-fit pathway.",
  },
  {
    question: "What does 'Sila' mean?",
    answer:
      "'Sila' means strength in Russian. It reflects the brand philosophy: build resilient systems that hold under pressure.",
  },
  {
    question: "Is The Sila Code medical treatment?",
    answer:
      "No. The platform provides educational wellness guidance and does not replace medical diagnosis, treatment, or emergency care.",
  },
  {
    question: "What are the membership tiers?",
    answer:
      "Community is free. The Code (Digital) is A$149/month or A$1,490/year. The Code + Capsule is A$349/month or A$3,490/year and includes monthly Sila Focus delivery. Founding 100 is release-gated until fulfilment and operating terms are finalised. Inner Circle is an invitation-only annual advisory.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes. Sila Focus ships Australia-wide and internationally. Checkout displays shipping costs and any applicable taxes before payment.",
  },
  {
    question: "How is compliance handled for product language?",
    answer:
      "We use conservative Australian wellness language — supports focus, helps maintain general wellbeing, supports mental clarity — and avoid therapeutic claims. Sila Focus is a wellness supplement, not a medicine.",
  },
];

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <PageHero
        eyebrow="FAQ"
        title="Clear answers before you commit."
        description="Key details about products, subscriptions, assessment scoring, and compliance guardrails."
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
