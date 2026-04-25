"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

type SafeImageProps = ImageProps & {
  fallbackLabel?: string;
};

export function SafeImage({
  alt,
  className,
  fallbackLabel = "The Sila Code",
  fill,
  ...props
}: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`${
          fill ? "absolute inset-0" : ""
        } flex min-h-full w-full items-center justify-center bg-[radial-gradient(circle_at_20%_20%,rgba(140,154,132,0.28),transparent_34%),linear-gradient(145deg,#fffdf9,#ece4d9)] p-5 text-center ${className ?? ""}`}
      >
        <span className="max-w-56 text-[10px] font-semibold uppercase tracking-[0.22em] text-obsidian/75">
          {fallbackLabel}
        </span>
      </div>
    );
  }

  return (
    <Image
      {...props}
      fill={fill}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
