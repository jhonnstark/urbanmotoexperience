<template>
  <section id="contact" class="contact-section" aria-labelledby="contact-title">
    <div class="contact-card">
      <div class="contact-bg" aria-hidden="true"></div>
      <div class="contact-overlay" aria-hidden="true"></div>

      <div class="contact-content">
        <h2 id="contact-title" class="contact-title reveal c1" v-html="contactTitle"></h2>
        <div class="accent reveal c2" aria-hidden="true"></div>
        <p class="tagline reveal c3">{{ $t('contact.subtitle') }}</p>

        <div class="contact-actions reveal c4">
          <a class="cta whatsapp" href="https://wa.me/525611777736?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20Urban%20Moto%20Experience%20CDMX" target="_blank" rel="noopener noreferrer">
            <Phone :size="34" :stroke-width="2" />
            {{ $t('contact.whatsapp_button') }} <b>→</b>
          </a>
          <a
            class="cta instagram"
            href="https://www.instagram.com/urbanmotoexperience/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram :size="34" :stroke-width="2" />
            {{ $t('contact.instagram_button') }} <b>→</b>
          </a>
        </div>
      </div>

      <div class="benefit-bar">
        <article v-for="benefit in benefits" :key="benefit.title">
          <div class="benefit-icon-wrap">
            <component :is="getIcon(benefit.icon)" :size="28" />
          </div>
          <div>
            <strong>{{ benefit.title }}</strong>
            <p>{{ benefit.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import type { Component } from 'vue'
import { Phone, Instagram, MapPin, Camera, Heart, ShieldCheck } from 'lucide-vue-next'

const { t, tm } = useI18n()

const iconMap: Record<string, Component> = {
  'mdi-map-marker-account-outline': MapPin,
  'mdi-camera-iris': Camera,
  'mdi-heart-outline': Heart,
}

function getIcon(mdiName: string): Component {
  return iconMap[mdiName] ?? ShieldCheck
}

const contactTitle = computed(() => {
  const part1 = t('contact.title_part1')
  const part2 = t('contact.title_part2')
  return `<span>${part1}</span><span><em>${part2}</em></span>`
})

interface Benefit {
  title: string
  icon: string
  description: string
}

const benefits = computed<Benefit[]>(() => {
  const highlights = tm('contact.highlights') as unknown as Benefit[]
  return Array.isArray(highlights) ? highlights : []
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@400;500;600;700&display=swap');
.contact-section {
  background: var(--um-white);
  padding: 44px 8px 22px;
  font-family: 'Oswald', system-ui, sans-serif;
  color: var(--um-white);
  overflow: hidden;
}
.contact-card {
  width: min(1540px, calc(100% - 16px));
  min-height: 980px;
  margin: 0 auto;
  position: relative;
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 0 18px 55px rgba(7, 26, 44, 0.18);
}
.contact-bg {
  position: absolute;
  inset: 0;
  background-image:
    url('/images/fondo contact.png'),
    linear-gradient(135deg, #111, #4a5f40);
  background-size: cover;
  background-position: center;
  transform: scale(1.04);
}
.contact-card.is-visible .contact-bg {
  animation: bgSettle 1.6s ease forwards;
}
.contact-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.88) 0%,
      rgba(0, 0, 0, 0.62) 34%,
      rgba(0, 0, 0, 0.08) 68%
    ),
    linear-gradient(0deg, rgba(0, 0, 0, 0.5), transparent 52%);
}
.contact-content {
  position: relative;
  z-index: 2;
  width: min(640px, calc(100% - 90px));
  padding: 150px 0 0 78px;
}
.contact-title {
  margin: 0;
  font-family: 'Bebas Neue', Impact, sans-serif;
  font-size: clamp(70px, 6.6vw, 118px);
  line-height: 0.92;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}
.contact-title span {
  display: block;
}
.contact-title em {
  font-style: normal;
  color: var(--um-green-primary);
}
.accent {
  width: 90px;
  height: 4px;
  background: var(--um-green-primary);
  margin: 34px 0 30px;
}
.tagline {
  font:
    500 clamp(24px, 2vw, 34px) system-ui,
    sans-serif;
  margin: 0 0 28px;
}
.contact-actions {
  display: grid;
  gap: 18px;
  margin-top: 30px;
}
.cta {
  width: min(540px, 100%);
  height: 76px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 0 34px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 23px;
  letter-spacing: 0.02em;
}
.cta svg {
  flex-shrink: 0;
}
.cta b {
  margin-left: auto;
  font-size: 36px;
}
.whatsapp {
  background: var(--um-green-primary);
  color: var(--um-white);
}
.whatsapp:hover {
  background: var(--um-green-dark);
}
.instagram {
  border: 2px solid rgba(245, 245, 242, 0.9);
  color: var(--um-off-white);
  background: rgba(0, 0, 0, 0.16);
}
.instagram:hover {
  background: var(--um-white);
  color: var(--um-navy);
}
.benefit-bar {
  position: absolute;
  z-index: 3;
  left: 72px;
  right: 72px;
  bottom: 0;
  min-height: 138px;
  padding: 24px 62px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  background: rgba(255, 255, 245, 0.96);
  color: #071a2c;
  border-radius: 20px 20px 0 0;
  box-shadow: 0 -14px 40px rgba(0, 0, 0, 0.12);
  opacity: 0;
  transform: translateY(34px);
}
.benefit-bar.is-visible {
  animation: benefitIn 0.75s ease forwards 780ms;
}
.benefit-bar article {
  display: flex;
  align-items: center;
  gap: 20px;
  border-right: 1px solid rgba(7, 26, 44, 0.14);
  padding-left: 20px;
}
.benefit-bar article:last-child {
  border-right: 0;
}
.benefit-icon-wrap {
  width: 56px;
  height: 56px;
  border: 2px solid var(--um-green-primary);
  border-radius: 50%;
  display: grid;
  place-items: center;
  flex-shrink: 0;
  color: var(--um-green-primary);
}
.benefit-bar strong {
  color: var(--um-green-dark);
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 400;
}
.benefit-bar p {
  margin: 6px 0 0;
  font:
    18px system-ui,
    sans-serif;
  color: #24313a;
}
.reveal {
  opacity: 0;
  transform: translateY(25px);
}
.reveal.is-visible {
  animation: fadeUp 0.7s ease forwards;
}
.c1 {
  animation-delay: 120ms;
}
.c2 {
  animation-delay: 230ms;
}
.c3 {
  animation-delay: 320ms;
}
.c4 {
  animation-delay: 430ms;
}
@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes benefitIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes bgSettle {
  to {
    transform: scale(1);
  }
}
@media (max-width: 1280px) {
  .contact-section {
    font-size: 14px;
  }
}
@media (max-width: 900px) {
  .contact-card {
    min-height: 900px;
  }
  .contact-content {
    padding: 90px 28px 0;
    width: auto;
  }
  .benefit-bar {
    position: relative;
    left: auto;
    right: auto;
    margin: 60px 22px 0;
    grid-template-columns: 1fr;
    padding: 24px;
    gap: 22px;
    border-radius: 18px;
  }
  .benefit-bar article {
    border-right: 0;
  }
  .cta {
    font-size: 18px;
    padding: 0 22px;
  }
  .contact-bg {
    background-image:
      image-set(url('/images/fondo contact-1x.png') 1x, url('/images/fondo contact.png') 2x),
      linear-gradient(135deg, #111, #4a5f40);
    background-position: 65% center;
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
