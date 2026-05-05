import Link from "next/link";
import { homeContent } from "@/content/homepage";
import { BRAND_STRAP } from "@/content/brand";
import { brandAssets } from "@/lib/brand/assets";

export function HeroSection() {
  return (
    <section className="relative -mt-px min-h-[calc(100svh-4.35rem)] overflow-hidden bg-obsidian text-bone-white lg:min-h-[820px]">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
          poster={brandAssets.heroPoster}
        aria-hidden="true"
      >
        <source src="/videos/sila-hero-mountain-sunrise.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,18,15,0.9)_0%,rgba(10,18,15,0.68)_44%,rgba(10,18,15,0.18)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(194,123,102,0.22),transparent_34%),radial-gradient(circle_at_72%_0%,rgba(220,207,194,0.18),transparent_38%)]" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-linear-to-t from-obsidian via-obsidian/64 to-transparent" />

      <div className="section-wrap relative flex min-h-[calc(100svh-4.35rem)] flex-col justify-between py-12 sm:py-16 lg:min-h-[820px] lg:py-20">
        <div className="max-w-5xl pt-8 sm:pt-14 lg:pt-20">
            <p className="text-[0.68rem] uppercase tracking-[0.32em] text-sage sm:text-xs">
              {homeContent.hero.eyebrow}
            </p>
            <p className="mt-3 text-[0.66rem] uppercase tracking-[0.28em] text-bone-white/62 sm:text-xs">
              {BRAND_STRAP}
            </p>
            <h1 className="display-title mt-8 max-w-[12ch] text-[3rem] font-semibold uppercase leading-[0.98] tracking-[0.08em] text-bone-white min-[430px]:text-[3.6rem] sm:text-[5rem] md:text-[6rem] lg:text-[6.8rem] xl:text-[7.4rem]">
              {homeContent.hero.heading}
            </h1>
            <p className="mt-6 max-w-xl text-[1rem] leading-relaxed text-bone-white/78 sm:text-lg">
              {homeContent.hero.subheading}
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-bone-white/62 sm:text-base">
              {homeContent.hero.supporting}
            </p>
            <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
              {homeContent.hero.ctas.map((cta, index) => (
                <Link
                  key={cta.href}
                  href={cta.href}
                  className={`ui-caps inline-flex min-h-12 items-center justify-center rounded-sm border px-6 transition duration-300 ${
                    index === 0
                      ? "border-terracotta bg-terracotta text-bone-white hover:bg-bone-white hover:text-obsidian"
                      : "border-bone-white/32 bg-obsidian/20 text-bone-white hover:border-terracotta hover:text-terracotta"
                  }`}
                >
                  {cta.label}
                </Link>
              ))}
            </div>
        </div>

        <div className="mt-12 border-t border-bone-white/18 pt-4">
            <ul className="grid gap-px overflow-hidden border border-bone-white/12 bg-bone-white/10 md:grid-cols-5">
              {homeContent.pillars.map((pillar) => (
                <li key={pillar.title} className="bg-obsidian/54 p-4 backdrop-blur-sm">
                  <p className="text-[0.65rem] uppercase tracking-[0.22em] text-terracotta">
                    {pillar.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-bone-white/68">
                    {pillar.copy}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[0.62rem] uppercase tracking-[0.28em] text-bone-white/48">
              Evidence-informed wellness / structured self-optimisation / future retreats
            </p>
        </div>
      </div>
    </section>
  );
}
