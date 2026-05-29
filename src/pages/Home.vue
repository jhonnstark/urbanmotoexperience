<template>
  <div id="home">
    <main class="hero" aria-label="Explore Mexico City on two wheels">
      <div class="hero-overlay"></div>

      <section class="hero-content">
        <h1>
          <span v-html="$t('home.hero.title_line1')"></span>
          <span v-html="$t('home.hero.title_line2')"></span>
          <span v-html="$t('home.hero.title_line3')"></span>
        </h1>

        <div class="accent-line" aria-hidden="true"></div>

        <p>
          {{ $t('home.hero.subtitle') }}
        </p>

        <div class="hero-actions">
          <v-btn class="btn btn-primary" height="68" width="242" @click="scrollTo('book')"
            >{{ $t('home.hero.book_button') }} <span>→</span></v-btn
          >
          <v-btn class="btn btn-secondary" height="68" width="242" @click="scrollTo('route')"
            >{{ $t('home.hero.route_button') }} <span>→</span></v-btn
          >
        </div>
      </section>
    </main>
    <AboutSection />
    <RouteSection />
    <GallerySection />
    <ExperienceSection />
    <SocialsSection />
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import RouteSection from '@/components/sections/RouteSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import GallerySection from '@/components/sections/GallerySection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import SocialsSection from '@/components/sections/SocialsSection.vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import { useRouter } from 'vue-router'

const router = useRouter()

// Setup scroll animations
useScrollAnimation()

const scrollTo = (id: string) => {
  if (id === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  router.push(`/#${id}`)
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@400;500;600;700&display=swap');

#home {
  min-height: 100vh;
  overflow-x: hidden;
  background: #111;
  font-family: 'Oswald', system-ui, sans-serif;
}

.hero {
  min-height: calc(100vh - 118px);
  position: relative;
  display: flex;
  align-items: center;
  background-image: url('/images/background.png');
  background-size: cover;
  background-position: center 52%;
  color: white;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(0, 0, 0, 0.82) 0%, rgba(0, 0, 0, 0.62) 31%, rgba(0, 0, 0, 0.1) 65%),
    linear-gradient(0deg, rgba(0, 0, 0, 0.62) 0%, rgba(0, 0, 0, 0.08) 55%);
}

.hero-content {
  position: relative;
  z-index: 1;
  width: min(720px, calc(100% - 80px));
  margin-left: 64px;
  padding-top: 26px;
}

.hero h1 {
  margin: 0;
  font-family: 'Bebas Neue', Impact, sans-serif;
  font-size: clamp(74px, 7.2vw, 112px);
  line-height: 0.92;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-shadow: 0 3px 18px rgba(0, 0, 0, 0.25);
}

.hero h1 span {
  display: block;
}

.accent-line {
  width: 92px;
  height: 4px;
  margin: 34px 0 22px;
  background: rgb(var(--v-theme-green));
  border-radius: 999px;
}

.hero p {
  max-width: 650px;
  margin: 0;
  font-family: 'Oswald', system-ui, sans-serif;
  font-size: clamp(20px, 1.7vw, 28px);
  line-height: 1.42;
  color: rgba(255, 255, 255, 0.94);
}

.hero-actions {
  display: flex;
  gap: 28px;
  margin-top: 46px;
}

.btn {
  width: 242px;
  height: 68px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 28px;
  border-radius: 8px;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.7px;
}

.btn-primary {
  background-color: rgb(var(--v-theme-green));
  color: white;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.22);
}

.btn-secondary {
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.8);
  background: rgba(0, 0, 0, 0.18);
}

.btn span {
  font-size: 35px;
  line-height: 1;
  transform: translateY(-1px);
}

.anim-container {
  opacity: 0;
  transform: translateY(40px);
  transition:
    opacity 0.8s ease-out,
    transform 0.8s ease-out;
}

.anim-container.visible {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 900px) {
  .hero {
    min-height: calc(100vh - 96px);
    background-position: 62% center;
  }

  .hero-content {
    margin-left: 28px;
    width: calc(100% - 56px);
  }

  .hero-actions {
    flex-direction: column;
    gap: 16px;
  }
}
</style>
