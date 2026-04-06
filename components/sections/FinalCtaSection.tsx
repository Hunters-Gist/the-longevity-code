import { homeContent } from "@/content/homepage";
import { ActionButton } from "@/components/ui/ActionButton";

export function FinalCtaSection() {
  return (
    <section className="pb-20 pt-16 sm:pb-28">
      <div className="section-wrap">
        <div className="overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-[#1b1f29] via-[#11151d] to-[#0d0f12] p-7 sm:p-10">
          <p className="text-xs uppercase tracking-[0.24em] text-sage">Final Step</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-display font-semibold leading-tight text-bone-white sm:text-5xl">
            {homeContent.finalCta.heading}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {homeContent.finalCta.subheading}
          </p>

          <form className="mt-8 flex flex-col gap-3 md:flex-row">
            <label htmlFor="email-capture" className="sr-only">
              Email address
            </label>
            <input
              id="email-capture"
              type="email"
              placeholder={homeContent.finalCta.emailPlaceholder}
              className="h-12 min-w-0 flex-1 rounded-full border border-line bg-black/25 px-5 text-sm text-bone-white placeholder:text-muted focus:border-sage focus:outline-none"
            />
            <button
              type="submit"
              className="h-12 rounded-full bg-sage px-7 text-sm font-semibold text-obsidian transition hover:bg-[#b9d4b1]"
            >
              {homeContent.finalCta.primary}
            </button>
          </form>

          <div className="mt-4">
            <ActionButton href="#" variant="secondary">
              {homeContent.finalCta.secondary}
            </ActionButton>
          </div>
        </div>
      </div>
    </section>
  );
}
