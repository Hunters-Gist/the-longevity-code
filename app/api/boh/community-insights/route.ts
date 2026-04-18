import { buildCommunityInsightsSnapshot } from "@/lib/communityAnalytics";

export const dynamic = "force-dynamic";

export async function GET() {
  return Response.json(buildCommunityInsightsSnapshot(), {
    headers: {
      "Cache-Control": "no-store",
    },
  });
}
