import Link from "next/link";

const retreatSignals = [
  "Recovery-first environments",
  "Structured education",
  "Premium reset rituals",
  "Post-retreat integration",
] as const;

export function RetreatsSection() {
  return (
    <section id="retreats" className="section-space">
      <div className="section-wrap">
        <div className="grain-overlay relative overflow-hidden rounded-[28px] border border-line-strong bg-obsidian p-5 text-bone-white shadow-[0_28px_55px_-28px_rgba(10,18,15,0.72)] sm:rounded-[34px] sm:p-8 lg:p-10">
          <div className="ambient-orb pointer-events-none absolute -left-20 top-8 h-64 w-64 rounded-full bg-terracotta/24" />
          <div className="ambient-orb pointer-events-none absolute -right-16 bottom-6 h-60 w-60 rounded-full bg-sage/28 [animation-delay:1.6s]" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_0.92fr] lg:items-end">
            <div>
              <p className="eyebrow text-sage">Retreats</p>
              <h2 className="display-title mt-3 max-w-[12ch] text-[2.25rem] font-semibold leading-[1.02] text-bone-white sm:text-5xl lg:text-6xl">
                Reset your system. Rebuild your standards.
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-bone-white/74 sm:text-base">
                Future Sila Code retreats will be designed for deep recovery, disciplined
                reflection, and practical integration. Premium environments, responsible
                education, better food, better recovery, and stronger daily defaults.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/#waitlist"
                  className="ui-caps inline-flex min-h-12 items-center justify-center rounded-sm bg-bone-white px-6 text-obsidian transition duration-300 hover:bg-terracotta hover:text-bone-white"
                >
                  Join the Waitlist
                </Link>
                <Link
                  href="/contact"
                  className="ui-caps inline-flex min-h-12 items-center justify-center rounded-sm border border-bone-white/28 px-6 text-bone-white transition duration-300 hover:border-terracotta hover:text-terracotta"
                >
                  Register Retreat Interest
                </Link>
              </div>
            </div>

            <ul className="relative grid gap-3 sm:grid-cols-2">
              {retreatSignals.map((signal, index) => (
                <li
                  key={signal}
                  className="rounded-2xl border border-bone-white/14 bg-bone-white/8 p-4 backdrop-blur-sm"
                >
                  <p className="font-mono text-xs text-terracotta">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-bone-white/82">
                    {signal}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
