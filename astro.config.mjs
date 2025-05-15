// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';
import deno from '@deno/astro-adapter';

// https://astro.build/config
export default defineConfig({
  adapter: deno(),
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
