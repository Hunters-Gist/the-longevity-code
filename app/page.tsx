import { AssessmentSection } from "@/components/sections/AssessmentSection";
import { FaqPreviewSection } from "@/components/sections/FaqPreviewSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { JournalSection } from "@/components/sections/JournalSection";
import { MembershipSection } from "@/components/sections/MembershipSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { PillarsSection } from "@/components/sections/PillarsSection";
import { ProtocolsSection } from "@/components/sections/ProtocolsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PillarsSection />
      <ProtocolsSection />
      <HowItWorksSection />
      <AssessmentSection />
      <PhilosophySection />
      <JournalSection />
      <MembershipSection />
      <FaqPreviewSection />
      <FinalCtaSection />
    </>
  );
}
