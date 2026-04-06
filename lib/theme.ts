export const brandTheme = {
  colors: {
    obsidian: "#2D3A31",
    deepCharcoal: "#37453C",
    graphite: "#45544B",
    stone: "#E6E2DA",
    mist: "#F2EFE8",
    boneWhite: "#F9F8F4",
    softSageGlow: "#8C9A84",
    mutedTeal: "#88A39A",
    paleGold: "#B8AA8C",
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
