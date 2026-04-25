import { homeContent } from "@/content/homepage";
import { ActionButton } from "@/components/ui/ActionButton";
import { captureFinalCtaEmail } from "@/app/actions/leads";

export function FinalCtaSection() {
  return (
    <section className="pb-16 pt-12 sm:pb-20 sm:pt-14 md:pb-24 lg:pb-26 lg:pt-16">
      <div className="section-wrap">
        <div className="grain-overlay relative overflow-hidden rounded-[24px] border border-line-strong bg-obsidian px-4 py-5 text-bone-white shadow-[0_28px_55px_-28px_rgba(10,18,15,0.7)] sm:rounded-[30px] sm:px-7 sm:py-8 md:px-8 md:py-9 lg:rounded-[34px] lg:px-10 lg:py-10">
          <div className="ambient-orb pointer-events-none absolute -left-18 top-0 h-56 w-56 rounded-full bg-terracotta/28" />
          <div className="ambient-orb pointer-events-none absolute -right-12 bottom-3 h-52 w-52 rounded-full bg-sage/28 [animation-delay:2.1s]" />
          <p className="eyebrow relative text-sage">Final Step</p>
          <h2 className="display-title relative mt-2.5 max-w-[12ch] text-[1.9rem] font-semibold leading-[1.05] text-bone-white sm:mt-3 sm:max-w-none sm:text-[2.45rem] md:text-[2.9rem] lg:text-[3.55rem]">
            {homeContent.finalCta.heading}
          </h2>
          <p className="relative mt-3.5 max-w-[44ch] text-[0.95rem] leading-relaxed text-bone-white/76 sm:mt-4 sm:max-w-2xl sm:text-[1.03rem] md:text-[1.08rem]">
            {homeContent.finalCta.subheading}
          </p>

          <form
            action={captureFinalCtaEmail}
            className="relative mt-6 flex flex-col gap-2.5 sm:mt-7 sm:gap-3 md:flex-row"
          >
            <label htmlFor="email-capture" className="sr-only">
              Email address
            </label>
            <input
              id="email-capture"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder={homeContent.finalCta.emailPlaceholder}
              className="min-h-12 min-w-0 flex-1 rounded-full border border-bone-white/20 bg-bone-white/10 px-5 text-sm text-bone-white placeholder:text-bone-white/55 focus:border-sage focus:outline-none"
            />
            <button
              type="submit"
              className="ui-caps min-h-12 w-full rounded-full bg-bone-white px-7 text-obsidian transition duration-300 hover:bg-terracotta hover:text-bone-white md:w-auto"
            >
              {homeContent.finalCta.primary}
            </button>
          </form>

          <div className="relative mt-3 sm:mt-4">
            <ActionButton
              href="/assessment"
              variant="secondary"
              className="border-bone-white/30 bg-bone-white/8 text-bone-white hover:border-terracotta hover:text-terracotta"
            >
              {homeContent.finalCta.secondary}
            </ActionButton>
          </div>
        </div>
      </div>
    </section>
  );
}
