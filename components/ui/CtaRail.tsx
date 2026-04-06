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
    <section className="py-14 sm:py-18 lg:py-20">
      <div className="section-wrap">
        <div className="luxury-card relative overflow-hidden rounded-[24px] p-5 sm:rounded-[30px] sm:p-10">
          <div className="ambient-orb pointer-events-none absolute -right-12 -top-10 h-40 w-40 rounded-full bg-teal/18" />
          <p className="eyebrow">Next Step</p>
          <h2 className="display-title mt-3 text-[2rem] font-semibold sm:mt-4 sm:text-5xl">
            {title}
          </h2>
          <p className="mt-3 max-w-2xl text-[0.98rem] leading-relaxed text-muted sm:mt-4 sm:text-base">
            {description}
          </p>
          <div className="mt-6 grid gap-2 sm:mt-8 sm:flex sm:flex-wrap sm:gap-3">
            <Link
              href={primary.href}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-obsidian px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-bone-white transition hover:bg-deep-charcoal sm:w-auto sm:text-xs sm:tracking-[0.15em]"
            >
              {primary.label}
            </Link>
            {secondary ? (
              <Link
                href={secondary.href}
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-sage/70 bg-bone-white/75 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-obsidian transition hover:border-terracotta hover:text-terracotta sm:w-auto sm:text-xs sm:tracking-[0.15em]"
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
