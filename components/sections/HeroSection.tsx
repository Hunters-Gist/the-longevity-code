import Image from "next/image";
import { homeContent } from "@/content/homepage";
import { ActionButton } from "@/components/ui/ActionButton";

export function HeroSection() {
  return (
    <section className="relative pt-6 sm:pt-10">
      <div className="section-wrap">
        <div className="glass-card rounded-[28px] p-5 sm:p-8 lg:p-10">
          <header className="flex items-center justify-between border-b border-line/80 pb-5">
            <div>
              <p className="text-[11px] uppercase tracking-[0.26em] text-sage">
                {homeContent.hero.eyebrow}
              </p>
            </div>
            <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
              {homeContent.nav.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-xs uppercase tracking-[0.14em] text-muted transition hover:text-bone-white"
                >
                  {item}
                </a>
              ))}
            </nav>
          </header>

          <div className="relative mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div>
              <h1 className="max-w-xl text-4xl font-display font-semibold leading-[1.03] text-heading sm:text-5xl lg:text-7xl">
                {homeContent.hero.heading}
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-stone sm:text-xl">
                {homeContent.hero.subheading}
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
                {homeContent.hero.supporting}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
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
            </div>

            <div className="relative min-h-72 overflow-hidden rounded-3xl border border-line">
              <Image
                src="/images/hero/hero-atmosphere.svg"
                alt="Abstract premium wellness visual"
                fill
                priority
                className="object-cover transition duration-[1200ms] ease-out hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-sage/90">
                  Precision wellness for modern men
                </p>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-mist">
                  Better energy. Better resilience. Better future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
