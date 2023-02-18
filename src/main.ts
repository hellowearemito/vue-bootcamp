import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from "vue-router";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";
import {default as usePersistedState} from 'pinia-plugin-persistedstate'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import './style.css'
import App from './App.vue'
import { routes } from "./router";
import {messages} from "./i18n/messages";

const pinia = createPinia()
pinia.use(usePersistedState)

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const vuetify = createVuetify({
    components,
    directives,
})

const i18n = createI18n({
  locale: 'en',
  messages
})

createApp(App)
  .use(vuetify)
  .use(pinia)
  .use(router)
  .use(i18n)
  .mount('#app')
