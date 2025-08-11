import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        primary: "var(--primary)",
        "primary-dark": "var(--primary-dark)",
        text: "var(--text)",
        "text-muted": "var(--text-muted)",
        line: "var(--line)",
        accent: "var(--accent)",
        success: "var(--success)",
        warning: "var(--warning)",
        dark: "var(--dark)",
        "dark-surface": "var(--dark-surface)"
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        pill: "var(--radius-pill)"
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        glow: "var(--shadow-glow)"
      },
      fontFamily: { 
        sans: ["Inter", "ui-sans-serif", "system-ui"] 
      },
      maxWidth: {
        'container': 'var(--container-max)'
      }
    }
  },
  plugins: []
};

export default config;