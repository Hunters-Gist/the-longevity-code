import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Unlock Your Code",
  description:
    "Where discipline becomes identity. A psychology-informed system for structured, consistent behavioural strength.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const organisationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "The Sila Code Pty Ltd",
    url: "https://www.thesilacode.com",
    sameAs: [
      "https://www.instagram.com",
      "https://www.tiktok.com",
      "https://www.youtube.com",
    ],
    description:
      "A structured approach to human performance, grounded in psychology and built for real-world application in Australia.",
  };

  return (
    <div className="pb-4 pt-1 sm:pt-2">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organisationSchema),
        }}
      />
      <HeroSection />
      <PhilosophySection />
      <div className="border-y border-line/70 bg-bone-white/45">
        <PillarsSection />
        <HowItWorksSection />
      </div>
      <ProtocolsSection />
      <div className="border-y border-line/70 bg-bone-white/45">
        <AssessmentSection />
        <MembershipSection />
      </div>
      <JournalSection />
      <FaqPreviewSection />
      <FinalCtaSection />
    </div>
  );
}
