import Link from "next/link";

type CtaRailProps = {
  title: string;
  description: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
};

export function CtaRail({
  title,
  description,
  primary,
  secondary,
}: CtaRailProps) {
  return (
    <section className="py-20">
      <div className="section-wrap">
        <div className="luxury-card rounded-[30px] p-8 sm:p-10">
          <p className="eyebrow">Next Step</p>
          <h2 className="display-title mt-4 text-4xl font-semibold sm:text-5xl">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={primary.href}
              className="inline-flex items-center justify-center rounded-full bg-obsidian px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-bone-white transition hover:bg-deep-charcoal"
            >
              {primary.label}
            </Link>
            {secondary ? (
              <Link
                href={secondary.href}
                className="inline-flex items-center justify-center rounded-full border border-sage/70 bg-bone-white/75 px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-obsidian transition hover:border-terracotta hover:text-terracotta"
              >
                {secondary.label}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
