import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

export default defineConfig({
  integrations: [tailwind({
    applyBaseStyles: false,
  }), react()],
  site: 'https://devdimov.github.io',
  base: '/portfolio',
});