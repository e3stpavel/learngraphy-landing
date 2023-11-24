import { defineConfig } from 'astro/config'

import unocss from 'unocss/astro'

// https://astro.build/config
export default defineConfig({
  integrations: [
    // https://unocss.dev/integrations/astro
    unocss({
      injectReset: '@unocss/reset/tailwind-compat.css',
    }),
  ],
})
