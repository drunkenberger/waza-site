import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "waza-black": "#0D0D0D",
        "waza-energy": "#FF2E63",
        "waza-code": "#08D9D6",
        "waza-craft": "#252A34",
        "waza-play": "#F9F7F7",
        "waza-future": "#702DFF",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "vhs-r": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(2px)" }
        },
        "vhs-g": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-2px)" }
        },
        "vhs-b": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(1px)" }
        },
        "vhs-noise": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.6" }
        },
        "vhs-scan": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "vhs-r": "vhs-r 0.5s infinite",
        "vhs-g": "vhs-g 0.5s infinite",
        "vhs-b": "vhs-b 0.5s infinite",
        "vhs-noise": "vhs-noise 0.2s infinite",
        "vhs-scan": "vhs-scan 8s linear infinite"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
