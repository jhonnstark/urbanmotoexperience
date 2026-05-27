<template>
  <section id="experience" class="experience-section" aria-labelledby="experience-title">
    <div class="experience-shell">
      <header class="experience-header">
        <p class="experience-eyebrow reveal reveal-1">
          {{ t('experience.header.subtitle') }}
        </p>
        <div class="eyebrow-line reveal reveal-2" aria-hidden="true"></div>

        <h2 id="experience-title" class="experience-title reveal reveal-3">
          {{ t('experience.header.title') }}
        </h2>

        <p class="experience-subtitle reveal reveal-4">
          {{ t('experience.header.description') }}
        </p>
      </header>

      <div class="features-grid" aria-label="Experience features">
        <article
          v-for="(feature, index) in features"
          :key="feature.key"
          class="feature-card"
          :style="{ '--delay': `${460 + index * 120}ms` }"
        >
          <div class="feature-image-wrap">
            <img class="feature-image" :src="feature.image" :alt="feature.title" loading="lazy" />
          </div>

          <div class="feature-content">
            <component :is="feature.icon" class="feature-icon" :stroke-width="1.8" aria-hidden="true" />
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Bike, Camera, Coffee, Mic, ShieldCheck } from 'lucide-vue-next'

const { t } = useI18n()

type Feature = {
  key: string
  title: string
  description: string
  image: string
  icon: typeof ShieldCheck
}

const features = computed<Feature[]>(() => [
  {
    key: 'helmet',
    title: t('experience.features.helmet.title'),
    description: t('experience.features.helmet.description'),
    image: '/images/experience/extra-helmet.png',
    icon: ShieldCheck,
  },
  {
    key: 'photos',
    title: t('experience.features.photos.title'),
    description: t('experience.features.photos.description'),
    image: '/images/experience/photo-stops.png',
    icon: Camera,
  },
  {
    key: 'stories',
    title: t('experience.features.stories.title'),
    description: t('experience.features.stories.description'),
    image: '/images/experience/local-stories.png',
    icon: Mic,
  },
  {
    key: 'driver',
    title: t('experience.features.driver.title'),
    description: t('experience.features.driver.description'),
    image: '/images/experience/driver-included.png',
    icon: Bike,
  },
  {
    key: 'coffee',
    title: t('experience.features.coffee.title'),
    description: t('experience.features.coffee.description'),
    image: '/images/experience/coffee-stop.png',
    icon: Coffee,
  },
])
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@400;500;600;700;800&display=swap');

.experience-section {
  --experience-dark: #071a2c;
  --experience-text: #172234;
  --experience-muted: #4f5b66;
  --experience-green: #79b83f;
  --experience-green-dark: #4f9b32;
  --experience-card: #ffffff;

  background: #fff;
  color: var(--experience-text);
  font-family: 'Oswald', system-ui, sans-serif;
  overflow: hidden;
}

.experience-shell {
  width: min(1450px, 100%);
  margin: 0 auto;
  padding: 82px 42px 72px;
}

.experience-header {
  max-width: 720px;
  margin: 0 auto 44px;
  text-align: center;
}

.experience-eyebrow {
  margin: 0;
  color: var(--experience-green);
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

.eyebrow-line {
  width: 38px;
  height: 2px;
  margin: 18px auto 24px;
  background: var(--experience-green);
}

.experience-title {
  margin: 0;
  font-family: 'Bebas Neue', Impact, sans-serif;
  font-size: clamp(70px, 6.7vw, 116px);
  line-height: 0.9;
  letter-spacing: 0.015em;
  color: var(--experience-dark);
  text-transform: uppercase;
}

.experience-subtitle {
  max-width: 620px;
  margin: 18px auto 0;
  font-family: system-ui, sans-serif;
  font-size: clamp(19px, 1.5vw, 25px);
  line-height: 1.38;
  color: var(--experience-text);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 16px;
}

.feature-card {
  min-width: 0;
  overflow: hidden;
  border-radius: 10px;
  background: var(--experience-card);
  box-shadow: 0 18px 42px rgba(7, 26, 44, 0.065);
  opacity: 0;
  transform: translateY(28px);
  animation: featureFadeUp 0.78s ease forwards;
  animation-delay: var(--delay);
}

.feature-image-wrap {
  position: relative;
  aspect-ratio: 1 / 1.31;
  overflow: hidden;
  border-radius: 10px;
  background:
    radial-gradient(circle at 32% 20%, rgba(121, 184, 63, 0.35), transparent 28%),
    linear-gradient(135deg, #dce9f4, #567655 55%, #142a1d);
}

.feature-image {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transform: scale(1.045);
  animation: imageSettle 0.95s ease forwards;
  animation-delay: calc(var(--delay) + 80ms);
}

.feature-image:not([src]),
.feature-image[src=''] {
  display: none;
}

.feature-content {
  min-height: 270px;
  padding: 30px 28px 34px;
  text-align: center;
}

.feature-icon {
  width: 62px;
  height: 62px;
  margin: 0 auto 24px;
  color: var(--experience-dark);
  filter: drop-shadow(3px 3px 0 rgba(121, 184, 63, 0.55));
  opacity: 0;
  transform: translateY(10px) scale(0.9);
  animation: iconPop 0.5s cubic-bezier(0.2, 0.9, 0.3, 1.25) forwards;
  animation-delay: calc(var(--delay) + 240ms);
}

.feature-card h3 {
  margin: 0 0 18px;
  color: var(--experience-dark);
  font-size: clamp(20px, 1.55vw, 25px);
  line-height: 1;
  font-weight: 900;
  text-transform: uppercase;
}

.feature-card p {
  max-width: 230px;
  margin: 0 auto;
  font-family: system-ui, sans-serif;
  font-size: clamp(15px, 1.15vw, 18px);
  line-height: 1.55;
  color: var(--experience-text);
}

.reveal {
  opacity: 0;
  transform: translateY(22px);
  animation: featureFadeUp 0.72s ease forwards;
}

.reveal-1 {
  animation-delay: 80ms;
}

.reveal-2 {
  animation-delay: 160ms;
}

.reveal-3 {
  animation-delay: 240ms;
}

.reveal-4 {
  animation-delay: 340ms;
}

@keyframes featureFadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes imageSettle {
  to {
    transform: scale(1);
  }
}

@keyframes iconPop {
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@media (max-width: 1200px) {
  .features-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 820px) {
  .experience-shell {
    padding: 68px 24px 58px;
  }

  .features-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .feature-content {
    min-height: 230px;
    padding: 26px 20px 30px;
  }

  .feature-icon {
    width: 52px;
    height: 52px;
  }
}

@media (max-width: 560px) {
  .experience-shell {
    padding-inline: 18px;
  }

  .features-grid {
    grid-template-columns: 1fr;
    gap: 22px;
  }

  .feature-image-wrap {
    aspect-ratio: 1.18 / 1;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation: none !important;
    transition: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}
</style>
