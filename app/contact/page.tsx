import { PageHero } from "@/components/ui/PageHero";
import type { Metadata } from "next";
import Image from "next/image";
import { captureContactEnquiry } from "@/app/actions/leads";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact The Sila Code for product support, partnerships, community questions, and general enquiries.",
  alternates: {
    canonical: "/contact",
  },
};

type ContactPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = searchParams ? await searchParams : {};
  const status = params.status;
  const isSuccess = status === "success";
  const isInvalid = status === "invalid";

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Speak with The Sila Code team."
        description="Use this form for product questions, subscription support, partnerships, and media enquiries. We respond within 2 business days."
      />

      <section className="py-12 sm:py-16">
        <div className="section-wrap grid gap-3 sm:gap-4 md:grid-cols-[1.05fr_0.95fr] lg:grid-cols-[1.1fr_0.9fr]">
          <form
            action={captureContactEnquiry}
            className="glass-card rounded-[24px] p-5 sm:rounded-[28px] sm:p-9"
          >
            <p className="eyebrow">Contact form</p>
            {isSuccess ? (
              <p className="mt-4 rounded-xl border border-sage/40 bg-sage/10 px-4 py-3 text-sm text-heading">
                Thank you — your enquiry has been received. We will be in touch within 2 business days.
              </p>
            ) : null}
            {isInvalid ? (
              <p className="mt-4 rounded-xl border border-terracotta/40 bg-terracotta/10 px-4 py-3 text-sm text-heading">
                Please check that your name, email, and message are complete and try again.
              </p>
            ) : null}
            <div className="mt-4 grid gap-3 sm:mt-5">
              <label htmlFor="contact-name" className="sr-only">
                Full name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Full name"
                className="h-12 rounded-2xl border border-line bg-bone-white px-4 text-sm text-obsidian placeholder:text-muted focus:border-sage focus:outline-none"
              />
              <label htmlFor="contact-email" className="sr-only">
                Email address
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="Email"
                className="h-12 rounded-2xl border border-line bg-bone-white px-4 text-sm text-obsidian placeholder:text-muted focus:border-sage focus:outline-none"
              />
              <label htmlFor="contact-message" className="sr-only">
                Your message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                placeholder="How can we help?"
                rows={5}
                maxLength={4000}
                className="rounded-2xl border border-line bg-bone-white px-4 py-3 text-sm text-obsidian placeholder:text-muted focus:border-sage focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-obsidian px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-bone-white transition duration-300 hover:bg-terracotta sm:w-auto sm:text-xs sm:tracking-[0.16em]"
            >
              Send enquiry
            </button>
            <div className="vine-line mt-6 sm:mt-8" aria-hidden="true" />
          </form>

          <article className="luxury-card rounded-[24px] p-5 sm:rounded-[28px] sm:p-9">
            <p className="eyebrow">Direct channel</p>
            <div className="mt-4 overflow-hidden rounded-[24px] border border-line lg:rounded-t-[130px] lg:rounded-b-[26px]">
              <Image
                src="/og-image.png"
                alt="The Sila Code brand visual"
                width={1200}
                height={630}
                className="h-44 w-full object-cover object-[center_45%] transition duration-700 ease-out hover:scale-105 sm:h-56"
              />
            </div>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              <li>
                All enquiries:{" "}
                <a
                  href="mailto:contact@thesilacode.com"
                  className="text-obsidian underline decoration-sage/60 underline-offset-4 hover:decoration-terracotta hover:text-terracotta"
                >
                  contact@thesilacode.com
                </a>
              </li>
              <li>Support, membership, partnerships, and media — one address, direct to the team.</li>
              <li>Response time: 2 business days (Mon–Fri, AEST).</li>
            </ul>
          </article>
        </div>
      </section>
    </>
  );
}
