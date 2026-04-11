import Link from "next/link";
import Image from "next/image";
import { siteContent } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line/90 py-12 sm:py-14">
      <div className="section-wrap grid gap-10 md:grid-cols-[1fr_auto] md:items-start">
        <div>
          <Link href="/" className="inline-flex min-h-11 items-center">
            <Image
              src="/images/hero/the sila code logo.png"
              alt={`${siteContent.brand.name} logo`}
              width={362}
              height={79}
              className="h-auto w-[184px] max-w-full object-contain sm:w-[222px]"
            />
          </Link>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
            {siteContent.brand.strap}
          </p>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
            {siteContent.brand.description}
          </p>
          <p className="mt-4 max-w-md text-xs leading-relaxed text-muted">
            {siteContent.healthDisclaimer}
          </p>
          <p className="ui-caps mt-4 text-muted">
            {siteContent.company} | ABN: {siteContent.abn}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 sm:gap-10 md:grid-cols-[auto_auto]">
          <nav className="space-y-1.5" aria-label="Footer navigation">
            <p className="ui-caps text-muted">Navigate</p>
            {siteContent.nav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex min-h-11 min-w-11 items-center rounded-xl py-1.5 pr-2 text-sm text-foreground/88 transition duration-300 hover:text-terracotta"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="space-y-1.5">
            <p className="ui-caps text-muted">Legal & Social</p>
            {siteContent.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex min-h-11 min-w-11 items-center rounded-xl py-1.5 pr-2 text-sm text-muted transition duration-300 hover:text-terracotta"
              >
                {item.label}
              </Link>
            ))}
            <div className="ui-caps flex flex-wrap gap-2.5 pt-2 text-muted">
              {siteContent.social.map((social, index) => (
                <span key={social.label} className="inline-flex">
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center rounded-full border border-line/70 px-3.5 hover:border-terracotta hover:text-terracotta"
                  >
                    {social.label}
                  </Link>
                  {index < siteContent.social.length - 1 ? "" : ""}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
