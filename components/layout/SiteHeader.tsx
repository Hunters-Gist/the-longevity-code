"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteContent } from "@/content/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  return (
    <header className="sticky top-0 z-30 border-b border-line/80 bg-obsidian/90 backdrop-blur-xl">
      <div className="section-wrap flex items-center justify-between py-3 sm:py-4">
        <Link href="/" className="flex items-center gap-3 pr-2">
          <Image
            src="/images/hero/QPJmZ.jpg"
            alt={`${siteContent.brand.name} logo`}
            width={40}
            height={40}
            priority
            className="h-10 w-10 rounded-xl border border-line/70 object-cover"
          />
          <div className="space-y-1">
            <p className="eyebrow whitespace-nowrap">{siteContent.brand.name}</p>
            <p className="whitespace-nowrap text-[10px] uppercase tracking-[0.16em] text-muted/90">
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
              className={`text-[11px] uppercase tracking-[0.16em] transition hover:text-bone-white ${
                isActive(item.href) ? "text-bone-white" : "text-muted"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={siteContent.ctas.primary.href}
            className="hidden min-h-11 items-center justify-center rounded-full bg-gold px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-obsidian transition hover:bg-[#d9ba84] sm:inline-flex lg:hidden"
          >
            {siteContent.ctas.primary.label}
          </Link>
          <button
            type="button"
            aria-controls="mobile-site-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface/85 text-bone-white transition hover:border-gold hover:text-gold lg:hidden"
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
            className="hidden min-h-11 items-center justify-center rounded-full bg-gold px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-obsidian transition hover:bg-[#d9ba84] lg:inline-flex"
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
                    isActive(item.href)
                      ? "bg-surface text-bone-white"
                      : "text-foreground/90 hover:bg-surface/70"
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
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-gold px-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-obsidian transition hover:bg-[#d9ba84]"
              >
                {siteContent.ctas.primary.label}
              </Link>
              <Link
                href={siteContent.ctas.secondary.href}
                onClick={() => setMenuOpen(false)}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-line bg-transparent px-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-bone-white transition hover:border-gold hover:text-gold"
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
