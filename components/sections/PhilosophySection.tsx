import { homeContent } from "@/content/homepage";

export function PhilosophySection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="section-wrap">
        <div className="grid items-center gap-8 rounded-3xl border border-line bg-gradient-to-br from-graphite/70 via-surface to-obsidian p-7 sm:p-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-sage">
              Brand Philosophy
            </p>
            <h2 className="mt-4 text-3xl font-display font-semibold leading-tight text-heading sm:text-5xl">
              {homeContent.mission.heading}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {homeContent.mission.body}
            </p>
          </div>

          <blockquote className="rounded-2xl border border-line bg-black/20 p-6">
            <p className="text-2xl font-display font-medium leading-tight text-bone-white sm:text-3xl">
              &ldquo;{homeContent.mission.callout}&rdquo;
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
