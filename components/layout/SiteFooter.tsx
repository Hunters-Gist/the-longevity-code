import { homeContent } from "@/content/homepage";

export function SiteFooter() {
  return (
    <footer className="border-t border-line/90 py-10">
      <div className="section-wrap grid gap-8 md:grid-cols-[1fr_auto_auto] md:items-start">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-sage">
            The Longevity Code
          </p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
            Premium protocols and education for men who want better recovery, sharper thinking, and a longer performance horizon.
          </p>
        </div>

        <nav className="space-y-2" aria-label="Footer navigation">
          {homeContent.nav.map((link) => (
            <a
              key={link}
              href="#"
              className="block text-sm text-mist/90 transition hover:text-sage"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="space-y-2">
          {homeContent.footer.legal.map((item) => (
            <a
              key={item}
              href="#"
              className="block text-sm text-muted transition hover:text-bone-white"
            >
              {item}
            </a>
          ))}
          <div className="pt-2 text-xs uppercase tracking-[0.2em] text-muted">
            {homeContent.footer.social.join(" / ")}
          </div>
        </div>
      </div>
    </footer>
  );
}
