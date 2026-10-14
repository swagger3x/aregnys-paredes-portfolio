// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Canonical URLs, Open Graph images, the sitemap, and robots.txt are all built from this
// value. Keep it in sync with the custom domain in wrangler.jsonc.
const SITE_URL = 'https://aregnys-paredes.createlogs.com';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  // Listen on all addresses (IPv4 + IPv6) for `dev` and `preview`. Without this the
  // server binds only to [::1] on this machine, so http://127.0.0.1 / localhost over IPv4 fail.
  server: {
    host: true,
    port: 4321,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
});
