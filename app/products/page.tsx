import { PageHero } from "@/components/ui/PageHero";

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Premium wellness products, curated not commoditized."
        description="This section is intentionally editorial-first and will house selective product releases designed to complement protocols and membership."
      />
      <section className="py-12 sm:py-16">
        <div className="section-wrap">
          <article className="glass-card rounded-[24px] p-5 sm:rounded-[28px] sm:p-9">
            <p className="text-sm leading-relaxed text-muted sm:text-base">
              Product architecture is scaffolded for future expansion without
              turning the brand into a generic storefront. Releases will be
              integrated through protocol context and educational guidance.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
