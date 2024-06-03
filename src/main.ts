import { createPinia } from 'pinia'
import { createApp } from 'vue'

import '@unocss/reset/tailwind-compat.css'
import 'virtual:uno.css'
import './assets/global.css'
import App from './App.vue'

const pinia = createPinia()

createApp(App).use(pinia).mount('#app')
