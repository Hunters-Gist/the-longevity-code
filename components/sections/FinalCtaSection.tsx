import { homeContent } from "@/content/homepage";
import { ActionButton } from "@/components/ui/ActionButton";

export function FinalCtaSection() {
  return (
    <section className="pb-24 pt-16 sm:pb-32">
      <div className="section-wrap">
        <div className="luxury-panel grain-overlay relative overflow-hidden rounded-[34px] p-7 sm:p-11">
          <div className="ambient-orb pointer-events-none absolute -left-[4.5rem] top-0 h-56 w-56 rounded-full bg-plum-shadow/48" />
          <div className="ambient-orb pointer-events-none absolute -right-12 bottom-3 h-52 w-52 rounded-full bg-teal/24 [animation-delay:2.1s]" />
          <p className="eyebrow relative">Final Step</p>
          <h2 className="display-title relative mt-4 max-w-4xl text-5xl font-semibold text-heading sm:text-6xl lg:text-[4.5rem]">
            {homeContent.finalCta.heading}
          </h2>
          <p className="relative mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {homeContent.finalCta.subheading}
          </p>

          <form className="relative mt-9 flex flex-col gap-3 md:flex-row">
            <label htmlFor="email-capture" className="sr-only">
              Email address
            </label>
            <input
              id="email-capture"
              type="email"
              placeholder={homeContent.finalCta.emailPlaceholder}
              className="h-12 min-w-0 flex-1 rounded-full border border-line bg-bone-white/82 px-5 text-sm text-obsidian placeholder:text-muted focus:border-sage focus:outline-none"
            />
            <button
              type="submit"
              className="h-12 rounded-full bg-obsidian px-7 text-sm font-semibold uppercase tracking-[0.14em] text-bone-white transition duration-300 hover:bg-deep-charcoal"
            >
              {homeContent.finalCta.primary}
            </button>
          </form>

          <div className="relative mt-4">
            <ActionButton href="/assessment" variant="secondary">
              {homeContent.finalCta.secondary}
            </ActionButton>
          </div>
        </div>
      </div>
    </section>
  );
}
