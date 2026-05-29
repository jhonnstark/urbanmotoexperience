import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import './assets/animations.css'
import './styles/brand.css'

import App from './App.vue'
import router from './router'
import en from './locales/en.json'
import es from './locales/es.json'
import ru from './locales/ru.json'
import fr from './locales/fr.json'
import de from './locales/de.json'

const i18n = createI18n({
  legacy: false,
  locale: navigator.language.split('-')[0] || 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    es,
    ru,
    fr,
    de,
  },
})

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'urbanMoto',
    themes: {
      urbanMoto: {
        dark: false,
        colors: {
          background: '#F5F5F2',
          surface: '#FFFFFF',
          primary: '#7FB239',
          secondary: '#1B2B17',
          green: '#7FB239',
          greenDark: '#4F7A28',
          greenDeep: '#1B2B17',
          navy: '#081A2C',
          charcoal: '#111111',
          jacaranda: '#6E4AA5',
          gold: '#C9A23A',
          error: '#FF5252',
          warning: '#FB8C00',
          info: '#2196F3',
          success: '#7FB239',
        },
      },
    },
  },
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(vuetify)

app.mount('#app')
