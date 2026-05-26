import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'

import App from './App.vue'
import router from './router'
import en from './locales/en.json'
import es from './locales/es.json'
import ru from './locales/ru.json'
import fr from './locales/fr.json'
import de from './locales/de.json'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
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
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#1976D2',
          secondary: '#424242',
          accent: '#82B1FF',
          error: '#FF5252',
          warning: '#FB8C00',
          info: '#2196F3',
          success: '#4CAF50',
          green: '#8cc63f',
          'dark-green': '#06240f',
          'text-dark': '#0f1f2b',
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
