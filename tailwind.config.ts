import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0a",
        surface: "#121212",
        lime: {
          400: "#d4ff6e",
          500: "#b8ff3c",
          600: "#9ae01f",
        },
        violet: {
          500: "#8b5cf6",
          600: "#7c3aed",
        },
        electric: {
          500: "#3cc8ff",
        },
        magenta: {
          400: "#ff5fd1",
          500: "#ff2ec4",
          600: "#e014a8",
        },
        cream: {
          DEFAULT: "#f2e9d8",
          dark: "#e5d9bf",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-sans)"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(10,10,10,0) 0%, #0a0a0a 100%)",
        "glow-lime":
          "radial-gradient(circle at 30% 30%, rgba(184,255,60,0.25), transparent 60%)",
        "glow-violet":
          "radial-gradient(circle at 70% 20%, rgba(139,92,246,0.3), transparent 60%)",
      },
      boxShadow: {
        neon: "0 0 20px rgba(184,255,60,0.5), 0 0 60px rgba(184,255,60,0.15)",
        "neon-violet":
          "0 0 20px rgba(139,92,246,0.45), 0 0 60px rgba(139,92,246,0.15)",
        "neon-magenta":
          "0 0 20px rgba(255,46,196,0.45), 0 0 60px rgba(255,46,196,0.15)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
