import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)", // Theme accent
        "background-light": "#FFFFFF",
        "background-dark": "#000000",
        "text-light": "#111111",
        "text-dark": "#f3f4f6",
        "subtle-light": "#e5e7eb", // grid lines
        "subtle-dark": "#262626", // grid lines dark
      },
      fontFamily: {
        display: ['"Space Grotesk"', "sans-serif"],
        body: ['"Inter"', "sans-serif"],
        anuphan: ['"Anuphan"', "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", '"Segoe UI"', "Roboto", '"Helvetica Neue"', "Arial", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        full: "9999px",
      },
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        springDown: {
          "0%": { transform: "translateY(-100%) scale(0.8)", opacity: "0" },
          "50%": { transform: "translateY(5%) scale(1.05)" },
          "70%": { transform: "translateY(-2%) scale(1)" },
          "100%": { transform: "translateY(0) scale(1)", opacity: "1" },
        },
      },
      animation: {
        "spin-slow": "rotate 120s linear infinite",
        float: "float 6s ease-in-out infinite",
        scroll: "scroll 20s linear infinite",
        "spring-down": "springDown 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards",
      },
    },
  },
  plugins: [],
};
export default config;
