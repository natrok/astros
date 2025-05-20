// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  integrations: [
    tailwind(),
    alpinejs()
  ],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'fr', 'en'],
    routing: {
      prefixDefaultLocale: false,      
    },
  },
});