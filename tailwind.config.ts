import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        primary: "var(--primary)",
        "primary-lighter": "var(--primary-lighter)",
        "primary-foreground": "var(--primary-foreground)",

        secondary: "var(--secondary)",
        "secondary-lighter": "var(--secondary-lighter)",
        "secondary-foreground": "var(--secondary-foreground)",

        accent: "var(--accent)",
        "accent-lighter": "var(--accent-lighter)",
        "accent-foreground": "var(--accent-foreground)",

        delete: "var(--delete)",
        "delete-lighter": "var(--delete-lighter)",
        "delete-foreground": "var(--delete-foreground)",
      },
      fontFamily: {
        title: "var(--title)",
        content: "var(--content)",
      },
    },
  },
  plugins: [require("daisyui")],
} satisfies Config;
