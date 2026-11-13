// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

import { defaultLocale, locales, siteConfig } from '@/constants';

// https://astro.build/config
export default defineConfig({
  site: siteConfig.siteUrl,

  i18n: {
    defaultLocale,
    locales: [...locales],
    routing: {
      prefixDefaultLocale: false,
    },
  },

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
      assetsInlineLimit: (filePath) => (/\.(?:m?js)$/.test(filePath) ? false : undefined),
    },
    plugins: [tailwindcss()],
  },

  integrations: [
    sitemap({
      filter: (page) => !new URL(page).pathname.replace(/\/$/, '').endsWith('/email'),
      i18n: {
        defaultLocale,
        locales: Object.fromEntries(
          locales.map((locale) => [locale, siteConfig.locales[locale].lang]),
        ),
      },
    }),
  ],
});
