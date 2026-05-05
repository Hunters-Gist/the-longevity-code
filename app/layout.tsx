import type { Metadata } from "next";
import { JetBrains_Mono, Playfair_Display, Source_Sans_3 } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import {
  BRAND_DESCRIPTION,
  BRAND_MEANING,
  BRAND_NAME,
  BRAND_STRAP,
} from "@/content/brand";
import { assertProductionEnvironment } from "@/lib/env/production";
import { brandAssets } from "@/lib/brand/assets";
import { absoluteUrl, siteConfig } from "@/lib/site-config";

assertProductionEnvironment();

const bodyFont = Source_Sans_3({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const headingFont = Playfair_Display({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const monoFont = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: BRAND_NAME,
    template: `%s | ${BRAND_NAME}`,
  },
  applicationName: BRAND_NAME,
  metadataBase: new URL(siteConfig.url),
  description: `${BRAND_STRAP} ${BRAND_DESCRIPTION} ${BRAND_MEANING}`,
  openGraph: {
    title: BRAND_NAME,
    description: `${BRAND_STRAP} ${BRAND_DESCRIPTION} ${BRAND_MEANING}`,
    siteName: BRAND_NAME,
    type: "website",
    locale: "en_AU",
    url: siteConfig.url,
    images: [
      {
        url: absoluteUrl(brandAssets.heroPoster),
        width: 1200,
        height: 630,
        alt: `${BRAND_NAME} — ${BRAND_STRAP}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: BRAND_NAME,
    description: `${BRAND_STRAP} ${BRAND_DESCRIPTION} ${BRAND_MEANING}`,
    images: [absoluteUrl(brandAssets.heroPoster)],
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AU"
      className={`${bodyFont.variable} ${headingFont.variable} ${monoFont.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <ClerkProvider
          appearance={{
            variables: {
              colorPrimary: "#0A120F",
              colorText: "#0A120F",
              colorBackground: "#F5F1EA",
              borderRadius: "0.75rem",
              fontFamily: "var(--font-inter)",
            },
          }}
        >
          <div
            className="pointer-events-none fixed inset-0 z-50 opacity-[0.015]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
              backgroundRepeat: "repeat",
            }}
          />
          <div className="site-shell flex min-h-full flex-col">
            <SiteHeader />
            <main className="flex-1 pb-14">{children}</main>
            <SiteFooter />
          </div>
        </ClerkProvider>
      </body>
    </html>
  );
}
