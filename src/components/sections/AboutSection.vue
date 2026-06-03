<template>
  <section id="about" class="about-section" aria-labelledby="about-title">
    <div class="about-shell">
      <div class="about-copy">
        <p class="eyebrow reveal r1">{{ $t('about.header.subtitle') }}</p>
        <div class="eyebrow-line reveal r2" aria-hidden="true"></div>

        <h2 id="about-title" class="about-title reveal r3" v-html="$t('about.header.title')"></h2>

        <p class="about-text reveal r4">
          {{ $t('about.header.description') }}
        </p>

        <div class="feature-grid" aria-label="Experience highlights">
          <article
            v-for="(feature, index) in features"
            :key="feature.text"
            class="feature-card"
            :style="{ '--delay': `${520 + index * 90}ms` }"
          >
            <img
              v-if="feature.image"
              :src="feature.image"
              :alt="feature.text"
              class="feature-image"
              loading="lazy"
            />
            <component v-else :is="getIcon(feature.icon)" class="feature-icon" :size="50" aria-hidden="true" />
            <strong>{{ feature.text }}</strong>
          </article>
        </div>

        <button class="learn-btn reveal r5" type="button" @click="scrollToExperience">
          {{ $t('about.learn_more_button') }} <span>→</span>
        </button>
      </div>

      <div class="about-image-wrap" aria-hidden="true">
        <div class="about-image"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import {
  Users,
  HardHat,
  Camera,
  UsersRound,
  MapPin,
  type LucideIcon,
} from 'lucide-vue-next'

const { tm } = useI18n()

const iconMap: Record<string, LucideIcon> = {
  'mdi-account-group-outline': UsersRound,
  'mdi-motorbike-helmet': HardHat,
  'mdi-camera-outline': Camera,
  'mdi-account-multiple': Users,
  'mdi-map-marker-path': MapPin,
}

function getIcon(mdiName: string): LucideIcon {
  return iconMap[mdiName] ?? Users
}

type Feature = { icon: string; image?: string; text: string }

const features = computed<Feature[]>(() => {
  const featuresData = tm('about.features') as unknown as Feature[]
  return Array.isArray(featuresData) ? featuresData : []
})

const scrollToExperience = () => {
  document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@400;500;600;700&display=swap');

.about-section {
  --dark: var(--um-navy);
  --text: var(--um-text-main);
  --green: var(--um-green-primary);
  --line: var(--um-border-soft);
  background: var(--um-white);
  color: var(--text);
  font-family: 'Oswald', system-ui, sans-serif;
  overflow: hidden;
}

.about-shell {
  width: min(1500px, 100%);
  margin: 0 auto;
  padding: 86px 64px;
  display: grid;
  grid-template-columns: 0.43fr 0.57fr;
  gap: 88px;
  align-items: center;
}

.eyebrow {
  margin: 0;
  color: var(--um-green-primary);
  font-size: 20px;
  font-weight: 800;
  text-transform: uppercase;
}
.eyebrow-line {
  width: 43px;
  height: 2px;
  margin: 20px 0 44px;
  background: var(--um-green-primary);
}

.about-title {
  margin: 0;
  font-family: 'Bebas Neue', Impact, sans-serif;
  font-size: clamp(70px, 6.6vw, 118px);
  line-height: 0.92;
  letter-spacing: 0.015em;
  text-transform: uppercase;
  color: var(--dark);
}

.about-text {
  max-width: 580px;
  margin: 34px 0 44px;
  font-family: system-ui, sans-serif;
  font-size: 22px;
  line-height: 1.45;
}

.feature-grid {
  width: min(560px, 100%);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-bottom: 0;
}

.feature-card {
  --delay: 520ms;
  min-height: 118px;
  display: grid;
  place-items: center;
  align-content: center;
  gap: 10px;
  padding: 12px;
  border-right: 0;
  opacity: 0;
  transform: translateY(20px) scale(0.97);
}
.feature-card.is-visible {
  animation: popIn 0.62s ease forwards;
  animation-delay: var(--delay);
}
.feature-card:nth-child(3),
.feature-card:nth-child(5) {
  border-right: 0;
}
.feature-card:nth-child(n + 4) {
  border-top: 0;
}
.feature-card:nth-child(4) {
  grid-column: 1 / 2;
}
.feature-card:nth-child(5) {
  grid-column: 2 / 4;
}

.feature-icon {
  color: var(--um-navy);
  filter: drop-shadow(3px 3px 0 rgba(127, 178, 57, 0.55));
}
.feature-image {
  width: 56px;
  height: 56px;
  object-fit: contain;
  filter: drop-shadow(3px 3px 0 rgba(127, 178, 57, 0.55));
}
.feature-card strong {
  color: var(--dark);
  font-size: 16px;
  line-height: 1.1;
  text-align: center;
  text-transform: uppercase;
}

.learn-btn {
  width: 235px;
  height: 56px;
  margin-top: 56px;
  border: 2px solid var(--green);
  border-radius: 6px;
  background: var(--um-white);
  color: var(--green);
  font:
    800 18px 'Oswald',
    sans-serif;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.learn-btn:hover {
  background: var(--green);
  color: var(--um-white);
}

.about-image-wrap {
  opacity: 0;
  transform: translateX(36px);
  border-radius: 22px;
  overflow: hidden;
}
.about-image-wrap.is-visible {
  animation: fadeLeft 0.9s ease forwards 360ms;
}

.about-image {
  min-height: 890px;
  border-radius: 22px;
  background-image: url('/images/reforma.png'), linear-gradient(135deg, #8db7d8, #243b2e);
  background-size: cover;
  background-position: center;
  box-shadow: 0 18px 52px rgba(7, 26, 44, 0.12);
  transition: transform 0.5s ease;
}

.about-image-wrap:hover .about-image {
  transform: scale(1.05);
}

.reveal {
  opacity: 0;
  transform: translateY(24px);
}
.reveal.is-visible {
  animation: fadeUp 0.72s ease forwards;
}
.r1 {
  animation-delay: 60ms;
}
.r2 {
  animation-delay: 140ms;
}
.r3 {
  animation-delay: 220ms;
}
.r4 {
  animation-delay: 320ms;
}
.r5 {
  animation-delay: 740ms;
}
@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeLeft {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes popIn {
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@media (max-width: 1050px) {
  .about-shell {
    position: relative;
    grid-template-columns: 1fr;
    gap: 0;
    min-height: 720px;
    padding: 70px 28px;
    isolation: isolate;
    overflow: hidden;
  }
  .about-shell::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.94) 0%,
      rgba(255, 255, 255, 0.86) 48%,
      rgba(255, 255, 255, 0.58) 100%
    );
  }
  .about-copy {
    position: relative;
    z-index: 1;
  }
  .about-image-wrap,
  .about-image-wrap.is-visible {
    position: absolute;
    inset: 0;
    z-index: -2;
    border-radius: 0;
    opacity: 1;
    transform: none;
    animation: none;
    pointer-events: none;
  }
  .about-image {
    width: 100%;
    height: 100%;
    min-height: 100%;
    border-radius: 0;
    background-position: center;
    box-shadow: none;
  }
  .about-image-wrap:hover .about-image {
    transform: none;
  }
}
@media (max-width: 620px) {
  .about-shell {
    min-height: 780px;
  }
  .about-shell::before {
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.96) 0%,
      rgba(255, 255, 255, 0.9) 54%,
      rgba(255, 255, 255, 0.68) 100%
    );
  }
  .about-title {
    font-size: clamp(58px, 18vw, 82px);
  }
  .feature-grid {
    grid-template-columns: 1fr 1fr;
  }
  .feature-card,
  .feature-card:nth-child(3),
  .feature-card:nth-child(5) {
    grid-column: auto;
    border-right: 0;
    border-top: 0;
  }
  .feature-card:nth-child(1),
  .feature-card:nth-child(2) {
    border-top: 0;
  }
  .about-text {
    font-size: 18px;
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
