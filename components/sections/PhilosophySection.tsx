import { homeContent } from "@/content/homepage";

export function PhilosophySection() {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32">
      <div className="section-wrap">
        <div className="luxury-panel grain-overlay grid items-center gap-6 rounded-[26px] p-5 sm:gap-8 sm:rounded-[32px] sm:p-10 md:grid-cols-[1.08fr_0.92fr] lg:grid-cols-[1.12fr_0.88fr] lg:p-12">
          <div>
            <p className="eyebrow">Brand Philosophy</p>
            <h2 className="display-title mt-4 text-[2.2rem] font-semibold text-heading sm:mt-5 sm:text-6xl lg:text-[4.2rem]">
              {homeContent.mission.heading}
            </h2>
            <p className="mt-4 max-w-2xl text-[0.98rem] leading-relaxed text-muted sm:mt-5 sm:text-lg">
              {homeContent.mission.body}
            </p>
          </div>

          <blockquote className="rounded-3xl border border-line bg-bone-white/78 p-5 sm:p-7">
            <p className="display-title text-[1.95rem] font-medium leading-tight text-heading sm:text-5xl">
              &ldquo;{homeContent.mission.callout}&rdquo;
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
