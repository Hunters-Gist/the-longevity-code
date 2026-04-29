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
    { label: "The Code", href: "/the-code" },
    { label: "Programs", href: "/subscribe" },
    { label: "Retreats", href: "/#retreats" },
    { label: "Products", href: "/shop" },
    { label: "Journal", href: "/blog" },
    { label: "About", href: "/about" },
  ] as NavItem[],
  footerNav: [
    { label: "The Code", href: "/the-code" },
    { label: "Programs", href: "/subscribe" },
    { label: "Retreats", href: "/#retreats" },
    { label: "Products", href: "/shop" },
    { label: "Assessment", href: "/assessment" },
    { label: "Journal", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Community", href: "/community" },
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/faq" },
  ] as NavItem[],
  ctas: {
    primary: { label: "Join the Waitlist", href: "/#waitlist" },
    secondary: { label: "Take the Assessment", href: "/assessment" },
    tertiary: { label: "Explore Products", href: "/shop" },
  },
  legal: [
    { label: "Privacy", href: "/legal/privacy" },
    { label: "Terms", href: "/legal/terms" },
    { label: "Health Disclaimer", href: "/legal/disclaimer" },
    { label: "Refunds", href: "/legal/refund" },
    { label: "Shipping", href: "/legal/shipping" },
    { label: "Subscription Terms", href: "/legal/subscription" },
    { label: "Research Disclaimer", href: "/legal/research" },
    { label: "Assessment Disclaimer", href: "/legal/assessment" },
    { label: "Support Policy", href: "/legal/support" },
  ] as NavItem[],
  social: [
    { label: "Instagram", href: "https://www.instagram.com/thesilacode" },
    { label: "TikTok", href: "https://www.tiktok.com/@thesilacode" },
    {
      label: "YouTube",
      href: "https://www.youtube.com/channel/UCWcHwTJKwtU8VqAK9cI0ctg",
    },
  ],
  communityUrl: "",
  company: "The Sila Code Pty Ltd",
  abn: "58 598 574 674",
  healthDisclaimer: SILA_HEALTH_DISCLAIMER,
} as const;
