import { homeContent } from "@/content/homepage";

export function PhilosophySection() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="section-wrap">
        <div className="luxury-panel grain-overlay grid items-center gap-8 rounded-[32px] p-7 sm:p-10 lg:grid-cols-[1.12fr_0.88fr] lg:p-12">
          <div>
            <p className="eyebrow">Brand Philosophy</p>
            <h2 className="display-title mt-5 text-5xl font-semibold text-heading sm:text-6xl lg:text-[4.2rem]">
              {homeContent.mission.heading}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {homeContent.mission.body}
            </p>
          </div>

          <blockquote className="rounded-3xl border border-line bg-black/24 p-7">
            <p className="display-title text-4xl font-medium leading-tight text-bone-white sm:text-5xl">
              &ldquo;{homeContent.mission.callout}&rdquo;
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
