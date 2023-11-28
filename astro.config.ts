import { defineConfig } from 'astro/config'
import unocss from 'unocss/astro'

import solidJs from '@astrojs/solid-js'

// https://astro.build/config
export default defineConfig({
  integrations: [
  // https://unocss.dev/integrations/astro
    unocss({
      injectReset: '@unocss/reset/tailwind-compat.css',
    }),
    solidJs(),
  ],

  site: 'https://e3stpavel.github.io',
  base: '/learngraphy-landing',
})
