import { onMounted, onUnmounted } from 'vue'

export function useScrollAnimation() {
  let observer: IntersectionObserver | null = null

  const setupScrollAnimations = () => {
    observer?.disconnect()

    const animatedElements = document.querySelectorAll(
      [
        '.reveal',
        '.post',
        '.story',
        '.stop-card',
        '.feature-card',
        '.stat-card',
        '.gallery-item',
        '.route-stop',
        '.reveal-stop',
        '.map-wrap',
        '.reveal-map',
        '.map-point',
        '.route-map-item',
        '.route-path',
        '.about-image-wrap',
        '.benefit-bar',
        '.contact-card',
      ].join(', ')
    )

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer?.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.16,
        rootMargin: '0px 0px -12% 0px',
      }
    )

    animatedElements.forEach((el) => {
      observer?.observe(el)
    })
  }

  onMounted(() => {
    // Small delay to ensure DOM is ready
    setTimeout(setupScrollAnimations, 100)
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return {
    setupScrollAnimations,
  }
}
