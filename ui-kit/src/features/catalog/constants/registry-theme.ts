export const LEGUAN_FOUNDATION_CSS_VARS = {
  theme: {
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
  "@utility text-label": {
    "font-size": "10px",
    "font-weight": "600",
    "text-transform": "uppercase",
    "letter-spacing": "0.14em",
    "color": "var(--muted-foreground)",
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
