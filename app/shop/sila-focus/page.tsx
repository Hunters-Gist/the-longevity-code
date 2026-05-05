import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { createCheckoutSession } from "@/app/actions/checkout";
import { SafeImage } from "@/components/ui/SafeImage";
import { absoluteUrl } from "@/lib/site-config";
import { silaFocusGalleryImages } from "@/lib/brand/assets";

export const metadata: Metadata = {
  title: "Sila Focus",
  description:
    "Sila Focus capsules with L-Theanine, Citicoline, Alpha-GPC, and Saffron Extract.",
  alternates: {
    canonical: "/shop/sila-focus",
  },
};

async function buySilaFocus() {
  "use server";
  await createCheckoutSession("sila_focus");
}

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
    body: "A highly bioavailable choline source, often included in wellness formulations to support general cognitive wellbeing and focus.",
  },
  {
    name: "SAFFRON EXTRACT (affron)",
    dose: "28mg per serve",
    body: "A standardised saffron extract studied in the context of general wellbeing and mood balance.",
    source: "Source: Pharmactive Biotech, Spain.",
  },
];

export default function SilaFocusPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Sila Focus",
    description:
      "A daily wellness capsule featuring L-Theanine, Citicoline, Alpha-GPC and saffron extract — formulated to support focus and general wellbeing.",
    brand: {
      "@type": "Brand",
      name: "The Sila Code",
    },
    image: silaFocusGalleryImages.map((image) => absoluteUrl(image)),
    sku: "SILA-FOCUS-60",
    offers: {
      "@type": "Offer",
      priceCurrency: "AUD",
      price: "89.00",
      availability: "https://schema.org/InStock",
      url: absoluteUrl("/shop/sila-focus"),
      areaServed: ["AU", "NZ", "US", "GB"],
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Shop",
        item: absoluteUrl("/shop"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Sila Focus",
        item: absoluteUrl("/shop/sila-focus"),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <PageHero
        eyebrow="Sila Focus"
        title="Designed for calm clarity and cognitive stamina."
        description="60 capsules per bottle. 30-day supply at 2 capsules daily."
      />
      <section className="py-12 sm:py-16">
        <div className="section-wrap space-y-6">
          <article className="glass-card rounded-[28px] p-5 sm:p-7">
            <p className="eyebrow">Product gallery</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {silaFocusGalleryImages.map((src, index) => (
                <div
                  key={src}
                  className={`overflow-hidden border border-line ${
                    index === 0
                      ? "sm:col-span-2 rounded-[24px] sm:rounded-t-[140px] sm:rounded-b-[26px]"
                      : "rounded-2xl"
                  }`}
                >
                  <SafeImage
                    src={src}
                    alt="Sila Focus product gallery image"
                    width={900}
                    height={620}
                    fallbackLabel="Sila Focus visual"
                    className={`w-full object-cover transition duration-700 ease-out hover:scale-105 ${
                      index === 0 ? "h-44 sm:h-56" : "h-40 sm:h-56"
                    }`}
                  />
                </div>
              ))}
            </div>
          </article>

          <article className="luxury-card rounded-[28px] p-7 sm:p-10">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.16em] text-muted">Price</p>
                <h2 className="mt-2 font-mono text-3xl text-obsidian sm:text-4xl">
                  A$89 AUD
                </h2>
                <p className="mt-2 text-sm text-muted">
                  Capsule member price: A$79/month, delivered
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/subscribe"
                  className="inline-flex min-h-11 items-center rounded-full bg-obsidian px-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-bone-white transition duration-300 hover:bg-terracotta"
                >
                  Subscribe (Capsule tier)
                </Link>
                <form action={buySilaFocus}>
                  <button
                    type="submit"
                    className="inline-flex min-h-11 items-center rounded-full border border-sage/70 bg-bone-white/75 px-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-obsidian transition duration-300 hover:border-terracotta hover:text-terracotta"
                  >
                    Buy once — A$89
                  </button>
                </form>
              </div>
            </div>
          </article>

          <article className="glass-card rounded-[28px] p-7 sm:p-10">
            <p className="eyebrow">Ingredient Breakdown</p>
            <div className="mt-5 grid gap-4">
              {INGREDIENTS.map((ingredient) => (
                <div key={ingredient.name} className="rounded-xl border border-line p-4">
                  <div className="flex items-baseline justify-between gap-3 border-b border-line pb-2">
                    <h3 className="font-mono text-sm uppercase tracking-[0.12em] text-heading">
                      {ingredient.name}
                    </h3>
                    <p className="font-mono text-xs text-terracotta">{ingredient.dose}</p>
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
            <p className="eyebrow">Why This Formula</p>
            <p className="mt-3 max-w-4xl text-sm leading-relaxed text-muted sm:text-base">
              Each ingredient is chosen for its role in supporting focus, general wellbeing,
              and stress resilience. Sila Focus is a wellness supplement — not a medicine —
              and is designed to sit alongside balanced nutrition, sleep, and movement.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-4">
              <div className="rounded-xl border border-line p-3 font-mono text-xs text-muted">
                Focus support
              </div>
              <div className="rounded-xl border border-line p-3 font-mono text-xs text-muted">
                Mental clarity
              </div>
              <div className="rounded-xl border border-line p-3 font-mono text-xs text-muted">
                Stress resilience
              </div>
              <div className="rounded-xl border border-line p-3 font-mono text-xs text-muted">
                General wellbeing
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
            <p className="eyebrow">Our standards</p>
            <ul className="mt-4 grid gap-2 text-sm text-foreground/90 sm:grid-cols-2">
              <li>Made in Australia in a TGA-licensed facility</li>
              <li>No artificial colours, flavours, or stimulants</li>
              <li>Third-party tested for purity and potency</li>
              <li>Vegan capsule shell</li>
              <li>Gluten free</li>
              <li>Shipped Australia-wide and internationally</li>
            </ul>
            <p className="mt-4 text-xs text-muted">
              Sila Focus is a wellness supplement. Always read the label and use only as
              directed. Not a substitute for a balanced diet, medical care, or professional
              advice. If you are pregnant, breastfeeding, taking medication, or managing a
              health condition, consult your healthcare professional before use.
            </p>
          </article>

          <article className="glass-card rounded-[24px] p-6">
            <p className="eyebrow">Product FAQ</p>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-heading">
                  When should I take Sila Focus?
                </h3>
                <p className="mt-1 text-sm text-muted">
                  Two capsules daily with food, preferably in the morning or
                  early afternoon.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-heading">
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
