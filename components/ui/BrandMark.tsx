import { siteContent } from "@/content/site";

type BrandMarkProps = {
  compact?: boolean;
};

export function BrandMark({ compact = false }: BrandMarkProps) {
  return (
    <span
      aria-label={`${siteContent.brand.name} home`}
      className="inline-flex min-w-0 flex-col leading-none text-obsidian"
    >
      <span
        className={`font-serif font-semibold tracking-[0.04em] ${
          compact ? "text-[1.05rem]" : "text-[1.2rem] sm:text-[1.42rem]"
        }`}
      >
        The Sila Code
      </span>
      <span className="mt-1 max-w-full truncate text-[0.48rem] uppercase tracking-[0.26em] text-muted sm:text-[0.55rem]">
        Strength. Discipline. Longevity.
      </span>
    </span>
  );
}
