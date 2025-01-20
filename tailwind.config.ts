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
        "neutral-1": "var(--neutral-1)",
        "neutral-1-overlay": "var(--neutral_1-overlay)",
        "neutral-2": "var(--neutral-2)",
        "neutral-3": "var(--neutral-3)",
        "neutral-4": "var(--neutral-4)",
        "pine-1": "var(--pine-1)",
        "pine-2": "var(--pine-2)",
        "pine-3": "var(--pine-3)",
        "pine-4": "var(--pine-4)",
        "pine-5": "var(--pine-5)",
        "plum-1": "var(--plum-1)",
        "plum-2": "var(--plum-2)",
        "plum-3": "var(--plum-3)",
        "gold-0": "var(--gold-0)",
        "gold-1": "var(--gold-1)",
        "gold-2": "var(--gold-2)",
        "gold-3": "var(--gold-3)",
        "gold-4": "var(--gold-4)",
        "gold-5": "var(--gold-5)",
        "khaki-0": "var(--khaki-0)",
        "khaki-1": "var(--khaki-1)",
        "type-1": "var(--type-1)",
        "type-2": "var(--type-2)",
        "type-3": "var(--type-3)",
        "type-link": "var(--type-link)",
        "type-alt": "var(--type-alt)",
      },
    },
  },
  plugins: [],
  darkMode: 'selector'
} satisfies Config;
