import { homeContent } from "@/content/homepage";

export function PhilosophySection() {
  return (
    <section id="about" className="section-space">
      <div className="section-wrap">
        <div className="luxury-panel grain-overlay grid items-center gap-5 rounded-[24px] p-4 sm:gap-7 sm:rounded-[30px] sm:p-7 md:grid-cols-[1.08fr_0.92fr] md:gap-7 md:p-8 lg:grid-cols-[1.12fr_0.88fr] lg:p-10">
          <div>
            <p className="eyebrow">Brand Philosophy</p>
            <h2 className="display-title mt-3.5 max-w-[12ch] text-[1.9rem] font-semibold leading-[1.06] text-heading sm:mt-4 sm:max-w-none sm:text-[2.5rem] md:text-[3rem] lg:text-[3.55rem]">
              {homeContent.mission.heading}
            </h2>
            <p className="mt-3.5 max-w-[42ch] text-[0.95rem] leading-relaxed text-muted sm:mt-4 sm:max-w-2xl sm:text-[1.02rem] md:text-[1.08rem]">
              {homeContent.mission.body}
            </p>
          </div>

          <blockquote className="rounded-[22px] border border-line bg-bone-white/82 p-4 sm:rounded-3xl sm:p-6 md:p-7">
            <p className="eyebrow">Guiding thought</p>
            <p className="display-title mt-2 text-[1.58rem] font-medium leading-tight text-heading sm:text-[2.1rem] md:text-[2.45rem]">
              &ldquo;{homeContent.mission.callout}&rdquo;
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
