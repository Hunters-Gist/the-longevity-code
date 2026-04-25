import type { NextConfig } from "next";

/**
 * Security headers applied site-wide.
 *
 * Notes:
 * - Static headers only (no per-request nonce) so we keep ISR / static caching
 *   for marketing pages. CSP is therefore based on origin allowlists.
 * - Content-Security-Policy is sent in **report-only** mode for now so we can
 *   observe violations in production without breaking anything. Once we have
 *   confirmed clean reports for at least one full deploy, switch the header
 *   key to `Content-Security-Policy` to enforce.
 * - HSTS (Strict-Transport-Security) is already set by the Vercel platform.
 *   We do not duplicate it here to avoid conflicting values.
 *
 * Allowlist rationale:
 * - clerk.thesilacode.com — Clerk satellite (auth widgets, JS, images, fonts)
 * - *.clerk.accounts.dev / *.clerk.com — fallback for dev / shared assets
 * - api.stripe.com / checkout.stripe.com — used for redirect-based checkout
 * - fonts.googleapis.com / fonts.gstatic.com — next/font (Google Fonts)
 * - vitals.vercel-insights.com — Speed Insights / Web Vitals (no-op if unused)
 * - data: / blob: img-src — required by Next.js Image and inline SVG noise
 */
const cspDirectives: Record<string, string[]> = {
  "default-src": ["'self'"],
  "base-uri": ["'self'"],
  "form-action": [
    "'self'",
    "https://checkout.stripe.com",
    "https://clerk.thesilacode.com",
  ],
  "frame-ancestors": ["'none'"],
  "object-src": ["'none'"],
  "script-src": [
    "'self'",
    "'unsafe-inline'",
    "https://clerk.thesilacode.com",
    "https://*.clerk.accounts.dev",
    "https://*.clerk.com",
    "https://js.stripe.com",
  ],
  "style-src": ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
  "img-src": [
    "'self'",
    "data:",
    "blob:",
    "https://clerk.thesilacode.com",
    "https://img.clerk.com",
    "https://*.clerk.accounts.dev",
    "https://*.clerk.com",
  ],
  "font-src": [
    "'self'",
    "data:",
    "https://fonts.gstatic.com",
    "https://clerk.thesilacode.com",
  ],
  "connect-src": [
    "'self'",
    "https://clerk.thesilacode.com",
    "https://*.clerk.accounts.dev",
    "https://*.clerk.com",
    "https://api.stripe.com",
    "https://vitals.vercel-insights.com",
  ],
  "frame-src": [
    "'self'",
    "https://challenges.cloudflare.com",
    "https://js.stripe.com",
    "https://hooks.stripe.com",
  ],
  "worker-src": ["'self'", "blob:"],
  "manifest-src": ["'self'"],
  "upgrade-insecure-requests": [],
};

const cspHeaderValue = Object.entries(cspDirectives)
  .map(([directive, values]) =>
    values.length > 0 ? `${directive} ${values.join(" ")}` : directive,
  )
  .join("; ");

const securityHeaders = [
  {
    // Report-only for now to avoid breaking production while we observe.
    // Switch to `Content-Security-Policy` to enforce after a clean run.
    key: "Content-Security-Policy-Report-Only",
    value: cspHeaderValue,
  },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  {
    key: "Permissions-Policy",
    value: [
      "accelerometer=()",
      "autoplay=()",
      "browsing-topics=()",
      "camera=()",
      "display-capture=()",
      "encrypted-media=()",
      "fullscreen=(self)",
      "geolocation=()",
      "gyroscope=()",
      "magnetometer=()",
      "microphone=()",
      "midi=()",
      "payment=(self \"https://checkout.stripe.com\")",
      "picture-in-picture=()",
      "publickey-credentials-get=(self)",
      "screen-wake-lock=()",
      "sync-xhr=()",
      "usb=()",
      "xr-spatial-tracking=()",
    ].join(", "),
  },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
];

const nextConfig: NextConfig = {
  reactCompiler: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
