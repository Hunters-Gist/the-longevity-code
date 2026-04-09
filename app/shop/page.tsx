import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import Image from "next/image";

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
            <div className="grid items-end gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
              <div>
                <p className="eyebrow">Featured product</p>
                <h2 className="display-title mt-3 text-4xl text-heading sm:text-5xl">
                  Sila Focus
                </h2>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
                  A focused nootropic stack using L-Theanine, Citicoline, Alpha-GPC
                  and Saffron Extract to support cognitive function, concentration,
                  and healthy stress response.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="/shop/sila-focus"
                    className="inline-flex min-h-11 items-center rounded-full bg-obsidian px-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-bone-white transition duration-300 hover:bg-terracotta"
                  >
                    View product
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
                  src="/images/hero/premium_photo-1679938885972-180ed418f466.avif"
                  alt="Sila Focus product lifestyle visual"
                  width={1600}
                  height={1100}
                  className="h-56 w-full object-cover object-[center_42%] transition duration-700 ease-out hover:scale-105 sm:h-72"
                />
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
