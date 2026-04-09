import type { Metadata } from "next";
import Link from "next/link";
import { SILA_PILLARS } from "@/content/sila";

export const metadata: Metadata = {
  title: "Unlock Your Code",
  description:
    "Psychology-backed nootropics engineered for focus, mood, and cognitive resilience.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const organisationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "The Sila Code Pty Ltd",
    url: "https://www.thesilacode.com",
    sameAs: [
      "https://www.instagram.com",
      "https://www.tiktok.com",
      "https://www.youtube.com",
    ],
    description:
      "Psychology-backed nootropics and digital wellness pathways in Australia.",
  };

  return (
    <div className="space-y-20 py-6 sm:space-y-28 sm:py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organisationSchema),
        }}
      />
      <section className="section-wrap">
        <div className="luxury-panel relative overflow-hidden rounded-[30px] p-7 sm:p-12">
          <div className="ambient-orb pointer-events-none absolute -left-24 -top-20 h-72 w-72 rounded-full bg-teal/45" />
          <div className="ambient-orb pointer-events-none absolute -right-24 top-20 h-80 w-80 rounded-full bg-plum-shadow/35 [animation-delay:2s]" />
          <div className="relative max-w-3xl">
            <p className="eyebrow">The Sila Code</p>
            <h1 className="display-title mt-4 text-5xl text-bone-white sm:text-7xl">
              Unlock Your Code
            </h1>
            <p className="mt-5 text-base leading-relaxed text-foreground/90 sm:text-xl">
              Psychology-backed nootropics engineered for focus, mood, and
              cognitive resilience.
            </p>
            <div className="mt-8 grid gap-3 sm:flex">
              <Link
                href="/assessment"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-gold px-6 text-[11px] font-semibold uppercase tracking-[0.14em] text-obsidian transition hover:bg-[#d9ba84]"
              >
                Take the Assessment
              </Link>
              <Link
                href="/shop/sila-focus"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-line px-6 text-[11px] font-semibold uppercase tracking-[0.14em] text-bone-white transition hover:border-gold hover:text-gold"
              >
                Shop Sila Focus
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrap">
        <header className="mb-8">
          <p className="eyebrow">The Five Pillars</p>
          <h2 className="display-title mt-3 text-4xl text-bone-white sm:text-6xl">
            Strength across every system
          </h2>
        </header>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-5">
          {SILA_PILLARS.map((pillar) => (
            <Link
              key={pillar.key}
              href={pillar.href}
              className="glass-card block rounded-2xl border-l-4 p-5 transition hover:-translate-y-1"
              style={{ borderLeftColor: pillar.accent }}
            >
              <h3 className="text-xl font-semibold text-bone-white">{pillar.name}</h3>
              <p className="mt-2 text-sm text-muted">{pillar.consumerLanguage}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-wrap">
        <div className="glass-card rounded-[28px] p-7 sm:p-10">
          <p className="eyebrow">Hero Product</p>
          <h2 className="display-title mt-3 text-4xl text-bone-white sm:text-5xl">
            Sila Focus
          </h2>
          <p className="mt-3 text-sm text-muted sm:text-base">
            L-Theanine + Citicoline + Alpha-GPC + Saffron Extract
          </p>
          <ul className="mt-6 grid gap-2 text-sm text-foreground/90 sm:grid-cols-2">
            <li>Calm focus without the crash</li>
            <li>Clinically studied ingredients</li>
            <li>Psychology-informed formulation</li>
            <li>Made in a TGA-licensed Australian facility</li>
          </ul>
          <div className="mt-7 flex gap-3">
            <Link
              href="/shop/sila-focus"
              className="inline-flex min-h-11 items-center rounded-full bg-gold px-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-obsidian"
            >
              Shop Now
            </Link>
            <Link
              href="/subscribe"
              className="inline-flex min-h-11 items-center rounded-full border border-line px-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-bone-white"
            >
              Subscribe & Save
            </Link>
          </div>
        </div>
      </section>

      <section className="section-wrap">
        <div className="luxury-card rounded-[28px] p-7 sm:p-10">
          <p className="eyebrow">The Sila Assessment</p>
          <h2 className="display-title mt-3 text-4xl text-bone-white sm:text-5xl">
            Where does your strength begin?
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
            Take the free Sila Assessment. 15 questions. 3 minutes. Discover
            your personalised Sila Score across all five pillars.
          </p>
          <div className="mt-6 flex items-center justify-between rounded-2xl border border-line bg-surface/60 p-4">
            <p className="text-sm font-medium text-bone-white">
              Sample result: Brain 72 | Skin 58 | Body 64 | Longevity 70 |
              Rehab 49
            </p>
            <Link
              href="/assessment"
              className="inline-flex min-h-10 items-center rounded-full bg-gold px-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-obsidian"
            >
              Start the Assessment
            </Link>
          </div>
        </div>
      </section>

      <section className="section-wrap">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Formulated by a psychology professional",
            "Made in Australia in a TGA-licensed facility",
            "Clinically studied ingredients",
            "No artificial fillers or stimulants",
          ].map((item) => (
            <div key={item} className="glass-card rounded-2xl p-4 text-sm text-foreground/90">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="section-wrap pb-8">
        <div className="luxury-panel rounded-[28px] p-7 sm:p-10">
          <p className="eyebrow">Subscription</p>
          <h2 className="display-title mt-3 text-4xl text-bone-white sm:text-5xl">
            Join The Sila Code
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="glass-card rounded-2xl p-4">
              <p className="text-sm text-muted">Free Community</p>
              <p className="mt-2 font-mono text-2xl text-bone-white">$0/mo</p>
            </div>
            <div className="glass-card rounded-2xl p-4">
              <p className="text-sm text-muted">The Code Digital</p>
              <p className="mt-2 font-mono text-2xl text-bone-white">$29/mo</p>
            </div>
            <div className="glass-card rounded-2xl p-4">
              <p className="text-sm text-muted">Code + Capsule</p>
              <p className="mt-2 font-mono text-2xl text-bone-white">$69/mo</p>
            </div>
          </div>
          <Link
            href="/subscribe"
            className="mt-7 inline-flex min-h-11 items-center rounded-full bg-gold px-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-obsidian"
          >
            Compare Plans
          </Link>
        </div>
      </section>
    </div>
  );
}
