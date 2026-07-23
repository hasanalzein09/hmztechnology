// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import UnoCSS from 'unocss/astro';

import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';
// For VM deployment, use: import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.hmz.technology',
  output: 'static',
  adapter: cloudflare(),
  integrations: [
    react(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          ar: 'ar',
          de: 'de',
          fr: 'fr',
          it: 'it',
          hi: 'hi',
          ms: 'ms'
        }
      },
      // changefreq/priority omitted — ignored by Google (2026 best practice).
      // lastmod reflects build time: truthful for a static site redeployed on content change.
      lastmod: new Date(),
    }),
    UnoCSS({
      injectReset: true,
    }),
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar', 'de', 'fr', 'it', 'hi', 'ms'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: true
    }
  },
});