// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
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
    plugins: [tailwindcss()],
  },
});
