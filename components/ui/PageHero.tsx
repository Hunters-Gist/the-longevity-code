type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="pt-10 sm:pt-14">
      <div className="section-wrap">
        <div className="luxury-panel grain-overlay relative overflow-hidden rounded-[32px] px-6 py-10 sm:px-10 sm:py-14">
          <div className="ambient-orb pointer-events-none absolute -left-16 top-4 h-52 w-52 rounded-full bg-teal/30" />
          <div className="ambient-orb pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full bg-terracotta/20 [animation-delay:2s]" />
          <p className="eyebrow relative">{eyebrow}</p>
          <h1 className="display-title relative mt-4 max-w-5xl text-5xl font-semibold sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="relative mt-5 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
