"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignInButton, SignUpButton, UserButton, Show } from "@clerk/nextjs";
import { siteContent } from "@/content/site";
import { BrandMark } from "@/components/ui/BrandMark";

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
    <header className="sticky top-0 z-30 border-b border-line/70 bg-background/82 backdrop-blur-xl">
      <div className="section-wrap flex min-h-16 items-center justify-between py-2.5 sm:min-h-[4.35rem] sm:py-3">
        <Link href="/" className="flex min-h-11 min-w-0 max-w-[54vw] items-center pr-2 sm:max-w-none">
          <BrandMark />
        </Link>

        <nav
          className="hidden items-center gap-5 xl:flex 2xl:gap-6"
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
          <Show when="signed-out">
            <SignInButton mode="modal">
              <button
                type="button"
                className="ui-caps hidden min-h-11 items-center justify-center rounded-full border border-line px-4 py-2 text-obsidian transition hover:border-terracotta hover:text-terracotta sm:inline-flex"
              >
                Sign in
              </button>
            </SignInButton>
          </Show>
          <Show when="signed-in">
            <div className="hidden items-center sm:flex">
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "h-9 w-9",
                  },
                }}
              />
            </div>
          </Show>
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
            className="ui-caps hidden min-h-11 items-center justify-center rounded-sm border border-terracotta/60 bg-obsidian px-4 py-2 text-bone-white transition hover:bg-terracotta xl:inline-flex"
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
                <Link
                  href={siteContent.ctas.tertiary.href}
                  onClick={() => setMenuOpen(false)}
                  className="ui-caps inline-flex min-h-12 items-center justify-center rounded-full border border-line bg-bone-white/60 px-5 text-obsidian transition hover:border-terracotta hover:text-terracotta"
                >
                  {siteContent.ctas.tertiary.label}
                </Link>
                <Show when="signed-out">
                  <div className="grid gap-2.5 pt-1 sm:grid-cols-2">
                    <SignInButton mode="modal">
                      <button
                        type="button"
                        onClick={() => setMenuOpen(false)}
                        className="ui-caps inline-flex min-h-12 items-center justify-center rounded-full border border-line bg-bone-white/60 px-5 text-obsidian transition hover:border-terracotta hover:text-terracotta"
                      >
                        Sign in
                      </button>
                    </SignInButton>
                    <SignUpButton mode="modal">
                      <button
                        type="button"
                        onClick={() => setMenuOpen(false)}
                        className="ui-caps inline-flex min-h-12 items-center justify-center rounded-full border border-line bg-bone-white/60 px-5 text-obsidian transition hover:border-terracotta hover:text-terracotta"
                      >
                        Create account
                      </button>
                    </SignUpButton>
                  </div>
                </Show>
                <Show when="signed-in">
                  <div className="flex items-center justify-between rounded-full border border-line bg-bone-white/60 px-4 py-2">
                    <span className="ui-caps text-muted">Signed in</span>
                    <UserButton />
                  </div>
                </Show>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
