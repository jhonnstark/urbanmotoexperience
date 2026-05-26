import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

export function useScrollAnimation() {
  const animatedSections = ref<Record<string, boolean>>({})

  const observeSection = (sectionId: string) => {
    const target = document.getElementById(sectionId)
    if (target) {
      const { stop } = useIntersectionObserver(
        target,
        ([{ isIntersecting }]) => {
          if (isIntersecting) {
            animatedSections.value[sectionId] = true
            stop()
          }
        },
        {
          threshold: 0.1,
        }
      )
    }
  }

  return {
    animatedSections,
    observeSection,
  }
}
