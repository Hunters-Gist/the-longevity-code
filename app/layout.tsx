import type { Metadata } from "next";
import { DM_Serif_Display, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { BRAND_DESCRIPTION, BRAND_MEANING, BRAND_NAME } from "@/content/brand";

const bodyFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const headingFont = DM_Serif_Display({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: "400",
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
  metadataBase: new URL("https://www.thesilacode.com"),
  description: `${BRAND_DESCRIPTION} ${BRAND_MEANING}`,
  openGraph: {
    title: BRAND_NAME,
    description: `${BRAND_DESCRIPTION} ${BRAND_MEANING}`,
    siteName: BRAND_NAME,
    type: "website",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: BRAND_NAME,
    description: `${BRAND_DESCRIPTION} ${BRAND_MEANING}`,
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
    apple: [{ url: "/icon.svg" }],
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
      </body>
    </html>
  );
}
