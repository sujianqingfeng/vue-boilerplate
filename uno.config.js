import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'
import presetIcons from '@unocss/preset-icons'
import transformerDirectives from '@unocss/transformer-directives'
import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  transformers: [
    transformerDirectives({
      applyVariable: ['--at-apply']
    })
  ],
  presets: [
    presetUno(),
    presetIcons({
      collections: {
        cp: FileSystemIconLoader('./src/assets/icons/pure', (svg) => {
          const fill = /fill=".+"/g
          if (fill.test(svg)) {
            svg = svg.replace(fill, '')
          }
          return svg.replace(/^<svg /, '<svg fill="currentColor" ')
        }),
        cm: FileSystemIconLoader('./src/assets/icons/multicolor')
      }
    })
  ],
  rules: []
})
