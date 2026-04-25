"use server";

import { redirect } from "next/navigation";
import { Resend } from "resend";

import { db, schema } from "@/lib/db/client";

/**
 * Lead capture server actions.
 *
 * Two-tier durability:
 *   1. Persist the lead to Neon (schema.leads) — never lost even if email fails.
 *   2. Forward as a plain-text email via Resend — so the team sees it instantly.
 *
 * If Neon is unreachable we still try the email send; if both fail we log loudly.
 * This design means a single flaky dependency never costs us a real lead.
 */

type LeadSource = "final-cta" | "contact" | "assessment";

type LeadPayload = {
  source: LeadSource;
  email: string;
  name?: string;
  message?: string;
  metadata?: Record<string, unknown>;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/u;

function isValidEmail(email: string) {
  return EMAIL_PATTERN.test(email) && email.length <= 254;
}

async function persistLead(payload: LeadPayload) {
  try {
    await db
      .insert(schema.leads)
      .values({
        email: payload.email,
        source: payload.source,
        name: payload.name ?? null,
        message: payload.message ?? null,
        metadata: payload.metadata ?? null,
      })
      .onConflictDoUpdate({
        target: [schema.leads.email, schema.leads.source],
        set: {
          name: payload.name ?? null,
          message: payload.message ?? null,
          metadata: payload.metadata ?? null,
        },
      });
  } catch (error) {
    console.error("[leads] failed to persist lead to Neon", error);
  }
}

async function forwardLeadEmail(payload: LeadPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const toAddress = process.env.LEADS_TO_EMAIL ?? "contact@thesilacode.com";
  const fromAddress =
    process.env.LEADS_FROM_EMAIL ?? "onboarding@resend.dev";

  if (!apiKey) {
    console.info("[leads] RESEND_API_KEY not set; skipping email forward", {
      source: payload.source,
    });
    return;
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: fromAddress,
      to: [toAddress],
      subject: `[Sila lead] ${payload.source}`,
      text: [
        `Source: ${payload.source}`,
        `Email: ${payload.email}`,
        payload.name ? `Name: ${payload.name}` : null,
        payload.message ? `Message: ${payload.message}` : null,
        payload.metadata ? `Metadata: ${JSON.stringify(payload.metadata)}` : null,
      ]
        .filter(Boolean)
        .join("\n"),
    });
  } catch (error) {
    console.error("[leads] failed to forward lead email", error);
  }
}

export async function captureFinalCtaEmail(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();

  if (!isValidEmail(email)) {
    redirect("/?cta=invalid#journal");
  }

  const payload: LeadPayload = { source: "final-cta", email };
  await persistLead(payload);
  await forwardLeadEmail(payload);
  redirect("/?cta=success#journal");
}

export async function captureContactEnquiry(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !message || !isValidEmail(email) || message.length > 4000) {
    redirect("/contact?status=invalid");
  }

  const payload: LeadPayload = { source: "contact", email, name, message };
  await persistLead(payload);
  await forwardLeadEmail(payload);
  redirect("/contact?status=success");
}

export async function captureAssessmentEmail(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();

  if (!isValidEmail(email)) {
    redirect("/assessment?status=invalid");
  }

  const payload: LeadPayload = { source: "assessment", email };
  await persistLead(payload);
  await forwardLeadEmail(payload);
  redirect("/assessment?status=success");
}
