<template>
  <v-app-bar
    app
    color="white"
    :height="isScrolled ? 84 : 118"
    flat
    class="topbar"
    :class="{ 'topbar--scrolled': isScrolled }"
  >
    <div class="topbar-content">
      <a
        class="brand"
        href="#"
        @click.prevent="scrollTo('home')"
        aria-label="Urban Moto Experience CDMX home"
      >
        <img
          src="/images/log3-1x.png"
          srcset="/images/log3-1x.png 1x, /images/log3.png 2x"
          alt="Urban Moto Experience CDMX"
          class="brand-logo"
          width="371"
          height="356"
          decoding="async"
        />
      </a>

      <nav class="nav-links" aria-label="Main navigation">
        <a class="nav-link" @click="scrollTo('about')" data-testid="nav-about">{{
          $t('nav.about')
        }}</a>
        <a class="nav-link" @click="scrollTo('route')" data-testid="nav-route">{{
          $t('nav.route')
        }}</a>
        <a class="nav-link" @click="scrollTo('experience')" data-testid="nav-experience">{{
          $t('nav.experience')
        }}</a>
        <a class="nav-link" @click="scrollTo('socials')" data-testid="nav-socials">{{
          $t('nav.socials')
        }}</a>
        <v-btn class="nav-cta" @click="scrollTo('contact')">{{ $t('nav.book_a_ride') }}</v-btn>
      </nav>

      <nav class="mobile-section-nav" aria-label="Mobile section navigation">
        <button
          class="mobile-nav-arrow"
          :class="{ 'mobile-nav-arrow--hidden': !hasPreviousSection }"
          type="button"
          :aria-label="`Ir a ${previousSectionLabel}`"
          :aria-hidden="!hasPreviousSection"
          :tabindex="hasPreviousSection ? 0 : -1"
          @click="navigateSection(-1)"
        >
          <ChevronLeft :size="28" :stroke-width="2.4" aria-hidden="true" />
        </button>

        <button
          class="mobile-section-current"
          type="button"
          :aria-label="currentSectionId === 'home' ? 'Urban Moto Experience CDMX home' : currentSectionLabel"
          @click="scrollTo(currentSectionId)"
        >
          <span class="mobile-logo-frame" :class="{ 'is-hidden': currentSectionId !== 'home' }">
            <img
              src="/images/log3-1x.png"
              srcset="/images/log3-1x.png 1x, /images/log3.png 2x"
              alt="Urban Moto Experience CDMX"
              class="mobile-brand-logo"
              width="371"
              height="356"
              decoding="async"
            />
          </span>
          <span
            :key="currentSectionId"
            class="mobile-section-title"
            :class="{ 'is-visible': currentSectionId !== 'home' }"
          >
            {{ currentSectionLabel }}
          </span>
        </button>

        <button
          class="mobile-nav-arrow"
          :class="{ 'mobile-nav-arrow--hidden': !hasNextSection }"
          type="button"
          :aria-label="`Ir a ${nextSectionLabel}`"
          :aria-hidden="!hasNextSection"
          :tabindex="hasNextSection ? 0 : -1"
          @click="navigateSection(1)"
        >
          <ChevronRight :size="28" :stroke-width="2.4" aria-hidden="true" />
        </button>
      </nav>
    </div>
  </v-app-bar>
</template>

<script setup lang="ts">
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const router = useRouter()
const { t, te } = useI18n()
const isScrolled = ref(false)
const currentSectionId = ref('home')

const sectionOrder = ['home', 'about', 'route', 'experience', 'gallery', 'socials', 'contact'] as const
type SectionId = (typeof sectionOrder)[number]

const sectionTitleKeys: Record<SectionId, string> = {
  home: 'nav.home',
  about: 'nav.about',
  route: 'nav.route',
  experience: 'nav.experience',
  gallery: 'nav.gallery',
  socials: 'nav.socials',
  contact: 'nav.contact',
}

const sectionFallbackLabels: Record<SectionId, string> = {
  home: 'Inicio',
  about: 'Acerca de',
  route: 'Ruta',
  experience: 'Experiencia',
  gallery: 'Galeria',
  socials: 'Socials',
  contact: 'Contacto',
}

const getSectionLabel = (id: SectionId) => {
  const key = sectionTitleKeys[id]
  return te(key) ? t(key) : sectionFallbackLabels[id]
}

const currentSectionIndex = computed(() =>
  Math.max(0, sectionOrder.indexOf(currentSectionId.value as SectionId)),
)
const currentSectionLabel = computed(() => getSectionLabel(sectionOrder[currentSectionIndex.value]))
const hasPreviousSection = computed(() => currentSectionIndex.value > 0)
const hasNextSection = computed(() => currentSectionIndex.value < sectionOrder.length - 1)
const previousSectionLabel = computed(() =>
  hasPreviousSection.value ? getSectionLabel(sectionOrder[currentSectionIndex.value - 1]) : '',
)
const nextSectionLabel = computed(() =>
  hasNextSection.value ? getSectionLabel(sectionOrder[currentSectionIndex.value + 1]) : '',
)

const getSectionElement = (id: SectionId) => {
  if (id === 'home') {
    return document.querySelector<HTMLElement>('.hero')
  }

  return document.getElementById(id)
}

const updateTopbarState = () => {
  isScrolled.value = window.scrollY > 4
}

const updateActiveSection = () => {
  const marker = window.scrollY + window.innerHeight * 0.34
  let active: SectionId = 'home'

  sectionOrder.forEach((id) => {
    const element = getSectionElement(id)
    if (!element) {
      return
    }

    const top = element.getBoundingClientRect().top + window.scrollY
    if (top <= marker) {
      active = id
    }
  })

  currentSectionId.value = active
}

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

const navigateSection = (direction: -1 | 1) => {
  const nextIndex = currentSectionIndex.value + direction
  if (nextIndex < 0 || nextIndex >= sectionOrder.length) {
    return
  }

  scrollTo(sectionOrder[nextIndex])
}

onMounted(() => {
  updateTopbarState()
  updateActiveSection()
  window.addEventListener('scroll', updateTopbarState, { passive: true })
  window.addEventListener('scroll', updateActiveSection, { passive: true })
  window.addEventListener('resize', updateActiveSection, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateTopbarState)
  window.removeEventListener('scroll', updateActiveSection)
  window.removeEventListener('resize', updateActiveSection)
})
</script>

<style scoped>
.topbar {
  left: 0;
  right: 0;
  padding: 8px 36px;
  background: var(--um-white);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  z-index: 1000;
  transition:
    height 0.22s ease,
    padding 0.22s ease,
    box-shadow 0.22s ease;
}

.topbar--scrolled {
  padding: 6px 36px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12);
}

.topbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0 20px;
}

.brand {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 80px;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  transition: height 0.22s ease;
}

.topbar--scrolled .brand {
  height: 56px;
}

.brand-logo {
  position: absolute;
  top: 50%;
  left: 50%;
  width: auto;
  height: 80px;
  object-fit: contain;
  transform-origin: center center;
  transform: translate(-50%, -50%) scale(1);
  transition:
    height 0.22s cubic-bezier(0.55, 0.09, 0.68, 0.53),
    transform 0.22s cubic-bezier(0.4, 0, 1, 1);
}

.topbar--scrolled .brand-logo {
  height: 56px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 54px;
  font-family: 'Oswald', sans-serif;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  transition:
    gap 0.22s ease-in,
    font-size 0.22s ease;
}

.topbar--scrolled .nav-links {
  gap: 38px;
  font-size: 15px;
}

.nav-link {
  padding: 0;
  border: none;
  background: none;
  color: var(--um-navy);
  font-family: 'Oswald', sans-serif;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.6px;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  transition:
    opacity 0.2s ease,
    font-size 0.22s ease;
}

.topbar--scrolled .nav-link {
  font-size: 15px;
}

.nav-link:hover {
  opacity: 0.7;
}

.nav-cta {
  display: inline-block;
  margin-left: 6px;
  padding: 18px 28px;
  border-radius: 8px;
  background: var(--um-green-deep);
  color: var(--um-white) !important;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.16);
  font-family: 'Oswald', sans-serif;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.6px;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    font-size 0.22s ease,
    padding 0.22s ease,
    box-shadow 0.22s ease;
}

.topbar--scrolled .nav-cta {
  padding: 13px 22px;
  font-size: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.14);
}

.nav-cta:hover {
  background: var(--um-green-dark);
}

.mobile-section-nav {
  display: none;
}

@media (max-width: 1200px) {
  .nav-links {
    gap: 28px;
    font-size: 16px;
  }

  .topbar--scrolled .nav-links {
    gap: 22px;
    font-size: 14px;
  }

  .nav-link {
    font-size: 16px;
  }

  .topbar--scrolled .nav-link {
    font-size: 14px;
  }

  .nav-cta {
    margin-left: 4px;
    padding: 14px 20px;
    font-size: 16px;
  }

  .topbar--scrolled .nav-cta {
    padding: 11px 18px;
    font-size: 14px;
  }
}

@media (max-width: 900px) {
  .topbar {
    height: 76px !important;
    min-height: 76px;
    padding: 10px 14px;
  }

  .topbar--scrolled {
    height: 70px !important;
    min-height: 70px;
    padding: 8px 14px;
  }

  .topbar-content {
    justify-content: center;
    padding: 0;
  }

  .brand,
  .nav-links {
    display: none;
  }

  .mobile-section-nav {
    width: min(100%, 420px);
    height: 54px;
    display: grid;
    grid-template-columns: 54px minmax(0, 1fr) 54px;
    align-items: center;
    gap: 8px;
  }

  .mobile-nav-arrow {
    width: 46px;
    height: 46px;
    border: 0;
    border-radius: 999px;
    display: grid;
    place-items: center;
    justify-self: center;
    background: rgba(7, 26, 44, 0.06);
    color: var(--um-navy);
    cursor: pointer;
    transition:
      background 0.2s ease,
      color 0.2s ease,
      opacity 0.2s ease,
      transform 0.2s ease;
  }

  .mobile-nav-arrow:hover,
  .mobile-nav-arrow:focus-visible {
    background: var(--um-green-primary);
    color: var(--um-white);
    transform: translateY(-1px);
  }

  .mobile-nav-arrow:focus-visible {
    outline: 3px solid rgba(121, 184, 63, 0.36);
    outline-offset: 2px;
  }

  .mobile-nav-arrow--hidden {
    opacity: 0;
    pointer-events: none;
    transform: scale(0.86);
  }

  .mobile-section-current {
    position: relative;
    height: 54px;
    min-width: 0;
    border: 0;
    border-radius: 999px;
    background: transparent;
    color: var(--um-navy);
    cursor: pointer;
    overflow: hidden;
    display: grid;
    place-items: center;
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
  }

  .mobile-logo-frame {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    opacity: 1;
    transform: translateY(0) rotateX(0deg);
    transition:
      opacity 0.32s ease,
      transform 0.42s cubic-bezier(0.22, 0.85, 0.2, 1);
  }

  .mobile-logo-frame.is-hidden {
    opacity: 0;
    transform: translateY(-26px) rotateX(58deg);
  }

  .mobile-brand-logo {
    width: auto;
    height: 52px;
    object-fit: contain;
    filter: drop-shadow(0 6px 10px rgba(7, 26, 44, 0.1));
  }

  .mobile-section-title {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    padding: 0 10px;
    opacity: 0;
    color: var(--um-navy);
    font-size: 20px;
    font-weight: 800;
    line-height: 1;
    letter-spacing: 0.04em;
    white-space: nowrap;
    transform: translateY(28px) rotateX(-62deg);
    transform-origin: center;
    text-align: center;
  }

  .mobile-section-title.is-visible {
    animation: mobileTitleReel 0.46s cubic-bezier(0.22, 0.85, 0.2, 1) forwards;
  }
}

@media (max-width: 600px) {
  .topbar {
    height: 70px !important;
    min-height: 70px;
    padding-inline: 10px;
  }

  .mobile-section-nav {
    grid-template-columns: 48px minmax(0, 1fr) 48px;
    gap: 4px;
  }

  .mobile-nav-arrow {
    width: 42px;
    height: 42px;
  }

  .mobile-brand-logo {
    height: 48px;
  }

  .mobile-section-title {
    font-size: 18px;
  }
}

@keyframes mobileTitleReel {
  0% {
    opacity: 0;
    filter: blur(4px);
    transform: translateY(28px) rotateX(-62deg);
  }

  62% {
    opacity: 1;
    filter: blur(0);
    transform: translateY(-4px) rotateX(8deg);
  }

  100% {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0) rotateX(0deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .mobile-logo-frame,
  .mobile-logo-frame.is-hidden,
  .mobile-section-title,
  .mobile-section-title.is-visible {
    animation: none !important;
    filter: none !important;
    transform: none !important;
  }

  .mobile-logo-frame.is-hidden {
    opacity: 0;
  }

  .mobile-section-title.is-visible {
    opacity: 1;
  }
}
</style>
