
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Playfair Display", "serif"],
      },
      colors: {
        border: "#0096C7",
        input: "#0096C7",
        ring: "#03045E",
        background: "#F5FAFF",
        foreground: "#03045E",
        primary: {
          DEFAULT: "#03045E",
          foreground: "#F5FAFF",
        },
        secondary: {
          DEFAULT: "#48CAE4",
          foreground: "#03045E",
        },
        destructive: {
          DEFAULT: "#0096C7",
          foreground: "#F5FAFF",
        },
        muted: {
          DEFAULT: "#CAF0F8",
          foreground: "#03045E",
        },
        accent: {
          DEFAULT: "#00B4D8",
          foreground: "#03045E",
        },
        popover: {
          DEFAULT: "#F5FAFF",
          foreground: "#03045E",
        },
        card: {
          DEFAULT: "#F5FAFF",
          foreground: "#03045E",
        },
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
