import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const isDarkMode = ref(false)
  const appVersion = ref('1.0.0')

  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value
  }

  return {
    isDarkMode,
    appVersion,
    toggleDarkMode,
  }
})
