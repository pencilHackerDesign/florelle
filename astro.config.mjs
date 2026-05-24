import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  site: 'https://florelle.vercel.app',
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'auto',
  },
});
