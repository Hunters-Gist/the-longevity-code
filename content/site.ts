import { BRAND_DESCRIPTION, BRAND_NAME, BRAND_STRAP } from "@/content/brand";

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
    { label: "Protocols", href: "/protocols" },
    { label: "Assessment", href: "/assessment" },
    { label: "Journal / Learn", href: "/learn" },
    { label: "Membership", href: "/membership" },
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/faq" },
  ] as NavItem[],
  ctas: {
    primary: { label: "Start Assessment", href: "/assessment" },
    secondary: { label: "View Membership", href: "/membership" },
  },
  legal: [
    { label: "Privacy", href: "/legal/privacy" },
    { label: "Terms", href: "/legal/terms" },
    { label: "Disclaimer", href: "/legal/disclaimer" },
    { label: "Medical Disclaimer", href: "/legal/medical-disclaimer" },
  ] as NavItem[],
  social: ["Instagram", "LinkedIn", "YouTube"],
} as const;
