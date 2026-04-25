import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { BohDashboardClient } from "@/components/community/BohDashboardClient";
import { ActionButton } from "@/components/ui/ActionButton";
import { requireAdmin } from "@/lib/auth/admin";
import { buildCommunityInsightsSnapshot } from "@/lib/communityAnalytics";

export const metadata: Metadata = {
  title: "BOH Analytics",
  description:
    "Back-of-house dashboard for live community sentiment, requests, and weekly wellness priorities.",
  alternates: {
    canonical: "/boh",
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default async function BohPage() {
  const admin = await requireAdmin();

  if (!admin.ok) {
    return (
      <>
        <PageHero
          eyebrow="Restricted"
          title="Admin access required"
          description="The BOH dashboard is available only to authorised Sila Code operators."
        />
        <section className="py-12 sm:py-16">
          <div className="section-wrap">
            <div className="glass-card rounded-[24px] p-5 sm:rounded-[28px] sm:p-10">
              <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                {admin.status === 401
                  ? "Please sign in with an authorised administrator account to continue."
                  : "You are signed in, but this account is not on the BOH admin allowlist."}
              </p>
              <div className="mt-6">
                <ActionButton href="/sign-in?redirect_url=/boh">
                  Sign in securely
                </ActionButton>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

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
