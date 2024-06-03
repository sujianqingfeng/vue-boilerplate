import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import VueDevTools from 'vite-plugin-vue-devtools'
import TsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    VueJsx(),
    UnoCSS(),
    Components({
      extensions: ['vue', 'jsx'],
      dts: './types/components.d.ts',
      resolvers: [ElementPlusResolver()]
    }),
    AutoImport({
      dts: './types/auto-imports.d.ts',
      imports: ['vue', 'vue-router', '@vueuse/core', 'pinia'],
      eslintrc: {
        enabled: true
      },
      dirs: ['./src/composables'],
      resolvers: [ElementPlusResolver()]
    }),
    VueDevTools(),
    TsconfigPaths()
  ]
})
