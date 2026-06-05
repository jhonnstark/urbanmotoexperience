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

          <svg
            class="route-svg"
            viewBox="0 0 1000 560"
            preserveAspectRatio="xMidYMid meet"
            role="img"
            aria-label="Stylized Google Maps route through CDMX"
          >
            <path
              class="route-path"
              d="M455 475 L440 405 L465 315 L410 275 L335 300 L275 310 L210 300 L135 285 L120 230 L170 205 L250 215 L325 250 L420 260 L520 230 L630 205 L735 185 L840 170 L925 165 L895 95 L760 115 L645 145"
            />
          </svg>

          <a
            class="map-logo-placeholder"
            :href="googleMapsRouteUrl"
            target="_blank"
            rel="noopener noreferrer"
            title="Ver ruta en Google Maps"
            aria-label="Ver ruta en Google Maps"
          >
            <img src="/images/log3.png" alt="Urban Moto Experience" class="map-logo-img" />
          </a>

          <template v-for="point in mapPoints" :key="point.id">
            <div
              class="map-point route-map-item"
              :style="{
                '--delay': `${860 + point.id * 90}ms`,
                left: `${point.left}%`,
                top: `${point.top}%`,
              }"
            >
              <span class="map-number">{{ point.id }}</span>
            </div>

            <div
              class="point-image route-map-item"
              :class="`point-image-${point.id}`"
              :style="{
                '--delay': `${900 + point.id * 90}ms`,
                left: `${point.imageLeft}%`,
                top: `${point.imageTop}%`,
              }"
            >
              <img
                v-if="point.image"
                :src="point.image"
                :alt="point.label"
                class="point-image-img"
              />
            </div>

            <strong
              class="map-label route-map-item"
              :class="`map-label-${point.id}`"
              :style="{
                '--delay': `${940 + point.id * 90}ms`,
                left: `${point.labelLeft}%`,
                top: `${point.labelTop}%`,
              }"
            >
              {{ point.label }}
            </strong>
          </template>
        </div>

        <a
          class="route-google-btn"
          :href="googleMapsRouteUrl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Abrir ruta en Google Maps
        </a>

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

const googleMapsRouteUrl =
  'https://www.google.com/maps/dir/Parque+España,+CDMX/Ángel+de+la+Independencia,+CDMX/Lago+de+Chapultepec,+CDMX/Museo+Nacional+de+Antropología,+CDMX/Palacio+de+Bellas+Artes,+CDMX/Monumento+a+la+Revolución,+CDMX'

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
  left: number
  top: number
  labelLeft: number
  labelTop: number
  imageLeft: number
  imageTop: number
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

  const routeStopPositions = [
    { x: 430, y: 455, labelX: 471, labelY: 485, imageX: 472, imageY: 422 },
    { x: 505, y: 300, labelX: 525, labelY: 200, imageX: 479, imageY: 258 },
    { x: 245, y: 305, labelX: 300, labelY: 390, imageX: 212, imageY: 348 },
    { x: 150, y: 250, labelX: 280, labelY: 210, imageX: 114, imageY: 211 },
    { x: 870, y: 240, labelX: 773, labelY: 314, imageX: 840, imageY: 280 },
    { x: 680, y: 175, labelX: 735, labelY: 140, imageX: 635, imageY: 110 },
  ]

  return stops.value.map((stop, index) => ({
    id: stop.id,
    label: stop.title,
    image: images[index] || undefined,
    left: (routeStopPositions[index].x / 1000) * 100,
    top: (routeStopPositions[index].y / 560) * 100,
    labelLeft: (routeStopPositions[index].labelX / 1000) * 100,
    labelTop: (routeStopPositions[index].labelY / 560) * 100,
    imageLeft: (routeStopPositions[index].imageX / 1000) * 100,
    imageTop: (routeStopPositions[index].imageY / 560) * 100,
  }))
})

const stats = computed<Stat[]>(() => [
  {
    icon: '◷',
    label: t('route.stats.duration.label'),
    value: t('route.stats.duration.value'),
    image: '/images/clock.png',
  },
  {
    icon: '⌁',
    label: t('route.stats.distance.label'),
    value: t('route.stats.distance.value'),
    image: '/images/positionicon.png',
  },
  {
    icon: '🏍',
    label: t('route.stats.ride_type.label'),
    value: t('route.stats.ride_type.value'),
    image: '/images/motoicon.png',
  },
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
  min-height: 620px;
  border-radius: 28px;
  overflow: hidden;
  isolation: isolate;
  background:
    linear-gradient(rgba(255, 255, 255, 0.82), rgba(255, 255, 255, 0.86)),
    radial-gradient(circle at 20% 35%, rgba(121, 184, 63, 0.18), transparent 18%),
    radial-gradient(circle at 70% 20%, rgba(121, 184, 63, 0.12), transparent 18%),
    #f7faf4;
  box-shadow: 0 18px 55px rgba(7, 26, 44, 0.08);
}

.map-card::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  background: url('/images/route-map-bg.svg') center / cover no-repeat;
  opacity: 0.42;
  filter: saturate(0.92);
}

.map-grid {
  position: absolute;
  inset: 0;
  opacity: 0.26;
  background-image:
    linear-gradient(25deg, transparent 0 47%, rgba(150, 165, 155, 0.45) 49% 50%, transparent 51%),
    linear-gradient(115deg, transparent 0 47%, rgba(150, 165, 155, 0.35) 49% 50%, transparent 51%),
    linear-gradient(0deg, transparent 0 96%, rgba(150, 165, 155, 0.25) 97% 100%);
  background-size:
    145px 115px,
    180px 140px,
    100px 100px;
}

.route-svg {
  position: absolute;
  inset: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.route-path {
  fill: none;
  stroke: var(--route-green-dark);
  stroke-width: 14;
  stroke-linecap: round;
  stroke-linejoin: round;
  filter: drop-shadow(0 4px 5px rgba(0, 0, 0, 0.16));
  stroke-dasharray: 1200;
  stroke-dashoffset: 1200;
}
.route-path.is-visible {
  animation: drawRoute 2.4s ease forwards;
}

.map-logo-placeholder {
  position: absolute;
  top: 34px;
  right: 54px;
  z-index: 10;
  width: 72px;
  height: auto;
  display: block;
  border-radius: 8px;
  cursor: pointer;
  filter: drop-shadow(0 10px 14px rgba(7, 26, 44, 0.12));
  pointer-events: auto;
  transition:
    filter 0.2s ease,
    transform 0.2s ease;
}

.map-logo-placeholder:hover,
.map-logo-placeholder:focus-visible {
  filter: drop-shadow(0 12px 18px rgba(7, 26, 44, 0.2));
  transform: translateY(-2px) scale(1.04);
}

.map-logo-placeholder:focus-visible {
  outline: 3px solid var(--route-green);
  outline-offset: 4px;
}

.map-logo-img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.route-map-item {
  position: absolute;
  z-index: 5;
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.92);
}

.route-map-item.is-visible {
  animation: pointIn 0.52s cubic-bezier(0.2, 0.9, 0.3, 1.25) forwards;
  animation-delay: var(--delay);
}

.point-image {
  z-index: 6;
  width: 88px;
  height: 88px;
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
  display: none;
}

.map-number {
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border-radius: 999px;
  background: var(--route-green);
  color: var(--um-white);
  font-size: 17px;
  font-weight: 900;
  box-shadow: 0 8px 18px rgba(7, 26, 44, 0.16);
}

.map-point {
  z-index: 8;
}

.map-label {
  z-index: 7;
  max-width: 170px;
  padding: 4px 8px;
  border-radius: 6px;
  background: rgba(247, 250, 244, 0.78);
  color: var(--route-dark);
  font-size: 18px;
  font-weight: 900;
  line-height: 1.05;
  text-transform: uppercase;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.65);
}

.map-label-2 {
  max-width: 190px;
}

.map-label-3,
.map-label-4 {
  max-width: 165px;
}

.map-label-5 {
  max-width: 150px;
  text-align: right;
}

.route-google-btn {
  width: fit-content;
  min-height: 48px;
  margin: 22px auto 0;
  padding: 0 28px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--route-green);
  color: var(--um-white);
  font-size: 17px;
  font-weight: 900;
  letter-spacing: 0.02em;
  text-decoration: none;
  text-transform: uppercase;
  box-shadow: 0 12px 24px rgba(7, 26, 44, 0.14);
  transition:
    background 0.2s ease,
    transform 0.2s ease;
}

.route-google-btn:hover,
.route-google-btn:focus-visible {
  background: var(--route-green-dark);
  transform: translateY(-2px);
}

.route-google-btn:focus-visible {
  outline: 3px solid var(--route-dark);
  outline-offset: 4px;
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
    transform: translate(-50%, -50%) scale(1);
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
    min-height: 560px;
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
    min-height: auto;
    padding: 24px;
    background:
      linear-gradient(rgba(247, 250, 244, 0.9), rgba(247, 250, 244, 0.92)),
      url('/images/route-map-bg.svg') center / cover no-repeat,
      #f7faf4;
  }

  .map-logo-placeholder {
    width: 52px;
    height: auto;
    right: 20px;
  }

  .map-grid,
  .route-svg {
    display: none;
  }

  .route-map-item {
    position: relative;
    top: auto !important;
    left: auto !important;
    transform: none;
    opacity: 0;
  }

  .route-map-item.is-visible {
    opacity: 1;
    transform: none;
    animation: none;
  }

  .map-point {
    display: inline-flex;
    margin: 0 10px 18px 0;
    vertical-align: top;
  }

  .point-image {
    width: 62px;
    height: 62px;
    border-width: 3px;
    display: inline-block;
    margin: 0 12px 18px 0;
  }

  .map-label {
    display: inline-block;
    max-width: calc(100% - 112px);
    margin-top: 14px;
    font-size: 15px;
    text-align: left;
    vertical-align: top;
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
