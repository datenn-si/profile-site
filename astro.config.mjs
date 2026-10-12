// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

import { siteConfig } from '@/constants';

// https://astro.build/config
export default defineConfig({
  site: siteConfig.siteUrl,

  adapter: cloudflare(),

  fonts: [
    {
      cssVariable: '--font-noto-sans-jp',
      name: 'Noto Sans JP',
      provider: fontProviders.google(),
      weights: ['300 700'],
      subsets: ['latin', 'japanese'],
    },
  ],

  vite: {
    build: {
      assetsInlineLimit: 1,
    },
    plugins: [tailwindcss()],
  },

  integrations: [
    sitemap({ filter: (page) => page !== new URL('/email/', siteConfig.siteUrl).toString() }),
  ],
});
