import { VueQueryPlugin } from '@tanstack/vue-query'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

import '@unocss/reset/tailwind-compat.css'
import 'virtual:uno.css'
import './assets/global.css'
import App from './App.vue'
import router from './router'

const pinia = createPinia()

const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(VueQueryPlugin)
app.mount('#app')
