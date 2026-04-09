import Link from "next/link";
import Image from "next/image";
import { siteContent } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line/90 py-12 sm:py-14">
      <div className="section-wrap grid gap-8 md:grid-cols-[1fr_auto_auto] md:items-start">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/images/hero/QPJmZ.jpg"
              alt={`${siteContent.brand.name} logo`}
              width={40}
              height={40}
              className="h-10 w-10 rounded-xl border border-line/70 object-cover"
            />
            <p className="eyebrow">{siteContent.brand.name}</p>
          </div>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
            {siteContent.brand.description}
          </p>
          <p className="mt-4 max-w-md text-xs leading-relaxed text-muted">
            {siteContent.healthDisclaimer}
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.14em] text-muted">
            {siteContent.company} | ABN: {siteContent.abn}
          </p>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 sm:gap-10 md:grid-cols-[auto_auto]">
          <nav className="space-y-1.5" aria-label="Footer navigation">
            {siteContent.nav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-xl py-1.5 text-sm text-foreground/86 transition duration-300 hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="space-y-1.5">
            {siteContent.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-xl py-1.5 text-sm text-muted transition duration-300 hover:text-gold"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 text-xs uppercase tracking-[0.2em] text-muted">
              {siteContent.social.map((social, index) => (
                <span key={social.label}>
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-gold"
                  >
                    {social.label}
                  </Link>
                  {index < siteContent.social.length - 1 ? " / " : ""}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
