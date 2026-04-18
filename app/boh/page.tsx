import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { BohDashboardClient } from "@/components/community/BohDashboardClient";
import { buildCommunityInsightsSnapshot } from "@/lib/communityAnalytics";

export const metadata: Metadata = {
  title: "BOH Analytics",
  description:
    "Back-of-house dashboard for live community sentiment, requests, and weekly wellness priorities.",
  alternates: {
    canonical: "/boh",
  },
};

export default function BohPage() {
  const initialSnapshot = buildCommunityInsightsSnapshot();

  return (
    <>
      <PageHero
        eyebrow="BOH Dashboard"
        title="Autonomous Community Analytics"
        description="Live member intelligence on what is discussed most, what people want to achieve, and what your team should publish next."
      />
      <section className="py-12 sm:py-16">
        <BohDashboardClient initialData={initialSnapshot} />
      </section>
    </>
  );
}
