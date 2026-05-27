import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/pages/Home.vue'

declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    description?: string
  }
}

const routes: RouteRecordRaw[] = [
  {
    path: '/:section?',
    name: 'Home',
    component: Home,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    if (savedPosition) {
      return savedPosition
    }
    return { left: 0, top: 0 }
  },
})

router.beforeEach((to, from, next) => {
  // SEO Meta Tags
  const section = to.params.section as string
  const title = section ? section.charAt(0).toUpperCase() + section.slice(1) : 'Home'
  document.title = `Urban Moto Experience - ${title}`

  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.setAttribute('content', (to.meta.description as string) || '')
  }
  next()
})

export default router
