import { PageHero } from "@/components/ui/PageHero";
import type { Metadata } from "next";
import Image from "next/image";

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
          <article className="glass-card overflow-hidden rounded-[22px] border border-line sm:rounded-[24px]">
            <Image
              src="/images/hero/Gemini_Generated_Image_e7iko4e7iko4e7ik.png"
              alt="FAQ knowledge banner"
              width={1600}
              height={1100}
              className="h-44 w-full object-cover object-[center_38%] transition duration-700 ease-out hover:scale-105 sm:h-56"
            />
          </article>
          {faqs.map((faq) => (
            <article key={faq.question} className="glass-card rounded-[22px] p-5 sm:rounded-[24px] sm:p-7">
              <h2 className="display-title text-[1.8rem] font-medium sm:text-3xl">{faq.question}</h2>
              <p className="mt-3 max-w-4xl text-sm leading-relaxed text-muted sm:text-base">
                {faq.answer}
              </p>
            </article>
          ))}
          <article className="luxury-card rounded-[22px] p-5 sm:rounded-[24px] sm:p-7">
            <p className="eyebrow">Knowledge asset rail</p>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-5">
              {[
                "/images/hero/image.jpg",
                "/images/journal/skin-aging.svg",
                "/images/journal/recovery-debt.svg",
                "/images/journal/longevity-strategy.svg",
                "/images/hero/image.jpg",
              ].map((imagePath, index) => (
                  <div
                    key={imagePath}
                    className="flex h-20 items-center justify-center rounded-2xl border border-line bg-bone-white/80"
                  >
                    <Image
                      src={imagePath}
                      alt={`FAQ topic visual ${index + 1}`}
                      width={180}
                      height={120}
                      className="h-full w-full object-cover object-center opacity-80"
                    />
                  </div>
                ))}
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
