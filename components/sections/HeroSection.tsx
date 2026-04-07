import Image from "next/image";
import { homeContent } from "@/content/homepage";
import { ActionButton } from "@/components/ui/ActionButton";

export function HeroSection() {
  return (
    <section className="relative pt-3 sm:pt-6">
      <div className="section-wrap">
        <div className="luxury-panel grain-overlay relative overflow-hidden rounded-[28px] p-4 sm:rounded-[34px] sm:p-8 lg:p-12">
          <div className="ambient-orb pointer-events-none absolute -left-16 top-[4.5rem] h-56 w-56 rounded-full bg-teal/34" />
          <div className="ambient-orb pointer-events-none absolute -right-20 top-12 h-64 w-64 rounded-full bg-terracotta/22 [animation-delay:1.8s]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(45,58,49,0.05),transparent_24%,transparent_72%,rgba(194,123,102,0.06))]" />

          <div className="relative border-b border-line pb-4 sm:pb-5">
            <p className="eyebrow">{homeContent.hero.eyebrow}</p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-muted/90 sm:text-xs sm:tracking-[0.22em]">
              Long-horizon vitality design
            </p>
          </div>

          <div className="relative mt-7 grid items-end gap-7 sm:mt-9 sm:gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:gap-14">
            <div className="pb-2">
              <h1 className="display-title max-w-2xl text-[2.2rem] font-semibold text-heading sm:text-6xl lg:text-[6.2rem]">
                {homeContent.hero.heading}
              </h1>
              <p className="mt-5 max-w-xl text-[1rem] leading-relaxed text-foreground/90 sm:mt-6 sm:text-xl">
                {homeContent.hero.subheading}
              </p>
              <p className="mt-4 max-w-xl text-[0.94rem] leading-relaxed text-muted sm:mt-5 sm:text-[0.96rem]">
                {homeContent.hero.supporting}
              </p>
              <div className="mt-7 grid gap-2 sm:mt-9 sm:flex sm:flex-wrap sm:gap-3">
                <ActionButton href="/assessment">
                  {homeContent.hero.ctas[0].label}
                </ActionButton>
                <ActionButton href="/protocols" variant="secondary">
                  {homeContent.hero.ctas[1].label}
                </ActionButton>
              </div>

              <div className="mt-7 grid max-w-lg grid-cols-1 gap-2.5 sm:mt-8 sm:grid-cols-3 sm:gap-3">
                <div className="rounded-2xl border border-line/80 bg-bone-white/60 px-4 py-3 sm:p-3">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted sm:tracking-[0.22em]">
                    Programs
                  </p>
                  <p className="mt-1 text-lg font-medium text-obsidian sm:text-xl">12</p>
                </div>
                <div className="rounded-2xl border border-line/80 bg-bone-white/60 px-4 py-3 sm:p-3">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted sm:tracking-[0.22em]">
                    Avg Review
                  </p>
                  <p className="mt-1 text-lg font-medium text-obsidian sm:text-xl">4.9</p>
                </div>
                <div className="rounded-2xl border border-line/80 bg-bone-white/60 px-4 py-3 sm:p-3">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted sm:tracking-[0.22em]">
                    Coach Ratio
                  </p>
                  <p className="mt-1 text-lg font-medium text-obsidian sm:text-xl">1:18</p>
                </div>
              </div>
            </div>

            <div className="relative min-h-[19rem] overflow-hidden rounded-[26px] border border-line-strong bg-bone-white/75 sm:min-h-[24rem] sm:rounded-[30px]">
              <Image
                src="/images/hero/VL logo 3.png"
                alt="Vitalis Labs hero logo visual"
                fill
                preload
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover object-center transition duration-[1300ms] ease-out hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bone-white/84 via-bone-white/24 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                <div className="rounded-2xl border border-line bg-bone-white/82 p-4 backdrop-blur-sm sm:p-5">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-sage/95 sm:tracking-[0.24em]">
                    Precision wellness for modern life
                  </p>
                  <p className="mt-2 max-w-sm text-[13px] leading-relaxed text-foreground/86 sm:text-sm">
                    Better energy. Better resilience. Better aging.
                  </p>
                </div>
              </div>

              <div className="absolute right-3 top-3 rounded-full border border-line bg-bone-white/78 px-3 py-1.5 text-[9px] uppercase tracking-[0.18em] text-muted/90 backdrop-blur-sm sm:right-4 sm:top-4 sm:px-4 sm:py-2 sm:text-[10px] sm:tracking-[0.24em]">
                Editorial care model
              </div>

              <div className="absolute bottom-4 right-3 w-28 rounded-2xl border border-line bg-bone-white/90 p-1.5 shadow-[0_18px_34px_-24px_rgba(10,18,15,0.45)] backdrop-blur-sm sm:w-40 sm:rounded-3xl sm:p-2.5">
                <div className="relative h-28 overflow-hidden rounded-xl border border-line/70 sm:h-36 sm:rounded-2xl">
                  <Image
                    src="/images/hero/Peptides-_Your_Power_Play_for_Reducing_Redness.webp"
                    alt="Peptides feature visual"
                    fill
                    sizes="160px"
                    className="object-cover object-center"
                  />
                </div>
                <p className="mt-2 text-[8px] uppercase tracking-[0.2em] text-muted sm:text-[9px] sm:tracking-[0.22em]">
                  Peptide spotlight
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
