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
