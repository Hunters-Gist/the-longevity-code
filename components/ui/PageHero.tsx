type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="pt-6 sm:pt-10 lg:pt-14">
      <div className="section-wrap">
        <div className="luxury-panel grain-overlay relative overflow-hidden rounded-[26px] px-5 py-7 sm:rounded-[32px] sm:px-10 sm:py-12 lg:py-14">
          <div className="ambient-orb pointer-events-none absolute -left-16 top-4 h-52 w-52 rounded-full bg-teal/30" />
          <div className="ambient-orb pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full bg-plum-shadow/30 [animation-delay:2s]" />
          <p className="eyebrow relative">{eyebrow}</p>
          <h1 className="display-title relative mt-3 max-w-5xl text-[2.25rem] font-semibold leading-[1.02] text-bone-white sm:mt-4 sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="relative mt-4 max-w-3xl text-[0.98rem] leading-relaxed text-muted sm:mt-5 sm:text-lg">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
