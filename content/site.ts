import { BRAND_DESCRIPTION, BRAND_NAME, BRAND_STRAP } from "@/content/brand";
import { SILA_HEALTH_DISCLAIMER } from "@/content/sila";

export type NavItem = {
  label: string;
  href: string;
};

export const siteContent = {
  brand: {
    name: BRAND_NAME,
    strap: BRAND_STRAP,
    description: BRAND_DESCRIPTION,
  },
  nav: [
    { label: "About", href: "/about" },
    { label: "The Code", href: "/the-code" },
    { label: "Shop", href: "/shop" },
    { label: "Assessment", href: "/assessment" },
    { label: "Subscribe", href: "/subscribe" },
    { label: "Journal", href: "/blog" },
    { label: "Community", href: "/community" },
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/faq" },
  ] as NavItem[],
  ctas: {
    primary: { label: "Take the Assessment", href: "/assessment" },
    secondary: { label: "Shop Sila Focus", href: "/shop/sila-focus" },
  },
  legal: [
    { label: "Privacy", href: "/legal/privacy" },
    { label: "Terms", href: "/legal/terms" },
    { label: "Health Disclaimer", href: "/legal/disclaimer" },
  ] as NavItem[],
  social: [
    { label: "Instagram", href: "https://www.instagram.com" },
    { label: "TikTok", href: "https://www.tiktok.com" },
    { label: "YouTube", href: "https://www.youtube.com" },
  ],
  communityUrl: "https://thesilacode.skool.com",
  company: "The Sila Code Pty Ltd",
  abn: "[number]",
  healthDisclaimer: SILA_HEALTH_DISCLAIMER,
} as const;
