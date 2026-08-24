export const LEGUAN_FOUNDATION_CSS_VARS = {
  theme: {
    "type-title": "1.125rem",
    "type-heading": "1rem",
    "type-heading-lg": "1.25rem",
    "type-heading-xl": "1.5rem",
    "type-display": "1.5rem",
    "type-display-lg": "1.875rem",
    "type-body": "0.875rem",
    "type-lede": "1rem",
    "type-label": "0.75rem",
    "type-caption": "0.75rem",
    "leading-tight": "1.2",
    "leading-snug": "1.35",
    "leading-body": "1.5",
    "leading-relaxed": "1.625",
    "radius-squircle-sm": "10px",
    "radius-squircle-md": "14px",
    "radius-squircle-lg": "20px",
    "radius-squircle-xl": "28px",
    "radius-squircle-card": "32px",
    "radius-squircle-inner": "24px",
    "animate-progress-slide": "progress-slide 1.4s ease-in-out infinite",
    "animate-skeleton-shimmer": "skeleton-shimmer 3s ease-in-out infinite",
  },
  light: {
    "chart-negative": "#737373",
  },
  dark: {
    "chart-negative": "#a3a3a3",
  },
}

export const LEGUAN_FOUNDATION_CSS = {
  "@keyframes progress-slide": {
    "0%": { transform: "translateX(-100%)" },
    "100%": { transform: "translateX(350%)" },
  },
  "@keyframes skeleton-shimmer": {
    "0%": { "background-position": "200% 0" },
    "100%": { "background-position": "-200% 0" },
  },
  "@utility rounded-squircle-sm": {
    "border-radius": "var(--radius-squircle-sm)",
    "corner-shape": "squircle",
  },
  "@utility rounded-squircle-md": {
    "border-radius": "var(--radius-squircle-md)",
    "corner-shape": "squircle",
  },
  "@utility rounded-squircle-lg": {
    "border-radius": "var(--radius-squircle-lg)",
    "corner-shape": "squircle",
  },
  "@utility rounded-squircle-xl": {
    "border-radius": "var(--radius-squircle-xl)",
    "corner-shape": "squircle",
  },
  "@utility rounded-squircle-card": {
    "border-radius": "var(--radius-squircle-card)",
    "corner-shape": "squircle",
  },
  "@utility rounded-squircle-inner": {
    "border-radius": "var(--radius-squircle-inner)",
    "corner-shape": "squircle",
  },
  "@utility border-inset": {
    "box-shadow":
      "inset 0 0 0 1px rgb(0 0 0 / 6%), inset 0 1px 0 0 rgb(255 255 255 / 40%)",
  },
  "@utility border-inset-dark": {
    "box-shadow":
      "inset 0 0 0 1px rgb(255 255 255 / 8%), inset 0 1px 0 0 rgb(255 255 255 / 6%), inset 0 -1px 0 0 rgb(0 0 0 / 30%)",
  },
  "@utility text-title": {
    "font-family": "var(--font-heading)",
    "font-size": "var(--type-title)",
    "font-weight": "600",
    "line-height": "var(--leading-tight)",
    "letter-spacing": "-0.01em",
  },
  "@utility text-heading": {
    "font-family": "var(--font-heading)",
    "font-size": "var(--type-heading)",
    "font-weight": "600",
    "line-height": "var(--leading-snug)",
    "letter-spacing": "-0.01em",
  },
  "@utility text-heading-lg": {
    "font-family": "var(--font-heading)",
    "font-size": "var(--type-heading-lg)",
    "font-weight": "600",
    "line-height": "var(--leading-tight)",
    "letter-spacing": "-0.015em",
  },
  "@utility text-heading-xl": {
    "font-family": "var(--font-heading)",
    "font-size": "var(--type-heading-xl)",
    "font-weight": "700",
    "line-height": "var(--leading-tight)",
    "letter-spacing": "-0.02em",
  },
  "@utility text-stat-value": {
    "font-family": "var(--font-heading)",
    "font-size": "var(--type-display)",
    "font-weight": "700",
    "line-height": "var(--leading-tight)",
    "letter-spacing": "-0.02em",
    "font-variant-numeric": "tabular-nums",
  },
  "@utility text-body": {
    "font-size": "var(--type-body)",
    "line-height": "var(--leading-body)",
  },
  "@utility text-lede": {
    "font-size": "var(--type-lede)",
    "line-height": "var(--leading-relaxed)",
  },
  "@utility text-label": {
    "font-size": "var(--type-label)",
    "font-weight": "500",
    "line-height": "var(--leading-tight)",
    "color": "var(--muted-foreground)",
  },
  "@utility text-caption": {
    "font-size": "var(--type-caption)",
    "line-height": "var(--leading-snug)",
    "color": "var(--muted-foreground)",
  },
  "@utility text-description": {
    "font-size": "var(--type-body)",
    "line-height": "var(--leading-body)",
    "color": "var(--muted-foreground)",
  },
  "@utility text-numeric": {
    "font-variant-numeric": "tabular-nums",
  },
  "@layer utilities": {
    ".surface-panel": {
      "@apply rounded-squircle-xl border bg-card": {},
    },
    ".dark .surface-panel": {
      "@apply border-inset-dark": {},
    },
    ":not(.dark) .surface-panel": {
      "@apply border-inset": {},
    },
  },
}

export const LEGUAN_FONTS_CSS_VARS = {
  theme: {
    "font-sans": "var(--font-inter), Inter, sans-serif",
    "font-mono": "var(--font-geist-mono)",
    "font-heading": "var(--font-open-runde), sans-serif",
  },
}

export const LEGUAN_FONTS_CSS = {
  "@layer base": {
    html: {
      "font-family": "var(--font-sans)",
    },
  },
}
