import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'

declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    description?: string
  }
}

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home',
      description: 'Welcome to Urban Moto Experience',
    },
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'About',
      description: 'About Urban Moto Experience',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  // SEO Meta Tags
  document.title = `${to.meta.title || 'Urban Moto Experience'} - Urban Moto Experience`
  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.setAttribute('content', to.meta.description as string || '')
  }
  next()
})

export default router
