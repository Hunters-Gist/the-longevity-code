import Link from "next/link";
import { siteContent } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line/90 py-14">
      <div className="section-wrap grid gap-8 md:grid-cols-[1fr_auto_auto] md:items-start">
        <div>
          <p className="eyebrow">{siteContent.brand.name}</p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
            {siteContent.brand.description}
          </p>
        </div>

        <nav className="space-y-2" aria-label="Footer navigation">
          {siteContent.nav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-sm text-foreground/86 transition duration-300 hover:text-obsidian"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="space-y-2">
          {siteContent.legal.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block text-sm text-muted transition duration-300 hover:text-obsidian"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-2 text-xs uppercase tracking-[0.2em] text-muted">
            {siteContent.social.join(" / ")}
          </div>
        </div>
      </div>
    </footer>
  );
}
