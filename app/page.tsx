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
import { RetreatsSection } from "@/components/sections/RetreatsSection";
import { absoluteUrl, siteConfig } from "@/lib/site-config";
import { brandAssets } from "@/lib/brand/assets";

export const metadata: Metadata = {
  title: "The Modern Code for Upgrading Yourself",
  description:
    "The Sila Code is a premium self-optimisation system built around longevity, recovery, performance, aesthetics, mind, and lifestyle.",
  alternates: {
    canonical: "/",
  },
};

type HomeProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function Home({ searchParams }: HomeProps) {
  const params = searchParams ? await searchParams : {};
  const cta = params.cta;
  const ctaSuccess = cta === "success";
  const ctaInvalid = cta === "invalid";

  const organisationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "The Sila Code Pty Ltd",
    url: siteConfig.url,
    logo: absoluteUrl(brandAssets.logo),
    sameAs: [
      "https://www.instagram.com/thesilacode",
      "https://www.tiktok.com/@thesilacode",
      "https://www.youtube.com/channel/UCWcHwTJKwtU8VqAK9cI0ctg",
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
      {ctaSuccess || ctaInvalid ? (
        <div className="section-wrap pt-4">
          <div
            role="status"
            aria-live="polite"
            className={`rounded-2xl border px-4 py-3 text-sm ${
              ctaSuccess
                ? "border-sage/40 bg-sage/10 text-heading"
                : "border-terracotta/40 bg-terracotta/10 text-heading"
            }`}
          >
            {ctaSuccess
              ? "Thank you — you're on the list. Keep an eye on your inbox."
              : "Please enter a valid email address."}
          </div>
        </div>
      ) : null}
      <HeroSection />
      <PhilosophySection />
      <RetreatsSection />
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
