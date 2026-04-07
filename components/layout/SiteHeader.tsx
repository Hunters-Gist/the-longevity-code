"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteContent } from "@/content/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-line/80 bg-bone-white/90 backdrop-blur-xl">
      <div className="section-wrap flex items-center justify-between py-3 sm:py-4">
        <Link href="/" className="flex items-center gap-3 pr-2">
          <Image
            src="/images/hero/VL logo 6.png"
            alt={`${siteContent.brand.name} logo`}
            width={40}
            height={40}
            priority
            className="h-10 w-10 rounded-xl border border-line/70 object-cover"
          />
          <div className="space-y-1">
            <p className="eyebrow whitespace-nowrap">{siteContent.brand.name}</p>
            <p className="whitespace-nowrap text-[10px] uppercase tracking-[0.16em] text-muted/85">
              {siteContent.brand.strap}
            </p>
          </div>
        </Link>

        <nav
          className="hidden items-center gap-6 lg:flex"
          aria-label="Primary navigation"
        >
          {siteContent.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[11px] uppercase tracking-[0.16em] transition hover:text-obsidian ${
                pathname === item.href ? "text-obsidian" : "text-muted"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={siteContent.ctas.primary.href}
            className="hidden min-h-11 items-center justify-center rounded-full bg-obsidian px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-bone-white transition hover:bg-deep-charcoal sm:inline-flex lg:hidden"
          >
            {siteContent.ctas.primary.label}
          </Link>
          <button
            type="button"
            aria-controls="mobile-site-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-bone-white/85 text-obsidian transition hover:border-sage/70 hover:text-sage lg:hidden"
          >
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            <span
              className={`relative h-3.5 w-4 ${menuOpen ? "text-sage" : ""}`}
              aria-hidden="true"
            >
              <span
                className={`absolute left-0 top-0 block h-[1.5px] w-4 rounded-full bg-current transition ${
                  menuOpen ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[6px] block h-[1.5px] w-4 rounded-full bg-current transition ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-3 block h-[1.5px] w-4 rounded-full bg-current transition ${
                  menuOpen ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
          <Link
            href={siteContent.ctas.primary.href}
            className="hidden min-h-11 items-center justify-center rounded-full bg-obsidian px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-bone-white transition hover:bg-deep-charcoal lg:inline-flex"
          >
            {siteContent.ctas.primary.label}
          </Link>
        </div>
      </div>

      {menuOpen ? (
        <div
          id="mobile-site-menu"
          className="section-wrap pb-4 lg:hidden"
          aria-label="Mobile navigation menu"
        >
          <div className="luxury-card rounded-3xl p-3">
            <nav className="space-y-1" aria-label="Primary mobile navigation">
              {siteContent.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    pathname === item.href
                      ? "bg-bone-white text-obsidian"
                      : "text-foreground/85 hover:bg-bone-white/70"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-3 grid gap-2">
              <Link
                href={siteContent.ctas.primary.href}
                onClick={() => setMenuOpen(false)}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-obsidian px-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-bone-white transition hover:bg-deep-charcoal"
              >
                {siteContent.ctas.primary.label}
              </Link>
              <Link
                href={siteContent.ctas.secondary.href}
                onClick={() => setMenuOpen(false)}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-sage/70 bg-bone-white/75 px-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-obsidian transition hover:border-terracotta hover:text-terracotta"
              >
                {siteContent.ctas.secondary.label}
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
