// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  vite: {
    // @ts-expect-error - Tailwind Vite plugin type compatibility issue
    plugins: [tailwindcss()],
  },

  integrations: [react()],
  adapter: vercel(),
});