import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { sectionPatterns } from "@/components/ui/sectionStyles";

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
      "Yes. The Journal expands weekly alongside membership, covering the five pillars and behavioural science.",
  },
];

const faqActions = [
  { href: "/faq", label: "Read all FAQs", intent: "default" as const },
  { href: "/contact", label: "Contact concierge", intent: "sage" as const },
];

export function FaqPreviewSection() {
  return (
    <section id="faq-preview" className="section-space">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="FAQ"
          title="Clear answers before you commit."
          description="Everything you need to understand assessment, protocols, and membership fit."
        />
        <ul className={`${sectionPatterns.compactGrid} md:grid-cols-2 xl:grid-cols-3`}>
          {faqs.map((faq) => (
            <li key={faq.question} className={`glass-card ${sectionPatterns.cardFrame} sm:rounded-[24px]`}>
              <h3 className="display-title text-[1.38rem] font-medium leading-[1.08] sm:text-[1.56rem]">
                {faq.question}
              </h3>
              <p className="mt-2.5 text-[0.94rem] leading-relaxed text-muted sm:text-sm">{faq.answer}</p>
            </li>
          ))}
        </ul>
        <div className={sectionPatterns.ctaRow}>
          {faqActions.map((action) => (
            <Link
              key={action.href}
              href={action.href}
              className={`ui-caps inline-flex min-h-12 w-full items-center justify-center rounded-full border border-line bg-bone-white/75 px-5 text-obsidian transition duration-300 sm:w-auto ${
                action.intent === "sage"
                  ? "hover:border-sage/80 hover:text-sage"
                  : "hover:border-terracotta hover:text-terracotta"
              }`}
            >
              {action.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
