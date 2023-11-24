import { defineConfig, transformerDirectives, transformerVariantGroup } from 'unocss'

import uno from 'unocss/preset-uno'
import icons from 'unocss/preset-icons'

import { theme } from 'unocss/preset-mini'

export default defineConfig({
  presets: [
    // https://unocss.dev/presets/uno
    uno(),

    // https://unocss.dev/presets/icons
    icons(),
  ],

  transformers: [
    // https://unocss.dev/transformers/directives
    transformerDirectives(),

    // https://unocss.dev/transformers/variant-group
    transformerVariantGroup(),
  ],

  theme: {
    colors: {

    },
    fontFamily: {
      sans: `'Pretendard Std Variable','Pretendard Std','Pretendard',${theme.fontFamily.sans}`,
    },
  },

  shortcuts: [
    // wh-6 => w-6 h-6
    [/^(?:wh|hw)-(.+)$/, ([, v]) => `w-${v} h-${v}`],
  ],
})
