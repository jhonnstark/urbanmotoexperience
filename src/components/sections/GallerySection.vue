<template>
  <section id="gallery" class="gallery-section" aria-labelledby="gallery-title">
    <div class="gallery-shell">
      <p class="eyebrow reveal g1">{{ $t('gallery.header.subtitle') }}</p>
      <div class="line reveal g2" aria-hidden="true"></div>
      <h2 id="gallery-title" class="title reveal g3">{{ $t('gallery.header.title') }}</h2>
      <p class="subtitle reveal g4">{{ $t('gallery.header.description') }}</p>

      <div class="gallery-grid">
        <figure
          v-for="(image, index) in images"
          :key="image"
          class="gallery-item"
          :style="{ '--delay': `${440 + index * 95}ms` }"
        >
          <img :src="image" :alt="`Gallery image ${index + 1}`" class="gallery-image" />
        </figure>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const images = [
  '/images/experience/angel.png',
  '/images/experience/bellasartess.png',
  '/images/experience/chapultepec.png',
  '/images/experience/girl.png',
  '/images/experience/jacarandas.png',
  '/images/experience/pareja.png',
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@400;500;600;700&display=swap');
.gallery-section {
  --dark: var(--um-navy);
  --green: var(--um-green-primary);
  background: var(--um-white);
  color: var(--dark);
  font-family: 'Oswald', system-ui, sans-serif;
  padding: 58px 52px 78px;
  overflow: hidden;
}
.gallery-shell {
  width: min(1450px, 100%);
  margin: 0 auto;
  text-align: center;
}
.eyebrow {
  margin: 0;
  color: var(--um-green-primary);
  font-size: 18px;
  font-weight: 900;
  text-transform: uppercase;
}
.line {
  width: 38px;
  height: 2px;
  background: var(--um-green-primary);
  margin: 18px auto 24px;
}
.title {
  margin: 0;
  font-family: 'Bebas Neue', Impact, sans-serif;
  font-size: clamp(70px, 6.6vw, 118px);
  line-height: 0.92;
  letter-spacing: 0.025em;
  text-transform: uppercase;
}
.subtitle {
  margin: 18px 0 40px;
  font: 24px system-ui, sans-serif;
  color: #1d2939;
}
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  text-align: left;
}
.gallery-item {
  height: 350px;
  margin: 0;
  border-radius: 7px;
  overflow: hidden;
  background: #e8efe2;
  opacity: 0;
  transform: translateY(22px) scale(0.98);
  animation: itemIn 0.68s ease forwards;
  animation-delay: var(--delay);
}
.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}
.gallery-item:hover .gallery-image {
  transform: scale(1.045);
}
.reveal {
  opacity: 0;
  transform: translateY(22px);
  animation: fadeUp 0.7s ease forwards;
}
.g1 {
  animation-delay: 60ms;
}
.g2 {
  animation-delay: 140ms;
}
.g3 {
  animation-delay: 220ms;
}
.g4 {
  animation-delay: 320ms;
}
@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes itemIn {
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
@media (max-width: 950px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .gallery-section {
    padding: 56px 24px;
  }
  .gallery-item {
    height: 280px;
  }
}
@media (max-width: 620px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }
  .gallery-item {
    height: 245px;
  }
  .subtitle {
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
