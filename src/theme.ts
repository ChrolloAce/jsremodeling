// Central tokens (also duplicated as CSS vars for Tailwind use)
export const theme = {
  colors: {
    bg: "#FFFFFF",          // white page background
    surface: "#F8FAFC",     // light gray card/background
    primary: "#EA580C",     // vibrant orange
    primaryDark: "#C2410C", // darker orange
    text: "#1E293B",        // dark text
    textMuted: "#64748B",   // muted gray text
    line: "#E2E8F0",        // light gray borders
    accent: "#16A34A",      // green accent
    success: "#16A34A",     // green
    warning: "#F59E0B",
    dark: "#0F172A",        // dark header/footer
    darkSurface: "#1E293B", // dark surface
  },
  font: {
    family: `'Inter', ui-sans-serif, system-ui`,
    scale: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem"
    }
  },
  radius: {
    sm: "8px",
    md: "14px",
    lg: "22px",
    pill: "999px"
  },
  shadow: {
    sm: "0 1px 2px rgba(0,0,0,.25)",
    md: "0 6px 20px rgba(0,0,0,.35)",
    glow: "0 0 0 4px rgba(255,122,26,.15)"
  },
  spacing: {
    // 4px grid
    1: "4px", 2: "8px", 3: "12px", 4: "16px", 6: "24px", 8: "32px",
    10: "40px", 12: "48px", 16: "64px", 20: "80px", 24: "96px", 32: "128px"
  },
  container: {
    max: "1200px",
    gutter: "24px"
  }
} as const;

export type Theme = typeof theme;