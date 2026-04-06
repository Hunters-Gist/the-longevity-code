export type NavItem = {
  label: string;
  href: string;
};

export const siteContent = {
  brand: {
    name: "The Longevity Code",
    strap: "Long-horizon vitality design",
    description:
      "Premium protocols and education for adults who want better recovery, clearer thinking, and a longer health horizon.",
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
