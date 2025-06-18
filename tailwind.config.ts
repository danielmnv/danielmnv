import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / 1)',
        secondary: 'rgb(var(--color-secondary) / 1)',
        accent: 'rgb(var(--color-accent) / 1)',
        background: 'rgb(var(--color-background) / 1)',
        foreground: 'rgb(var(--color-foreground) / 1)',
        neutral: {
          50: 'rgb(var(--color-neutral-50) / 1)',
          100: 'rgb(var(--color-neutral-100) / 1)',
          200: 'rgb(var(--color-neutral-200) / 1)',
          300: 'rgb(var(--color-neutral-300) / 1)',
          400: 'rgb(var(--color-neutral-400) / 1)',
          500: 'rgb(var(--color-neutral-500) / 1)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config; 