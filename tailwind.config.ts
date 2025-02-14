
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
        border: {
          DEFAULT: "#333333",
          dark: "#444444",
        },
        input: {
          DEFAULT: "#333333",
          dark: "#444444",
        },
        ring: "#000000",
        background: {
          DEFAULT: "#FFFFFF",
          dark: "#121212",
        },
        foreground: {
          DEFAULT: "#000000",
          dark: "#FFFFFF",
        },
        primary: {
          DEFAULT: "#000000",
          foreground: "#FFFFFF",
          dark: "#FFFFFF",
          "dark-foreground": "#000000",
        },
        secondary: {
          DEFAULT: "#F1F1F1",
          foreground: "#000000",
          dark: "#1A1A1A",
          "dark-foreground": "#FFFFFF",
        },
        muted: {
          DEFAULT: "#F3F3F3",
          foreground: "#555555",
          dark: "#282828",
          "dark-foreground": "#A0A0A0",
        },
        accent: {
          DEFAULT: "#888888",
          foreground: "#FFFFFF",
          dark: "#666666",
          "dark-foreground": "#FFFFFF",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#000000",
          dark: "#1A1A1A",
          "dark-foreground": "#FFFFFF",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#000000",
          dark: "#1A1A1A",
          "dark-foreground": "#FFFFFF",
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
