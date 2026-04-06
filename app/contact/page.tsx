import { PageHero } from "@/components/ui/PageHero";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Speak with our team."
        description="Use this channel for assessment onboarding, membership support, partnerships, or editorial collaboration."
      />

      <section className="py-12 sm:py-16">
        <div className="section-wrap grid gap-3 sm:gap-4 md:grid-cols-[1.05fr_0.95fr] lg:grid-cols-[1.1fr_0.9fr]">
          <form className="glass-card rounded-[24px] p-5 sm:rounded-[28px] sm:p-9">
            <p className="eyebrow">Concierge form</p>
            <div className="mt-4 grid gap-3 sm:mt-5">
              <input
                type="text"
                placeholder="Full name"
                className="h-12 rounded-2xl border border-line bg-bone-white/82 px-4 text-sm text-obsidian placeholder:text-muted focus:border-sage focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="h-12 rounded-2xl border border-line bg-bone-white/82 px-4 text-sm text-obsidian placeholder:text-muted focus:border-sage focus:outline-none"
              />
              <textarea
                placeholder="How can we help?"
                rows={5}
                className="rounded-2xl border border-line bg-bone-white/82 px-4 py-3 text-sm text-obsidian placeholder:text-muted focus:border-sage focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-obsidian px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-bone-white transition hover:bg-deep-charcoal sm:w-auto sm:text-xs sm:tracking-[0.16em]"
            >
              Send inquiry
            </button>
          </form>

          <article className="luxury-card rounded-[24px] p-5 sm:rounded-[28px] sm:p-9">
            <p className="eyebrow">Priority channels</p>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              <li>Assessment onboarding: onboarding@longevitycode.com</li>
              <li>Membership support: membership@longevitycode.com</li>
              <li>Editorial / media: editorial@longevitycode.com</li>
            </ul>
          </article>
        </div>
      </section>
    </>
  );
}
