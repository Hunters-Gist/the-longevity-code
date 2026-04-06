import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";

const faqs = [
  {
    question: "How is this different from generic wellness coaching?",
    answer:
      "The process is assessment-first and protocol-driven, with a clear progression path into membership.",
  },
  {
    question: "Can I join membership directly?",
    answer:
      "Yes. You can join directly, but assessment is recommended for better protocol fit and faster results.",
  },
  {
    question: "Do you offer educational content updates?",
    answer:
      "Yes. Journal / Learn content is part of the ecosystem and expands alongside protocols and membership.",
  },
];

export function FaqPreviewSection() {
  return (
    <section id="faq-preview" className="py-24 sm:py-32">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="FAQ"
          title="Clear answers before you commit."
          description="Everything you need to understand assessment, protocols, and membership fit."
        />
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {faqs.map((faq) => (
            <article key={faq.question} className="glass-card rounded-[24px] p-6">
              <h3 className="display-title text-2xl font-medium">{faq.question}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{faq.answer}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-teal transition hover:translate-x-1"
          >
            Read all FAQs
            <span aria-hidden="true">{"->"}</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-sage transition hover:translate-x-1"
          >
            Contact concierge
            <span aria-hidden="true">{"->"}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
