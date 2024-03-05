import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://master--stupendous-cheesecake-49c799.netlify.app",
  integrations: [preact()]
});