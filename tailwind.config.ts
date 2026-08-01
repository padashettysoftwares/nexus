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
        }
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        marquee: 'marquee 50s linear infinite',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0,0,0,0.04)',
        'card': '0 4px 20px -2px rgba(0,0,0,0.03)',
      }
    },
  },
  plugins: [],
};
export default config;
