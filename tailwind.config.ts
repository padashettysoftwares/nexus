import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#1A1A2E",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--royal-blue)",
          hover: "var(--royal-blue-hover)",
        },
        secondary: {
          DEFAULT: "var(--muted-gold)",
          hover: "var(--muted-gold-hover)",
        },
        surface: {
          DEFAULT: "var(--white)",
          alt: "#EFF6FF",
        },
        border: "#BFDBFE",
        text: {
          primary: "var(--charcoal)",
          secondary: "var(--soft-gray)",
        },

        /* --------------------------------------------------------------- *
         * Marketing surface (homepage, about, nav, footer).
         * A neutral ink scale carrying one blue accent that matches the
         * royal blue already used on the service pages, so the homepage
         * hands off to them without a colour jump.
         * --------------------------------------------------------------- */
        ink: {
          DEFAULT: "#0B1220",
          950: "#070C16",
          900: "#0B1220",
          800: "#131C2E",
          700: "#1F2A3F",
          600: "#3A4759",
          500: "#5C6A7D",
          400: "#8593A5",
          300: "#B3BDC9",
          200: "#D8DEE6",
          100: "#EDF0F4",
          50: "#F7F8FA",
        },
        accent: {
          DEFAULT: "#1E3A8A",
          hover: "#17307A",
          soft: "#EEF2FB",
          line: "#C9D5EE",
        },
        /**
         * Brass. Carries the accent on the dark bands, where the royal blue
         * goes muddy. Derived from the `--muted-gold` already in the palette,
         * so it reads as the same brand rather than a new colour.
         */
        brass: {
          DEFAULT: "#C8A96A",
          bright: "#E0C68C",
          deep: "#A98B4E",
          wash: "rgba(200,169,106,0.10)",
          line: "rgba(200,169,106,0.32)",
        },
        /** Hairline rule used instead of shadows across the marketing pages. */
        rule: {
          DEFAULT: "#E4E7EC",
          strong: "#D3D8E0",
          invert: "rgba(255,255,255,0.12)",
          faint: "rgba(255,255,255,0.07)",
        },
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "rise-in": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "draw-rule": {
          from: { transform: "scaleX(0)" },
          to: { transform: "scaleX(1)" },
        },
      },
      animation: {
        marquee: "marquee 50s linear infinite",
        "rise-in": "rise-in 0.55s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fade-in 0.4s ease-out both",
        "draw-rule": "draw-rule 0.9s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
      backgroundImage: {
        /** Fine engineering grid used to give the dark bands surface texture. */
        "grid-fine":
          "linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)",
        "grid-fine-light":
          "linear-gradient(to right, rgba(11,18,32,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,18,32,0.045) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "64px 64px",
        "grid-sm": "32px 32px",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-plus-jakarta)", "var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.14em",
      },
      maxWidth: {
        shell: "1200px",
        prose: "68ch",
      },
      boxShadow: {
        soft: "0 10px 40px -10px rgba(0,0,0,0.04)",
        card: "0 4px 20px -2px rgba(0,0,0,0.03)",
        /** The only elevation used on the marketing pages: menus and overlays. */
        menu: "0 16px 48px -12px rgba(11,18,32,0.18)",
      },
    },
  },
  plugins: [],
};
export default config;
