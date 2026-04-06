import Image from "next/image";
import { homeContent } from "@/content/homepage";
import { ActionButton } from "@/components/ui/ActionButton";

export function HeroSection() {
  const navHref: Record<string, string> = {
    Protocols: "#protocols",
    Pillars: "#pillars",
    "How It Works": "#how-it-works",
    Journal: "#journal",
    About: "#about",
  };

  return (
    <section className="relative pt-5 sm:pt-8">
      <div className="section-wrap">
        <div className="luxury-panel grain-overlay relative overflow-hidden rounded-[34px] p-5 sm:p-8 lg:p-12">
          <div className="ambient-orb pointer-events-none absolute -left-16 top-[4.5rem] h-56 w-56 rounded-full bg-teal/40" />
          <div className="ambient-orb pointer-events-none absolute -right-20 top-12 h-64 w-64 rounded-full bg-gold/30 [animation-delay:1.8s]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(251,247,239,0.08),transparent_24%,transparent_72%,rgba(251,247,239,0.06))]" />

          <header className="relative flex items-center justify-between border-b border-line pb-5">
            <div className="space-y-2">
              <p className="eyebrow">{homeContent.hero.eyebrow}</p>
              <p className="text-xs uppercase tracking-[0.22em] text-stone/80">
                Long-horizon vitality design
              </p>
            </div>
            <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
              {homeContent.nav.map((item) => (
                <a
                  key={item}
                  href={navHref[item] ?? "#"}
                  className="text-[11px] uppercase tracking-[0.18em] text-stone/78 transition duration-300 hover:text-bone-white"
                >
                  {item}
                </a>
              ))}
            </nav>
          </header>

          <div className="relative mt-9 grid items-end gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:gap-14">
            <div className="pb-2">
              <h1 className="display-title max-w-2xl text-5xl font-semibold text-heading sm:text-6xl lg:text-[6.2rem]">
                {homeContent.hero.heading}
              </h1>
              <p className="mt-6 max-w-xl text-[1.08rem] leading-relaxed text-stone sm:text-xl">
                {homeContent.hero.subheading}
              </p>
              <p className="mt-5 max-w-xl text-[0.96rem] leading-relaxed text-muted">
                {homeContent.hero.supporting}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <ActionButton href={homeContent.hero.ctas[0].href}>
                  {homeContent.hero.ctas[0].label}
                </ActionButton>
                <ActionButton
                  href={homeContent.hero.ctas[1].href}
                  variant="secondary"
                >
                  {homeContent.hero.ctas[1].label}
                </ActionButton>
              </div>

              <div className="mt-8 grid max-w-lg grid-cols-3 gap-3">
                <div className="rounded-2xl border border-line/80 bg-black/20 p-3">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-muted">
                    Programs
                  </p>
                  <p className="mt-1 text-xl font-medium text-bone-white">12</p>
                </div>
                <div className="rounded-2xl border border-line/80 bg-black/20 p-3">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-muted">
                    Avg Review
                  </p>
                  <p className="mt-1 text-xl font-medium text-bone-white">4.9</p>
                </div>
                <div className="rounded-2xl border border-line/80 bg-black/20 p-3">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-muted">
                    Coach Ratio
                  </p>
                  <p className="mt-1 text-xl font-medium text-bone-white">1:18</p>
                </div>
              </div>
            </div>

            <div className="relative min-h-[24rem] overflow-hidden rounded-[30px] border border-line-strong bg-graphite/45">
              <Image
                src="/images/hero/hero-atmosphere.svg"
                alt="Abstract premium wellness visual"
                fill
                priority
                className="object-cover object-center transition duration-[1300ms] ease-out hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-[#0a0c11]/34 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="rounded-2xl border border-line bg-black/36 p-5 backdrop-blur-sm">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-sage/90">
                    Precision wellness for modern men
                  </p>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-mist">
                    Better energy. Better resilience. Better future.
                  </p>
                </div>
              </div>

              <div className="absolute right-4 top-4 rounded-full border border-line bg-black/32 px-4 py-2 text-[10px] uppercase tracking-[0.24em] text-stone/90 backdrop-blur-sm">
                Editorial care model
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
