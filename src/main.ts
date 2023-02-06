import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from "vue-router";
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import './style.css'
import App from './App.vue'
import { routes } from "./router";

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const vuetify = createVuetify({
    components,
    directives,
})

createApp(App).use(vuetify).use(router).mount('#app')
