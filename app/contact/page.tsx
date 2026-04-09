import { PageHero } from "@/components/ui/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact The Sila Code for product support, partnerships, community questions, and general enquiries.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Speak with The Sila Code team."
        description="Use this form for product questions, subscription support, partnerships, and media enquiries."
      />

      <section className="py-12 sm:py-16">
        <div className="section-wrap grid gap-3 sm:gap-4 md:grid-cols-[1.05fr_0.95fr] lg:grid-cols-[1.1fr_0.9fr]">
          <form className="glass-card rounded-[24px] p-5 sm:rounded-[28px] sm:p-9">
            <p className="eyebrow">Contact form</p>
            <div className="mt-4 grid gap-3 sm:mt-5">
              <input
                type="text"
                placeholder="Full name"
                className="h-12 rounded-2xl border border-line bg-surface px-4 text-sm text-bone-white placeholder:text-muted focus:border-gold focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="h-12 rounded-2xl border border-line bg-surface px-4 text-sm text-bone-white placeholder:text-muted focus:border-gold focus:outline-none"
              />
              <textarea
                placeholder="How can we help?"
                rows={5}
                className="rounded-2xl border border-line bg-surface px-4 py-3 text-sm text-bone-white placeholder:text-muted focus:border-gold focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-gold px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-obsidian transition hover:bg-[#d9ba84] sm:w-auto sm:text-xs sm:tracking-[0.16em]"
            >
              Send enquiry
            </button>
          </form>

          <article className="luxury-card rounded-[24px] p-5 sm:rounded-[28px] sm:p-9">
            <p className="eyebrow">Priority channels</p>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              <li>General support: hello@thesilacode.com</li>
              <li>Subscription support: support@thesilacode.com</li>
              <li>Partnerships and media: partnerships@thesilacode.com</li>
            </ul>
          </article>
        </div>
      </section>
    </>
  );
}
