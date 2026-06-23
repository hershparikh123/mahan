import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1200px" },
    },
    extend: {
      colors: {
        // Palette: powder blue + white, with butter-yellow accents.
        // (token names kept stable across the codebase; values are blue/butter now)
        cream: "#F5FAFE", // powdery off-white — app base
        sand: "#E6F1F9", // soft powder-blue tint for alternating sections
        ink: {
          DEFAULT: "#16415A", // deep slate-blue — headings & darkest blocks
          soft: "#265A76",
        },
        petrol: {
          DEFAULT: "#2A6A92", // confident powder/ocean blue (white-text safe)
          light: "#6AA6CB",
        },
        copper: {
          // "butter" accent — name retained to avoid churn
          DEFAULT: "#F1CE6A",
          light: "#F8DE92",
          dark: "#E2B441",
        },
        ember: "#ECC257", // slightly deeper butter for use on dark backgrounds
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "1rem",
        xl: "1.5rem",
        "2xl": "2rem",
      },
      keyframes: {
        flow: {
          "0%": { strokeDashoffset: "0" },
          "100%": { strokeDashoffset: "-40" },
        },
        shimmer: {
          "0%,100%": { transform: "translateY(0) scaleY(1)", opacity: "0.35" },
          "50%": { transform: "translateY(-6px) scaleY(1.08)", opacity: "0.6" },
        },
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        flow: "flow 1.5s linear infinite",
        shimmer: "shimmer 6s ease-in-out infinite",
        floaty: "floaty 7s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
