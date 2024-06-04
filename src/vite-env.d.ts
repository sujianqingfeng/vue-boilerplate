/// <reference types="vite/client" />
/// <reference types="unplugin-vue-router/client" />

import 'vue-router'

// To ensure it is treated as a module, add at least one `export` statement
export {}

declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    icon?: string
  }
}
