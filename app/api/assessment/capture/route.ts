import { NextResponse } from "next/server";
import { z } from "zod";

import { db, schema } from "@/lib/db/client";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const pillarScoreSchema = z.object({
  brain: z.number().int().min(0).max(100),
  skin: z.number().int().min(0).max(100),
  body: z.number().int().min(0).max(100),
  longevity: z.number().int().min(0).max(100),
  rehab: z.number().int().min(0).max(100),
});

const payloadSchema = z.object({
  email: z.string().email().max(320),
  answers: z.record(z.string(), z.number().int().min(1).max(5)),
  scoreByPillar: pillarScoreSchema,
  overallScore: z.number().min(0).max(100),
  lowestPillar: z.enum(["brain", "skin", "body", "longevity", "rehab"]),
  sourceRoute: z.string().min(1).max(128).default("/assessment"),
  marketingConsent: z.boolean().optional().default(false),
});

export async function POST(request: Request) {
  let payload: z.infer<typeof payloadSchema>;

  try {
    payload = payloadSchema.parse(await request.json());
  } catch {
    return NextResponse.json({ error: "invalid_assessment_payload" }, { status: 400 });
  }

  try {
    await db.insert(schema.assessmentSubmissions).values({
      email: payload.email.toLowerCase(),
      sourceRoute: payload.sourceRoute,
      answers: payload.answers,
      scoreByPillar: payload.scoreByPillar,
      overallScore: Math.round(payload.overallScore),
      lowestPillar: payload.lowestPillar,
      marketingConsent: payload.marketingConsent ? 1 : 0,
    });

    await db
      .insert(schema.leads)
      .values({
        email: payload.email.toLowerCase(),
        source: "assessment",
        metadata: {
          overallScore: Math.round(payload.overallScore),
          lowestPillar: payload.lowestPillar,
          marketingConsent: payload.marketingConsent,
        },
      })
      .onConflictDoNothing();

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[assessment-capture] failed to persist assessment", error);
    return NextResponse.json({ error: "assessment_capture_failed" }, { status: 503 });
  }
}

export function GET() {
  return NextResponse.json(
    { error: "method_not_allowed" },
    { status: 405, headers: { Allow: "POST" } },
  );
}
