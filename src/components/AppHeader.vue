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
    </div>
  </v-app-bar>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isScrolled = ref(false)

const updateTopbarState = () => {
  isScrolled.value = window.scrollY > 4
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

onMounted(() => {
  updateTopbarState()
  window.addEventListener('scroll', updateTopbarState, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateTopbarState)
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
    height: auto;
    min-height: 80px;
    padding: 12px 16px;
  }

  .topbar--scrolled {
    min-height: 72px;
    padding: 8px 16px;
  }

  .topbar-content {
    flex-wrap: wrap;
    gap: 12px;
  }

  .brand {
    width: 76px;
    height: 50px;
  }

  .brand-logo {
    height: 50px;
  }

  .topbar--scrolled .brand-logo {
    height: 42px;
    transform: translate(-50%, -50%) scale(0.98);
  }

  .nav-links {
    width: 100%;
    justify-content: space-between;
    gap: 8px;
    font-size: 13px;
  }

  .topbar--scrolled .nav-links {
    gap: 8px;
    font-size: 12px;
  }

  .nav-link {
    font-size: 13px;
    letter-spacing: 0.4px;
  }

  .topbar--scrolled .nav-link {
    font-size: 12px;
  }

  .nav-cta {
    margin-left: 0;
    padding: 10px 16px;
    font-size: 13px;
  }

  .topbar--scrolled .nav-cta {
    padding: 8px 14px;
    font-size: 12px;
  }
}

@media (max-width: 600px) {
  .brand {
    width: 68px;
    height: 44px;
  }

  .brand-logo {
    height: 44px;
  }

  .topbar--scrolled .brand-logo {
    height: 38px;
    transform: translate(-50%, -50%) scale(0.98);
  }

  .nav-links {
    gap: 6px;
    font-size: 11px;
  }

  .nav-link {
    font-size: 11px;
  }

  .topbar--scrolled .nav-link {
    font-size: 10px;
  }

  .nav-cta {
    padding: 8px 12px;
    font-size: 11px;
  }

  .topbar--scrolled .nav-cta {
    padding: 7px 10px;
    font-size: 10px;
  }
}
</style>
