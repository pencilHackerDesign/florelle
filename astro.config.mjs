import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://florelle.vercel.app',
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'auto',
  },
});
