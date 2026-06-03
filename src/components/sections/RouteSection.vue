<template>
  <section id="route" class="route-section" aria-labelledby="route-title">
    <div class="route-shell">
      <div class="route-copy">
        <p class="route-eyebrow reveal reveal-1">{{ $t('route.header.subtitle') }}</p>
        <div class="eyebrow-line reveal reveal-2" aria-hidden="true"></div>

        <h2 id="route-title" class="route-title reveal reveal-3">
          {{ $t('route.header.title') }}
        </h2>

        <p class="route-subtitle reveal reveal-4">
          {{ $t('route.header.description') }}
        </p>

        <ol class="route-list" aria-label="Urban Moto route stops">
          <li
            v-for="(stop, index) in stops"
            :key="stop.id"
            class="route-stop reveal-stop"
            :style="{ '--delay': `${420 + index * 120}ms` }"
          >
            <div class="stop-thumb" :alt="stop.title">
              <img v-if="stop.image" :src="stop.image" :alt="stop.title" class="stop-thumb-img" />
            </div>
            <div class="stop-number">{{ stop.id }}</div>
            <div class="stop-body">
              <h3>{{ stop.title }}</h3>
              <p>{{ stop.description }}</p>
            </div>
          </li>
        </ol>
      </div>

      <div class="map-wrap reveal-map">
        <div class="map-card" aria-label="Illustrated route map">
          <div class="map-grid" aria-hidden="true"></div>

          <svg class="route-svg" viewBox="0 0 620 620" role="img" aria-label="Green route line">
            <path
              class="route-path"
              d="M242 78 L312 96 L291 186 L358 260 L478 346 L397 411 L420 505 L260 555 L212 458 L166 372"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <div class="map-logo-placeholder" aria-label="Urban Moto Experience">
            <img src="/images/log3.png" alt="Urban Moto Experience" class="map-logo-img" />
          </div>

          <div
            v-for="point in mapPoints"
            :key="point.id"
            class="map-point"
            :class="`point-${point.id}`"
            :style="{ '--delay': `${900 + point.id * 110}ms` }"
          >
            <span class="pin" aria-hidden="true"></span>
            <span class="map-number">{{ point.id }}</span>
            <strong>{{ point.label }}</strong>
            <div class="point-image">
              <img v-if="point.image" :src="point.image" :alt="point.label" class="point-image-img" />
            </div>
          </div>
        </div>

        <div class="route-stats">
          <article
            v-for="(stat, index) in stats"
            :key="stat.label"
            class="stat-card"
            :style="{ '--delay': `${1100 + index * 110}ms` }"
          >
            <div class="stat-icon" aria-hidden="true">
              <img v-if="stat.image" :src="stat.image" :alt="stat.label" class="stat-icon-img" />
              <span v-else>{{ stat.icon }}</span>
            </div>
            <div>
              <p>{{ stat.label }}</p>
              <strong>{{ stat.value }}</strong>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t } = useI18n()

interface Stop {
  id: number
  title: string
  description: string
  image?: string
}

interface MapPoint {
  id: number
  label: string
  image?: string
}

interface Stat {
  icon: string
  label: string
  value: string
  image?: string
}

const stops = computed<Stop[]>(() => {
  const images = [
    '/images/ruta/parque.png',
    '/images/ruta/angel.png',
    '/images/ruta/chapultepec.png',
    '/images/ruta/museo.png',
    '/images/experience/bellasartess.png',
    '/images/ruta/revol.png',
  ]
  
  return [
    {
      id: 1,
      title: t('route.stops[0].name'),
      description: t('route.stops[0].description'),
      image: images[0],
    },
    {
      id: 2,
      title: t('route.stops[1].name'),
      description: t('route.stops[1].description'),
      image: images[1],
    },
    {
      id: 3,
      title: t('route.stops[2].name'),
      description: t('route.stops[2].description'),
      image: images[2],
    },
    {
      id: 4,
      title: t('route.stops[3].name'),
      description: t('route.stops[3].description'),
      image: images[3],
    },
    {
      id: 5,
      title: t('route.stops[4].name'),
      description: t('route.stops[4].description'),
      image: images[4],
    },
    {
      id: 6,
      title: t('route.stops[5].name'),
      description: t('route.stops[5].description'),
      image: images[5],
    },
  ]
})

const mapPoints = computed<MapPoint[]>(() => {
  const images = [
    '/images/ruta/parque.png',
    '/images/ruta/angel.png',
    '/images/ruta/chapultepec.png',
    '/images/ruta/museo.png',
    '/images/experience/bellasartess.png',
    '/images/ruta/revol.png',
  ]
  
  return stops.value.map((stop, index) => ({
    id: stop.id,
    label: stop.title,
    image: images[index] || undefined,
  }))
})

const stats = computed<Stat[]>(() => [
  { icon: '◷', label: t('route.stats.duration.label'), value: t('route.stats.duration.value'), image: '/images/clock.png' },
  { icon: '⌁', label: t('route.stats.distance.label'), value: t('route.stats.distance.value'), image: '/images/positionicon.png' },
  { icon: '🏍', label: t('route.stats.ride_type.label'), value: t('route.stats.ride_type.value'), image: '/images/motoicon.png' },
  { icon: '♙', label: t('route.stats.group_size.label'), value: t('route.stats.group_size.value') },
])
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@400;500;600;700&display=swap');

.route-section {
  --route-dark: var(--um-navy);
  --route-text: var(--um-text-main);
  --route-muted: var(--um-text-muted);
  --route-green: var(--um-green-primary);
  --route-green-dark: var(--um-green-dark);
  --route-soft: var(--um-off-white);
  --route-line: #e8ece8;

  background: var(--um-white);
  color: var(--route-text);
  font-family: 'Oswald', system-ui, sans-serif;
  overflow: hidden;
}

.route-shell {
  width: min(1480px, 100%);
  margin: 0 auto;
  padding: 86px 54px 74px;
  display: grid;
  grid-template-columns: 0.42fr 0.58fr;
  gap: 58px;
  align-items: start;
}

.route-eyebrow {
  margin: 0;
  color: var(--um-green-primary);
  font-size: 21px;
  font-weight: 800;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

.eyebrow-line {
  width: 42px;
  height: 2px;
  margin: 18px 0 28px;
  background: var(--um-green-primary);
}

.route-title {
  margin: 0;
  font-family: 'Bebas Neue', Impact, sans-serif;
  font-size: clamp(70px, 6.6vw, 118px);
  line-height: 0.9;
  letter-spacing: 0.015em;
  color: var(--route-dark);
  text-transform: uppercase;
}

.route-subtitle {
  max-width: 560px;
  margin: 22px 0 34px;
  font-size: clamp(21px, 1.55vw, 27px);
  line-height: 1.42;
  color: var(--route-text);
}

.route-list {
  position: relative;
  list-style: none;
  margin: 0;
  padding: 0 0 0 18px;
}

.route-list::before {
  content: '';
  position: absolute;
  left: 146px;
  top: 36px;
  bottom: 44px;
  width: 2px;
  background: var(--route-line);
}

.route-stop {
  position: relative;
  min-height: 112px;
  display: grid;
  grid-template-columns: 96px 42px 1fr;
  gap: 18px;
  align-items: start;
  padding-bottom: 22px;
  opacity: 0;
  transform: translateY(24px);
}
.route-stop.is-visible,
.reveal-stop.is-visible {
  animation: routeFadeUp 0.72s ease forwards;
  animation-delay: var(--delay);
}

.stop-thumb {
  width: 74px;
  height: 74px;
  margin-top: 2px;
  border-radius: 999px;
  border: 3px solid rgba(121, 184, 63, 0.42);
  background: radial-gradient(circle at 40% 35%, #eaf4e5, #a6c4dc 48%, #6b8e54);
  box-shadow: 0 7px 18px rgba(7, 26, 44, 0.14);
  overflow: hidden;
}

.stop-thumb-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.stop-thumb:hover .stop-thumb-img {
  transform: scale(1.1);
}

.stop-number {
  position: relative;
  z-index: 2;
  width: 32px;
  height: 32px;
  margin-top: 10px;
  display: grid;
  place-items: center;
  border-radius: 999px;
  background: var(--route-green);
  color: var(--um-white);
  font-size: 18px;
  font-weight: 800;
}

.stop-body {
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(7, 26, 44, 0.12);
}

.stop-body h3 {
  margin: 0 0 8px;
  color: var(--route-dark);
  font-size: 24px;
  line-height: 1;
  font-weight: 800;
  text-transform: uppercase;
}

.stop-body p {
  max-width: 415px;
  margin: 0;
  font-family: system-ui, sans-serif;
  font-size: 17px;
  line-height: 1.45;
  color: #273241;
}

.map-wrap {
  opacity: 0;
  transform: translateX(36px);
}
.map-wrap.is-visible,
.reveal-map.is-visible {
  animation: routeFadeLeft 0.9s ease forwards;
  animation-delay: 520ms;
}

.map-card {
  position: relative;
  min-height: 730px;
  border-radius: 26px;
  overflow: hidden;
  background:
    linear-gradient(rgba(255, 255, 255, 0.88), rgba(255, 255, 255, 0.88)),
    radial-gradient(circle at 28% 18%, rgba(121, 184, 63, 0.22), transparent 17%),
    radial-gradient(circle at 62% 48%, rgba(121, 184, 63, 0.16), transparent 20%),
    linear-gradient(135deg, #f7faf4, #edf3ea);
  box-shadow: 0 18px 55px rgba(7, 26, 44, 0.08);
}

.map-grid {
  position: absolute;
  inset: -20px;
  opacity: 0.42;
  background-image:
    linear-gradient(30deg, transparent 0 47%, rgba(160, 175, 164, 0.34) 48% 50%, transparent 51%),
    linear-gradient(120deg, transparent 0 46%, rgba(160, 175, 164, 0.28) 47% 50%, transparent 51%),
    linear-gradient(80deg, transparent 0 48%, rgba(160, 175, 164, 0.22) 49% 51%, transparent 52%);
  background-size: 145px 118px, 170px 140px, 210px 130px;
}

.route-svg {
  position: absolute;
  inset: 7% 11% 8% 13%;
  width: 76%;
  height: 78%;
  filter: drop-shadow(0 7px 2px rgba(79, 155, 50, 0.12));
}

.route-path {
  stroke: var(--route-green-dark);
  stroke-width: 16;
  stroke-dasharray: 980;
  stroke-dashoffset: 980;
}
.route-path.is-visible {
  animation: drawRoute 1.3s ease forwards;
  animation-delay: 820ms;
}

.map-logo-placeholder {
  position: absolute;
  top: 34px;
  right: 54px;
  width: 72px;
  height: auto;
  filter: drop-shadow(0 10px 14px rgba(7, 26, 44, 0.12));
}

.map-logo-img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.map-point {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 9px;
  color: var(--route-dark);
  font-size: 18px;
  line-height: 1;
  font-weight: 900;
  text-transform: uppercase;
  opacity: 0;
  transform: scale(0.92) translateY(12px);
}
.map-point.is-visible {
  animation: pointIn 0.52s cubic-bezier(0.2, 0.9, 0.3, 1.25) forwards;
  animation-delay: var(--delay);
}

.point-image {
  width: 104px;
  height: 104px;
  border-radius: 999px;
  border: 5px solid white;
  background: linear-gradient(135deg, #c9d8e8, #7aa665);
  box-shadow: 0 10px 24px rgba(7, 26, 44, 0.18);
  overflow: hidden;
}

.point-image-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.point-image:hover .point-image-img {
  transform: scale(1.1);
}

.pin {
  width: 24px;
  height: 24px;
  border-radius: 999px 999px 999px 0;
  background: var(--route-dark);
  transform: rotate(-45deg);
}

.map-number {
  width: 32px;
  height: 32px;
  display: grid;
  place-items: center;
  border-radius: 999px;
  background: var(--route-green);
  color: var(--um-white);
  font-size: 17px;
}

.point-1 {
  top: 66px;
  left: 146px;
}

.point-1 .point-image {
  order: -1;
}

.point-2 {
  top: 210px;
  left: 300px;
}

.point-2 strong {
  max-width: 150px;
}

.point-3 {
  top: 348px;
  right: 86px;
}

.point-3 .point-image {
  order: 4;
}

.point-4 {
  bottom: 245px;
  left: 88px;
}

.point-4 strong {
  max-width: 152px;
}

.point-5 {
  bottom: 140px;
  right: 96px;
}

.point-5 .point-image {
  order: 4;
}

.point-6 {
  bottom: 52px;
  left: 220px;
}

.point-6 .point-image {
  order: -1;
}

.route-stats {
  width: min(100%, 880px);
  margin: 30px auto 0;
  padding: 18px 22px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background: rgba(245, 245, 242, 0.96);
  border-radius: 16px;
  box-shadow: var(--um-shadow-soft);
}

.stat-card {
  min-height: 70px;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 0 18px;
  border-right: 1px solid rgba(7, 26, 44, 0.12);
  opacity: 0;
  transform: translateY(16px);
}
.stat-card.is-visible {
  animation: routeFadeUp 0.58s ease forwards;
  animation-delay: var(--delay);
}

.stat-card:last-child {
  border-right: 0;
}

.stat-icon {
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  border-radius: 999px;
  color: var(--route-green);
  font-size: 38px;
  line-height: 1;
  flex-shrink: 0;
}

.stat-icon-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.stat-card p {
  margin: 0 0 3px;
  color: var(--route-green);
  font-size: 13px;
  font-weight: 800;
  text-transform: uppercase;
}

.stat-card strong {
  color: var(--route-dark);
  font-size: 15px;
  font-weight: 900;
  text-transform: uppercase;
}

.reveal {
  opacity: 0;
  transform: translateY(24px);
}
.reveal.is-visible {
  animation: routeFadeUp 0.72s ease forwards;
}

.reveal-1 {
  animation-delay: 70ms;
}

.reveal-2 {
  animation-delay: 160ms;
}

.reveal-3 {
  animation-delay: 230ms;
}

.reveal-4 {
  animation-delay: 340ms;
}

@keyframes routeFadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes routeFadeLeft {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes drawRoute {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes pointIn {
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@media (max-width: 1120px) {
  .route-shell {
    grid-template-columns: 1fr;
  }

  .route-title {
    max-width: 760px;
  }

  .map-card {
    min-height: 650px;
  }
}

@media (max-width: 760px) {
  .route-shell {
    padding: 62px 22px 54px;
    gap: 38px;
  }

  .route-list {
    padding-left: 0;
  }

  .route-list::before {
    left: 104px;
  }

  .route-stop {
    grid-template-columns: 76px 38px 1fr;
    gap: 12px;
  }

  .stop-thumb {
    width: 62px;
    height: 62px;
  }

  .stop-body h3 {
    font-size: 20px;
  }

  .stop-body p {
    font-size: 15px;
  }

  .map-card {
    min-height: 520px;
  }

  .map-logo-placeholder {
    width: 52px;
    height: auto;
    right: 20px;
  }

  .map-point {
    font-size: 12px;
    gap: 5px;
  }

  .point-image {
    width: 62px;
    height: 62px;
    border-width: 3px;
  }

  .pin {
    width: 17px;
    height: 17px;
  }

  .map-number {
    width: 24px;
    height: 24px;
    font-size: 13px;
  }

  .route-stats {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }

  .stat-card {
    border-right: 0;
    padding: 8px;
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
    stroke-dashoffset: 0 !important;
  }
}
</style>
