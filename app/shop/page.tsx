import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Explore The Sila Code products, beginning with Sila Focus, our premium nootropic capsule stack.",
  alternates: {
    canonical: "/shop",
  },
};

export default function ShopPage() {
  return (
    <>
      <PageHero
        eyebrow="Shop"
        title="Clinical wellness, premium execution."
        description="Our formulations are built around ingredient quality, practical dosing, and psychology-informed daily use."
      />
      <section className="py-12 sm:py-16">
        <div className="section-wrap">
          <article className="luxury-card rounded-[28px] p-7 sm:p-10">
            <p className="eyebrow">Featured product</p>
            <h2 className="mt-3 text-4xl text-bone-white sm:text-5xl">Sila Focus</h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
              A focused nootropic stack using L-Theanine, Citicoline, Alpha-GPC
              and Saffron Extract to support cognitive function, concentration,
              and healthy stress response.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/shop/sila-focus"
                className="inline-flex min-h-11 items-center rounded-full bg-gold px-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-obsidian"
              >
                View product
              </Link>
              <Link
                href="/subscribe"
                className="inline-flex min-h-11 items-center rounded-full border border-line px-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-bone-white"
              >
                Subscribe & save
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
