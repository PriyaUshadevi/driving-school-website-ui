// @ts-check

import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sourceInfoIntegration from './src/plugins/source-info-integration.mjs';
import sitemap from '@astrojs/sitemap';
import b12Context from './src/b12Context.json';

// Enable source info in build when BUILD_DEV environment variable is set
const enableSourceInfo = process.env.BUILD_DEV === 'true';
const { website_url = null } = b12Context;

// https://astro.build/config
const integrations = [
  react(),
  sourceInfoIntegration({
    enabled: enableSourceInfo,
    hideToolbar: true
  })
];

if (website_url) {
  integrations.push(sitemap({ lastmod: new Date() }));
}

export default defineConfig({
  integrations: [
    ...integrations
  ],
  vite: {
    plugins: [/** @type {any} */ (tailwindcss())],
  },
  // Disable toolbar in dev mode when using build-dev
  devToolbar: {
    enabled: !enableSourceInfo
  },
  site: website_url || undefined
});
