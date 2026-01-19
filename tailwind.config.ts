import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--bg-primary)",
        secondary: "var(--bg-secondary)",
        foreground: "var(--text-primary)",
        muted: "var(--text-muted)",
        accent: {
          orange: "var(--accent-orange)",
          lime: "var(--accent-lime)",
        },
        "card-white": "var(--card-white)",
        "border-soft": "var(--border-soft)",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        heading: ["var(--font-inter-tight)"],
      },
      borderRadius: {
        '2xl': '28px',
      }
    },
  },
  plugins: [],
};
export default config;
