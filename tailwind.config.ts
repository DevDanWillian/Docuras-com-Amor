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

        'verde-claro': '#d9e3d6',
        'verde-escuro': '#3c401d',
        'marrom-escuro': '#774f43',
        'marrom-claro': '#94846e',
        'rosa-claro': '#ffdfff',
        'rosa-escuro': '#a55b6f',
      },
    },
  },
  plugins: [],
} satisfies Config;
