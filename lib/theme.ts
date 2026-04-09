export const brandTheme = {
  colors: {
    obsidian: "#2D3A31",
    deepCharcoal: "#243029",
    graphite: "#5F6F5F",
    stone: "#E6E2DA",
    mist: "#F2F0EB",
    boneWhite: "#FFFDF9",
    softSageGlow: "#8C9A84",
    mutedTeal: "#8C9A84",
    paleGold: "#DCCFC2",
  },
  radii: {
    card: "24px",
    button: "999px",
  },
  spacing: {
    sectionY: "7rem",
    sectionYMobile: "4.5rem",
  },
} as const;

export type BrandTheme = typeof brandTheme;
