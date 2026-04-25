import { createClient } from "@sanity/client";

/**
 * Sanity client. We create it even when env vars are unset so imports never
 * crash at build time on marketing-only pages; individual fetches short-circuit
 * when `isSanityConfigured` is false.
 */

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const apiVersion = process.env.SANITY_API_VERSION ?? "2024-10-01";
const token = process.env.SANITY_API_READ_TOKEN;

export const isSanityConfigured = Boolean(projectId);

export const sanity = createClient({
  projectId: projectId || "placeholder",
  dataset,
  apiVersion,
  token,
  // CDN is cache-friendly for marketing content; revalidate via tags when needed.
  useCdn: true,
});
