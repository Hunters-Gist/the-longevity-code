export const CANONICAL_SITE_URL = "https://thesilacode.com";
export const SITE_DOMAIN = "thesilacode.com";

const trimSlashes = (path: string) => path.replace(/^\/+/, "");

export function absoluteUrl(path = "") {
  if (!path || path === "/") {
    return CANONICAL_SITE_URL;
  }

  return `${CANONICAL_SITE_URL}/${trimSlashes(path)}`;
}

export function internalPath(path: string) {
  return path.startsWith("/") ? path : `/${path}`;
}

export const siteConfig = {
  name: "The Sila Code",
  domain: SITE_DOMAIN,
  url: CANONICAL_SITE_URL,
  ogImage: absoluteUrl("/og-image.png"),
} as const;

/**
 * Resolved external community URL.
 *
 * - Reads `NEXT_PUBLIC_COMMUNITY_URL` so the client can update the destination
 *   (Skool, Circle, Discord, etc.) without redeploying code changes.
 * - Falls back to `undefined` when the env var is unset or invalid so callers
 *   can route to the internal `/community` page instead of a broken host.
 */
export function getExternalCommunityUrl(): string | undefined {
  const raw = process.env.NEXT_PUBLIC_COMMUNITY_URL?.trim();
  if (!raw) return undefined;
  try {
    const parsed = new URL(raw);
    if (parsed.protocol !== "https:" && parsed.protocol !== "http:") {
      return undefined;
    }
    return parsed.toString();
  } catch {
    return undefined;
  }
}

/**
 * Resolved community link target. Prefers the configured external URL;
 * otherwise routes to the internal `/community` page so users never hit a
 * broken host (the previous hard-coded `thesilacode.skool.com` does not
 * resolve in DNS).
 */
export function communityHref(): string {
  return getExternalCommunityUrl() ?? "/community";
}
