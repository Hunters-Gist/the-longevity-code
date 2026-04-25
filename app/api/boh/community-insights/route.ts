import { buildCommunityInsightsSnapshot } from "@/lib/communityAnalytics";
import {
  adminAuthResponse,
  adminMethodNotAllowed,
  requireAdmin,
} from "@/lib/auth/admin";

export const dynamic = "force-dynamic";

export async function GET() {
  const authResult = await requireAdmin();
  const authResponse = adminAuthResponse(authResult);
  if (authResponse) return authResponse;

  return Response.json(buildCommunityInsightsSnapshot(), {
    headers: {
      "Cache-Control": "no-store",
    },
  });
}

export function POST() {
  return adminMethodNotAllowed(["GET"]);
}

export function PUT() {
  return adminMethodNotAllowed(["GET"]);
}

export function PATCH() {
  return adminMethodNotAllowed(["GET"]);
}

export function DELETE() {
  return adminMethodNotAllowed(["GET"]);
}
