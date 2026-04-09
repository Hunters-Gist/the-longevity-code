"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteContent } from "@/content/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-30 border-b border-line/90 bg-background/90 backdrop-blur-xl">
      <div className="section-wrap flex min-h-16 items-center justify-between py-2.5 sm:min-h-[4.35rem] sm:py-3">
        <Link href="/" className="flex min-h-11 min-w-0 items-center pr-2">
          <Image
            src="/images/hero/the sila code logo.png"
            alt={`${siteContent.brand.name} logo`}
            width={362}
            height={79}
            priority
            className="h-auto w-[164px] max-w-full object-contain min-[430px]:w-[186px] sm:w-[220px]"
          />
        </Link>

        <nav
          className="hidden items-center gap-6 xl:flex"
          aria-label="Primary navigation"
        >
          {siteContent.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`ui-caps inline-flex min-h-11 min-w-11 items-center justify-center px-1 transition hover:text-terracotta ${
                isActive(item.href) ? "text-obsidian" : "text-muted"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={siteContent.ctas.primary.href}
            className="ui-caps hidden min-h-11 items-center justify-center rounded-full bg-obsidian px-4 py-2 text-bone-white transition hover:bg-terracotta sm:inline-flex xl:hidden"
          >
            {siteContent.ctas.primary.label}
          </Link>
          <button
            type="button"
            aria-controls="mobile-site-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-bone-white/85 text-obsidian transition hover:border-terracotta hover:text-terracotta xl:hidden"
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
            className="ui-caps hidden min-h-11 items-center justify-center rounded-full bg-obsidian px-4 py-2 text-bone-white transition hover:bg-terracotta xl:inline-flex"
          >
            {siteContent.ctas.primary.label}
          </Link>
        </div>
      </div>

      {menuOpen ? (
        <div
          id="mobile-site-menu"
          className="xl:hidden"
          aria-label="Mobile navigation menu"
        >
          <button
            type="button"
            aria-label="Close mobile menu overlay"
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 z-10 bg-obsidian/20 backdrop-blur-[2px]"
          />
          <div className="section-wrap relative z-20 pb-4 pt-1.5">
            <div className="luxury-card max-h-[74vh] overflow-y-auto rounded-[1.35rem] p-3.5 sm:max-h-[78vh] sm:rounded-[1.55rem] sm:p-4">
              <nav className="space-y-1" aria-label="Primary mobile navigation">
                {siteContent.nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block min-h-12 rounded-2xl px-4 py-3.5 text-base font-medium transition ${
                      isActive(item.href)
                        ? "bg-bone-white text-obsidian"
                        : "text-foreground hover:bg-bone-white/70"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-3 grid gap-2.5">
                <Link
                  href={siteContent.ctas.primary.href}
                  onClick={() => setMenuOpen(false)}
                  className="ui-caps inline-flex min-h-12 items-center justify-center rounded-full bg-obsidian px-5 text-bone-white transition hover:bg-terracotta"
                >
                  {siteContent.ctas.primary.label}
                </Link>
                <Link
                  href={siteContent.ctas.secondary.href}
                  onClick={() => setMenuOpen(false)}
                  className="ui-caps inline-flex min-h-12 items-center justify-center rounded-full border border-sage/70 bg-bone-white/75 px-5 text-obsidian transition hover:border-terracotta hover:text-terracotta"
                >
                  {siteContent.ctas.secondary.label}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
