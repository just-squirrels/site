import { defineConfig } from 'astro/config';

// https://astro.build/config
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), tailwind()],
  output: "static",
  build: {
    assets: "assets"
  }
});