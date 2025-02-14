
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
        border: "#A3B18A",
        input: "#A3B18A",
        ring: "#344E41",
        background: "#F5F5F5",
        foreground: "#344E41",
        primary: {
          DEFAULT: "#344E41",
          foreground: "#F5F5F5",
        },
        secondary: {
          DEFAULT: "#DAD7CD",
          foreground: "#344E41",
        },
        destructive: {
          DEFAULT: "#588157",
          foreground: "#F5F5F5",
        },
        muted: {
          DEFAULT: "#DAD7CD",
          foreground: "#344E41",
        },
        accent: {
          DEFAULT: "#A3B18A",
          foreground: "#344E41",
        },
        popover: {
          DEFAULT: "#F5F5F5",
          foreground: "#344E41",
        },
        card: {
          DEFAULT: "#F5F5F5",
          foreground: "#344E41",
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
