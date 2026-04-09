import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Sila Focus",
  description:
    "Sila Focus capsules with L-Theanine, Citicoline, Alpha-GPC, and Saffron Extract.",
  alternates: {
    canonical: "/shop/sila-focus",
  },
};

const INGREDIENTS = [
  {
    name: "L-THEANINE (AlphaWave)",
    dose: "200mg per serve",
    body: "Promotes alpha brainwave activity for calm focus without drowsiness. TGA-approved source.",
    source: "Source: AlphaWave (Ethical Naturals, USA via TransChem AU)",
  },
  {
    name: "CITICOLINE (CDP-Choline)",
    dose: "250mg per serve",
    body: "Supports brain energy metabolism and cell membrane repair. Provides both choline and cytidine for dual-pathway cognitive support.",
  },
  {
    name: "ALPHA-GPC",
    dose: "300mg per serve",
    body: "Highly bioavailable choline source (~90%). Crosses the blood-brain barrier to support acetylcholine synthesis for memory and learning.",
  },
  {
    name: "SAFFRON EXTRACT (affron)",
    dose: "28mg per serve",
    body: "Clinically studied mood support. Standardised Spanish saffron extract for serotonin modulation.",
    source: "Source: Pharmactive Biotech, Spain.",
  },
];

export default function SilaFocusPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Sila Focus",
    description:
      "Psychology-informed nootropic capsule stack with L-Theanine, Citicoline, Alpha-GPC, and Saffron Extract.",
    brand: {
      "@type": "Brand",
      name: "The Sila Code",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "AUD",
      price: "59.95",
      availability: "https://schema.org/InStock",
      url: "https://www.thesilacode.com/shop/sila-focus",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />
      <PageHero
        eyebrow="Sila Focus"
        title="Designed for calm clarity and cognitive stamina."
        description="60 capsules per bottle. 30-day supply at 2 capsules daily."
      />
      <section className="py-12 sm:py-16">
        <div className="section-wrap space-y-6">
          <article className="luxury-card rounded-[28px] p-7 sm:p-10">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.16em] text-muted">Price</p>
                <h2 className="mt-2 font-mono text-3xl text-bone-white sm:text-4xl">
                  $59.95 AUD
                </h2>
                <p className="mt-2 text-sm text-muted">
                  Subscription: $49.95/month (save 17%)
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/subscribe"
                  className="inline-flex min-h-11 items-center rounded-full bg-gold px-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-obsidian"
                >
                  Subscribe
                </Link>
                <button
                  type="button"
                  className="inline-flex min-h-11 items-center rounded-full border border-line px-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-bone-white"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </article>

          <article className="glass-card rounded-[28px] p-7 sm:p-10">
            <p className="eyebrow">Ingredient Breakdown</p>
            <div className="mt-5 grid gap-4">
              {INGREDIENTS.map((ingredient) => (
                <div key={ingredient.name} className="rounded-xl border border-line p-4">
                  <div className="flex items-baseline justify-between gap-3 border-b border-line pb-2">
                    <h3 className="font-mono text-sm uppercase tracking-[0.12em] text-bone-white">
                      {ingredient.name}
                    </h3>
                    <p className="font-mono text-xs text-gold">{ingredient.dose}</p>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{ingredient.body}</p>
                  {ingredient.source ? (
                    <p className="mt-2 font-mono text-xs text-muted">{ingredient.source}</p>
                  ) : null}
                </div>
              ))}
            </div>
          </article>

          <article className="glass-card rounded-[28px] p-7 sm:p-10">
            <p className="eyebrow">Why This Stack?</p>
            <p className="mt-3 max-w-4xl text-sm leading-relaxed text-muted sm:text-base">
              Each ingredient targets a specific pathway: acetylcholine for
              memory, dopamine for motivation, serotonin for mood, and alpha
              brainwaves for calm clarity.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-4">
              <div className="rounded-xl border border-line p-3 font-mono text-xs text-muted">
                Acetylcholine
              </div>
              <div className="rounded-xl border border-line p-3 font-mono text-xs text-muted">
                Dopamine
              </div>
              <div className="rounded-xl border border-line p-3 font-mono text-xs text-muted">
                Serotonin
              </div>
              <div className="rounded-xl border border-line p-3 font-mono text-xs text-muted">
                Alpha Brainwaves
              </div>
            </div>
          </article>

          <div className="grid gap-4 lg:grid-cols-2">
            <article className="luxury-card rounded-[24px] p-6">
              <p className="eyebrow">For high-performance professionals</p>
              <p className="mt-3 text-sm text-muted">
                Sustained focus, mental stamina, and stress resilience across
                demanding days.
              </p>
            </article>
            <article className="luxury-card rounded-[24px] p-6">
              <p className="eyebrow">For anyone rebuilding</p>
              <p className="mt-3 text-sm text-muted">
                Supporting the neurochemistry of resilience - regaining clarity,
                stability, and control.
              </p>
            </article>
          </div>

          <article className="glass-card rounded-[24px] p-6">
            <p className="eyebrow">Trust signals</p>
            <ul className="mt-4 grid gap-2 text-sm text-foreground/90 sm:grid-cols-2">
              <li>Made in a TGA-licensed facility in Australia</li>
              <li>No artificial colours, flavours, or stimulants</li>
              <li>Third-party tested for purity and potency</li>
              <li>Vegan capsule shell</li>
              <li>Gluten free</li>
            </ul>
          </article>

          <article className="glass-card rounded-[24px] p-6">
            <p className="eyebrow">Product FAQ</p>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-bone-white">
                  When should I take Sila Focus?
                </h3>
                <p className="mt-1 text-sm text-muted">
                  Two capsules daily with food, preferably in the morning or
                  early afternoon.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-bone-white">
                  Is this a stimulant-heavy formula?
                </h3>
                <p className="mt-1 text-sm text-muted">
                  No. Sila Focus is designed to support concentration and calm
                  clarity without aggressive stimulant loading.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
