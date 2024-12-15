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
        primary: {
          veryDarkMagenta: "hsl(300, 43%, 22%)",
          softPink: "hsl(333, 80%, 67%)",
        },
        secondary: {
          darkGrayishMagenta: "hsl(303, 10%, 53%)",
          lightGrayishMagenta: "hsl(300, 24%, 96%)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
