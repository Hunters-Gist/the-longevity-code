import Image from "next/image";
import { siteContent } from "@/content/site";
import { brandAssets } from "@/lib/brand/assets";

type BrandMarkProps = {
  compact?: boolean;
};

export function BrandMark({ compact = false }: BrandMarkProps) {
  return (
    <span
      aria-label={`${siteContent.brand.name} home`}
      className="relative inline-flex min-w-0 items-center"
    >
      <Image
        src={brandAssets.logo}
        alt=""
        width={1024}
        height={577}
        priority={!compact}
        sizes={compact ? "112px" : "(max-width: 640px) 132px, 164px"}
        className={`h-auto w-auto object-contain ${compact ? "max-w-28" : "max-w-33 sm:max-w-41"}`}
      />
    </span>
  );
}
