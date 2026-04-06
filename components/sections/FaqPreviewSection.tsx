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
    <section id="faq-preview" className="py-16 sm:py-24 lg:py-32">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="FAQ"
          title="Clear answers before you commit."
          description="Everything you need to understand assessment, protocols, and membership fit."
        />
        <div className="mt-10 grid gap-3 sm:mt-12 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
          {faqs.map((faq) => (
            <article key={faq.question} className="glass-card rounded-[22px] p-5 sm:rounded-[24px] sm:p-6">
              <h3 className="display-title text-[1.55rem] font-medium sm:text-2xl">{faq.question}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{faq.answer}</p>
            </article>
          ))}
        </div>
        <div className="mt-7 grid gap-2 sm:mt-8 sm:flex sm:flex-wrap sm:gap-3">
          <Link
            href="/faq"
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-line bg-bone-white/75 px-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-teal transition hover:translate-x-1 sm:w-auto"
          >
            Read all FAQs
            <span aria-hidden="true">{"->"}</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-line bg-bone-white/75 px-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-sage transition hover:translate-x-1 sm:w-auto"
          >
            Contact concierge
            <span aria-hidden="true">{"->"}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
