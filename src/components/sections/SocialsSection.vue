<template>
  <section id="socials" class="socials-section" aria-labelledby="socials-title">
    <div class="socials-shell">
      <p class="eyebrow reveal s1">{{ $t('socials.header.subtitle') }}</p>
      <div class="line reveal s2" aria-hidden="true"></div>
      <h2 id="socials-title" class="title reveal s3">{{ $t('socials.header.title') }}</h2>
      <p class="subtitle reveal s4">{{ $t('socials.header.description') }}</p>

      <div class="elfsight-feed reveal s5">
        <div
          class="elfsight-app-a208b223-714b-4496-8d59-f84bccf72306"
          data-elfsight-app-lazy
        ></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  if (!document.querySelector('script[src*="elfsightcdn.com/platform.js"]')) {
    const script = document.createElement('script')
    script.src = 'https://elfsightcdn.com/platform.js'
    script.async = true
    document.head.appendChild(script)
  }
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@400;500;600;700&display=swap');
.socials-section {
  --dark: var(--um-navy);
  --green: var(--um-green-primary);
  background: var(--um-white);
  color: var(--dark);
  font-family: 'Oswald', system-ui, sans-serif;
  padding: 52px 58px 50px;
  overflow: hidden;
}
.socials-shell {
  width: min(1380px, 100%);
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
  margin: 18px auto 22px;
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
  margin: 18px 0 32px;
  font: 23px system-ui, sans-serif;
  color: #1d2939;
}
.elfsight-feed {
  width: 100%;
  margin: 0 auto 16px;
}
.reveal {
  opacity: 0;
  transform: translateY(22px);
}
.reveal.is-visible {
  animation: fadeUp 0.7s ease forwards;
}
.s1 {
  animation-delay: 60ms;
}
.s2 {
  animation-delay: 140ms;
}
.s3 {
  animation-delay: 220ms;
}
.s4 {
  animation-delay: 320ms;
}
.s5 {
  animation-delay: 760ms;
}
@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@media (max-width: 950px) {
  .socials-section {
    padding: 56px 24px;
  }
}
@media (max-width: 620px) {
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
