import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { JournalSection } from "@/components/sections/JournalSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { PillarsSection } from "@/components/sections/PillarsSection";
import { ProtocolsSection } from "@/components/sections/ProtocolsSection";
import { SiteFooter } from "@/components/layout/SiteFooter";

export default function Home() {
  return (
    <div className="site-shell flex flex-col">
      <main className="pb-10">
        <HeroSection />
        <PillarsSection />
        <ProtocolsSection />
        <HowItWorksSection />
        <PhilosophySection />
        <JournalSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
