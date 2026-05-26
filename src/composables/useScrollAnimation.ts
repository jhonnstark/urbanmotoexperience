import { onMounted, onUnmounted } from 'vue'

export function useScrollAnimation() {
  let observer: IntersectionObserver | null = null

  const setupScrollAnimations = () => {
    // Find all elements with animation classes
    const animatedElements = document.querySelectorAll('.reveal, .s1, .s2, .s3, .s4, .s5, .post, .story, .stop-card, .feature-card, .stat-card, .gallery-item')
    
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add visible class to trigger animation
            entry.target.classList.add('is-visible')
          } else {
            // Remove visible class to reset animation when scrolling away
            entry.target.classList.remove('is-visible')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
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
