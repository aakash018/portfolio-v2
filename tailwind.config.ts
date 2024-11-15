import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xl: "32px",
        l: "24px",
        md: "16px",
        sm: "14px",
        vsm: "12px"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        foregroundMute: "#a7aabd",
        highlight: "#54D2C1"
      },
      fontFamily: {
        lato: ["var(--font-lato)"]
      }
    },
  },
  plugins: [],
} satisfies Config;
