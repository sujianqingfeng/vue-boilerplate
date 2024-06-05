import path from 'path'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'
import VueDevTools from 'vite-plugin-vue-devtools'

const __dirname = path.dirname(new URL(import.meta.url).pathname)

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src')
    }
  },
  plugins: [
    VueRouter({
      dts: './types/typed-router.d.ts',
      extendRoute(route) {
        if (route.path === 'users') {
          route.meta = {
            title: 'Users',
            icon: 'User'
          }
        }
      }
    }),
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
      imports: ['vue', '@vueuse/core', 'pinia', VueRouterAutoImports],
      eslintrc: {
        enabled: true
      },
      dirs: ['./src/composables'],
      resolvers: [ElementPlusResolver()]
    }),
    VueDevTools()
  ]
})
