import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import image from "@astrojs/image"

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap(), react(), image()]
});
