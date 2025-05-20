// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';
import deno from '@deno/astro-adapter';

// https://astro.build/config
export default defineConfig({
  adapter: deno(),
  output: 'server',
  image: {
    service: passthroughImageService()
  },
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
