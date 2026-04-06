import Link from "next/link";
import { siteContent } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-line/80 bg-bone-white/90 backdrop-blur-xl">
      <div className="section-wrap flex items-center justify-between py-4">
        <Link href="/" className="space-y-1">
          <p className="eyebrow">{siteContent.brand.name}</p>
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted/85">
            {siteContent.brand.strap}
          </p>
        </Link>

        <nav
          className="hidden items-center gap-6 lg:flex"
          aria-label="Primary navigation"
        >
          {siteContent.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[11px] uppercase tracking-[0.16em] text-muted transition hover:text-obsidian"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={siteContent.ctas.primary.href}
            className="inline-flex items-center justify-center rounded-full bg-obsidian px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-bone-white transition hover:bg-deep-charcoal"
          >
            {siteContent.ctas.primary.label}
          </Link>
        </div>
      </div>
    </header>
  );
}
