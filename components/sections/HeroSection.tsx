import Image from "next/image";
import { homeContent } from "@/content/homepage";
import { ActionButton } from "@/components/ui/ActionButton";
import { BRAND_STRAP } from "@/content/brand";

const heroStats = [
  { label: "Pillars", value: "5", extraClassName: "" },
  { label: "Questions", value: "15", extraClassName: "" },
  {
    label: "Core Tiers",
    value: "3",
    extraClassName: "col-span-2 min-[430px]:col-span-1",
  },
] as const;

export function HeroSection() {
  return (
    <section className="relative pt-2 sm:pt-4 md:pt-5">
      <div className="section-wrap">
        <div className="luxury-panel grain-overlay relative overflow-hidden rounded-[24px] p-4 sm:rounded-[30px] sm:p-6 md:rounded-[34px] md:p-7 lg:p-10 xl:p-12">
          <div className="ambient-orb pointer-events-none absolute -left-16 top-14 h-48 w-48 rounded-full bg-sage/30 sm:top-18 sm:h-56 sm:w-56" />
          <div className="ambient-orb pointer-events-none absolute -right-18 top-10 h-56 w-56 rounded-full bg-terracotta/20 [animation-delay:1.8s] sm:-right-20 sm:top-12 sm:h-64 sm:w-64" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(45,58,49,0.05),transparent_24%,transparent_72%,rgba(194,123,102,0.06))]" />

          <div className="relative border-b border-line pb-3.5 sm:pb-5">
            <p className="eyebrow">{homeContent.hero.eyebrow}</p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-muted/90 sm:text-xs sm:tracking-[0.22em]">
              {BRAND_STRAP}
            </p>
          </div>

          <div className="relative mt-6 grid items-end gap-6 sm:mt-8 sm:gap-8 md:mt-9 md:grid-cols-[1fr_1fr] md:items-start md:gap-7 lg:gap-9 xl:grid-cols-[1.03fr_0.97fr] xl:gap-11">
            <div className="pb-1">
              <h1 className="display-title relative z-10 max-w-[10.5ch] text-[1.88rem] font-semibold leading-[1.03] text-heading min-[430px]:text-[2.06rem] sm:max-w-[12ch] sm:text-[2.56rem] md:max-w-none md:text-[3.05rem] lg:text-[3.35rem] xl:-mr-8 xl:text-[4.35rem]">
                {homeContent.hero.heading}
              </h1>
              <div className="vine-line mt-4 sm:mt-5" aria-hidden="true" />
              <p className="mt-4 max-w-[35ch] text-[0.98rem] leading-relaxed text-foreground sm:mt-5 sm:max-w-xl sm:text-[1.04rem] md:text-[1.1rem]">
                {homeContent.hero.subheading}
              </p>
              <p className="mt-3.5 max-w-[40ch] text-[0.92rem] leading-relaxed text-muted sm:mt-4 sm:max-w-xl sm:text-[0.96rem]">
                {homeContent.hero.supporting}
              </p>
              <div className="mt-6 grid gap-2.5 sm:mt-7 sm:flex sm:flex-wrap sm:gap-3">
                <ActionButton href="/assessment">
                  {homeContent.hero.ctas[0].label}
                </ActionButton>
                <ActionButton href="/protocols" variant="secondary">
                  {homeContent.hero.ctas[1].label}
                </ActionButton>
              </div>

              <ul className="mt-6 grid max-w-xl grid-cols-2 gap-2.5 min-[430px]:grid-cols-3 sm:mt-7 sm:gap-3">
                {heroStats.map((stat) => (
                  <li
                    key={stat.label}
                    className={`rounded-2xl border border-line/80 bg-bone-white/78 px-4 py-3 sm:px-3.5 sm:py-3 ${stat.extraClassName}`}
                  >
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted sm:tracking-[0.22em]">
                      {stat.label}
                    </p>
                    <p className="mt-1 text-lg font-medium text-obsidian sm:text-xl">
                      {stat.value}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative min-h-80 overflow-hidden rounded-[22px] border border-line-strong bg-bone-white/82 sm:min-h-96 sm:rounded-[30px] md:min-h-92 lg:min-h-124 lg:rounded-[32px] xl:-ml-2 xl:rounded-t-[120px] xl:rounded-b-[34px]">
              <Image
                src="/images/hero/SILA%20HERO.png"
                alt="The Sila Code product hero bottle"
                fill
                preload
                sizes="(max-width: 767px) 100vw, (max-width: 1199px) 52vw, 48vw"
                className="object-cover object-[center_40%] transition duration-700 ease-out md:hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-bone-white/88 via-bone-white/26 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 md:p-5">
                <div className="rounded-2xl border border-line bg-bone-white/86 p-3.5 backdrop-blur-sm sm:p-4 md:p-5">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-sage/95 sm:tracking-[0.24em]">
                    Psychology-backed nootropic platform
                  </p>
                  <p className="mt-2 max-w-sm text-[13px] leading-relaxed text-foreground/86 sm:text-sm">
                    Focus, mood stability, and cognitive resilience in one cohesive system.
                  </p>
                </div>
              </div>

              <div className="absolute right-3 top-3 rounded-full border border-line bg-bone-white/84 px-3 py-1.5 text-[9px] uppercase tracking-[0.18em] text-muted/90 backdrop-blur-sm sm:right-4 sm:top-4 sm:px-3.5 sm:py-1.5 sm:text-[10px] sm:tracking-[0.22em]">
                Sila means strength
              </div>

              <div className="absolute bottom-3 right-3 hidden w-32 rounded-2xl border border-line bg-bone-white/90 p-1.5 shadow-[0_18px_34px_-24px_rgba(10,18,15,0.45)] backdrop-blur-sm sm:block md:w-36 md:rounded-3xl md:p-2">
                <div className="relative h-24 overflow-hidden rounded-xl border border-line/70 md:h-28 md:rounded-2xl">
                  <Image
                    src="/images/hero/unsplash-image-98Elr-LIvD8.webp"
                    alt="Editorial wellness image"
                    fill
                    sizes="160px"
                    className="object-cover object-[center_34%]"
                  />
                </div>
                <p className="mt-2 text-[8px] uppercase tracking-[0.2em] text-muted md:text-[9px] md:tracking-[0.22em]">
                  Brand emblem
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
