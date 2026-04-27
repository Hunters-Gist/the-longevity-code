import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import Image from "next/image";
import {
  shopCategoryLabels,
  shopOfferings,
  shopStatusLabels,
  type ShopOffering,
} from "@/content/shop";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Explore The Sila Code products, courses, digital protocols, recovery tools, and future ecommerce concepts.",
  alternates: {
    canonical: "/shop",
  },
};

const categoryTone: Record<ShopOffering["category"], string> = {
  supplement: "from-sage/30 via-bone-white to-terracotta/16",
  course: "from-obsidian/14 via-bone-white to-sage/24",
  digital: "from-terracotta/18 via-bone-white to-sage/20",
  recovery: "from-sage/24 via-bone-white to-stone/70",
  merch: "from-obsidian/10 via-bone-white to-terracotta/12",
  bundle: "from-terracotta/18 via-bone-white to-sage/18",
};

function OfferingVisual({
  offering,
  index,
}: {
  offering: ShopOffering;
  index: number;
}) {
  return (
    <div
      role="img"
      aria-label={`${offering.name} placeholder product visual`}
      className={`relative flex h-48 overflow-hidden rounded-[22px] border border-line bg-linear-to-br ${
        categoryTone[offering.category]
      } p-4 sm:h-52`}
    >
      <div className="absolute -right-12 -top-16 h-36 w-36 rounded-full bg-bone-white/70 blur-2xl" />
      <div className="absolute -bottom-14 left-8 h-32 w-32 rounded-full bg-sage/18 blur-2xl" />
      <div className="relative flex h-full w-full flex-col justify-between rounded-[18px] border border-bone-white/60 bg-bone-white/38 p-4 backdrop-blur-[1px]">
        <div className="flex items-center justify-between gap-3">
          <span className="ui-caps text-muted">
            {shopCategoryLabels[offering.category]}
          </span>
          <span className="font-mono text-xs text-muted">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <div>
          <p className="display-title text-[2.15rem] font-semibold leading-none text-heading sm:text-[2.6rem]">
            SILA
          </p>
          <p className="mt-2 max-w-[22ch] text-[10px] uppercase tracking-[0.24em] text-muted">
            {offering.eyebrow}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  const featuredProduct = shopOfferings[0];
  const catalogueOfferings = shopOfferings.slice(1);

  return (
    <>
      <PageHero
        eyebrow="Shop"
        title="Clinical wellness, premium execution."
        description="Explore the product, course, and ecommerce roadmap for The Sila Code. Sila Focus is available now; future goods are intentionally marked before launch."
      />
      <section className="py-12 sm:py-16">
        <div className="section-wrap space-y-6">
          <article className="luxury-card rounded-[28px] p-7 sm:p-10">
            <div className="grid items-end gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
              <div>
                <p className="eyebrow">Featured product</p>
                <h2 className="display-title mt-3 text-4xl text-heading sm:text-5xl">
                  {featuredProduct.name}
                </h2>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
                  {featuredProduct.description}
                </p>
                <ul className="mt-5 grid gap-2 text-sm text-muted sm:grid-cols-3">
                  {featuredProduct.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="rounded-full border border-line bg-bone-white/70 px-4 py-2"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href={featuredProduct.cta.href}
                    className="inline-flex min-h-11 items-center rounded-full bg-obsidian px-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-bone-white transition duration-300 hover:bg-terracotta"
                  >
                    {featuredProduct.cta.label}
                  </Link>
                  <Link
                    href="/subscribe"
                    className="inline-flex min-h-11 items-center rounded-full border border-sage/70 bg-bone-white/75 px-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-obsidian transition duration-300 hover:border-terracotta hover:text-terracotta"
                  >
                    Subscribe & save
                  </Link>
                </div>
              </div>
              <div className="overflow-hidden rounded-[28px] border border-line lg:rounded-t-[180px] lg:rounded-b-[34px]">
                <Image
                  src="/images/hero/Hero image.png"
                  alt="Sila Focus product lifestyle visual"
                  width={1600}
                  height={1100}
                  className="h-56 w-full object-cover object-[center_42%] transition duration-700 ease-out hover:scale-105 sm:h-72"
                />
              </div>
            </div>
          </article>

          <section aria-labelledby="shop-catalogue-heading" className="space-y-5">
            <div className="luxury-panel rounded-[28px] p-5 sm:p-8">
              <p className="eyebrow">Product Roadmap</p>
              <div className="mt-3 grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                <h2
                  id="shop-catalogue-heading"
                  className="display-title text-[2.05rem] font-medium leading-[1.06] text-heading sm:text-5xl"
                >
                  Ten premium offers across products, courses, and ecommerce goods.
                </h2>
                <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                  These placeholders show the commercial direction without pretending future products
                  are already live. Available items link to product pages; future goods collect intent
                  or point into membership.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {catalogueOfferings.map((offering, index) => (
                <article
                  key={offering.slug}
                  className="luxury-card group flex h-full flex-col rounded-[28px] p-4 transition duration-500 hover:-translate-y-1 hover:border-sage/70 sm:p-5"
                >
                  <OfferingVisual offering={offering} index={index + 1} />
                  <div className="flex flex-1 flex-col p-1 pt-5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-line bg-bone-white/75 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-muted">
                        {shopCategoryLabels[offering.category]}
                      </span>
                      <span className="rounded-full border border-sage/45 bg-sage/10 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-sage">
                        {shopStatusLabels[offering.status]}
                      </span>
                    </div>
                    <h3 className="display-title mt-4 text-[1.62rem] font-medium leading-[1.08] text-heading sm:text-[1.9rem]">
                      {offering.name}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-terracotta">
                      {offering.priceLabel}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {offering.description}
                    </p>
                    <ul className="mt-4 grid gap-2 text-xs text-muted">
                      {offering.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-2">
                          <span aria-hidden="true" className="text-sage">
                            /
                          </span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-5">
                      <Link
                        href={offering.cta.href}
                        className={`inline-flex min-h-11 w-full items-center justify-center rounded-full px-5 text-[11px] font-semibold uppercase tracking-[0.14em] transition duration-300 ${
                          offering.status === "coming-soon"
                            ? "bg-obsidian text-bone-white hover:bg-terracotta"
                            : "border border-sage/70 bg-bone-white/75 text-obsidian hover:border-terracotta hover:text-terracotta"
                        }`}
                      >
                        {offering.cta.label}
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <article className="glass-card rounded-[28px] p-6 sm:p-8">
            <p className="eyebrow">Launch Standard</p>
            <p className="mt-3 max-w-4xl text-sm leading-relaxed text-muted sm:text-base">
              Future wellbeing products should only move from concept to checkout after
              sourcing, claims review, fulfilment, pricing, and support terms are ready.
              Until then, this catalogue builds demand while keeping the brand responsible.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
