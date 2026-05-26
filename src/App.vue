<template>
  <v-app>
    <v-app-bar app color="white" height="118" flat class="topbar">
      <div class="topbar-content">
        <a
          class="brand"
          href="#"
          @click.prevent="scrollTo('home')"
          aria-label="Urban Moto Experience CDMX home"
        >
          <div class="brand-shield">
            <span class="shield-city">▴▴</span>
            <span class="shield-road"></span>
          </div>
          <div class="brand-copy">
            <span class="brand-title">Urban Moto</span>
            <span class="brand-sub">✦ Experience ✦</span>
            <span class="brand-city">CDMX</span>
          </div>
        </a>

        <nav class="nav-links" aria-label="Main navigation">
          <a class="nav-link" @click="scrollTo('experience')" data-testid="nav-experience">{{
            $t('nav.experience')
          }}</a>
          <a class="nav-link" @click="scrollTo('route')" data-testid="nav-route">{{
            $t('nav.route')
          }}</a>
          <a class="nav-link" @click="scrollTo('about')" data-testid="nav-about">{{
            $t('nav.about')
          }}</a>
          <a class="nav-link" @click="scrollTo('faq')" data-testid="nav-faq">{{ $t('nav.faq') }}</a>
          <a class="nav-cta" @click="scrollTo('book')" data-testid="nav-book-a-ride">{{
            $t('nav.book_a_ride')
          }}</a>
        </nav>
      </div>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

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
.topbar {
  padding: 0 36px 0 46px !important;
}

.topbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}

.brand {
  display: flex;
  align-items: center;
  gap: 18px;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

.brand-shield {
  width: 84px;
  height: 88px;
  clip-path: polygon(50% 0, 96% 18%, 86% 76%, 50% 100%, 14% 76%, 4% 18%);
  border: 3px solid #0e2230;
  background: linear-gradient(145deg, #eaf0ef 0%, #0a2530 48%, #07150d 100%);
  position: relative;
  box-shadow: inset 0 0 0 3px rgba(255, 255, 255, 0.45);
}

.shield-city {
  position: absolute;
  top: 18px;
  left: 18px;
  color: white;
  font-size: 20px;
  letter-spacing: -8px;
  opacity: 0.9;
}

.shield-road {
  position: absolute;
  left: 33px;
  bottom: 11px;
  width: 14px;
  height: 56px;
  border-radius: 999px;
  background: linear-gradient(#94c943, #eaf3d2);
  transform: rotate(-32deg);
  opacity: 0.9;
}

.brand-copy {
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1;
  text-transform: uppercase;
}

.brand-title {
  font-size: 38px;
  font-weight: 700;
  letter-spacing: 3px;
  font-family: 'Oswald', sans-serif;
}

.brand-sub {
  margin-top: 6px;
  color: #8cc63f;
  font-size: 17px;
  font-weight: 700;
  letter-spacing: 6px;
  font-family: 'Oswald', sans-serif;
}

.brand-city {
  margin-top: 8px;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 8px;
  font-family: 'Oswald', sans-serif;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 54px;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.6px;
  font-family: 'Oswald', sans-serif;
}

.nav-link {
  color: #101820;
  text-decoration: none;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  font-family: 'Oswald', sans-serif;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  transition: opacity 0.2s ease;
}

.nav-link:hover {
  opacity: 0.7;
}

.nav-cta {
  margin-left: 6px;
  padding: 18px 28px;
  color: white !important;
  background: #06240f;
  border-radius: 8px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.16);
  cursor: pointer;
  text-decoration: none;
  font-family: 'Oswald', sans-serif;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  transition: background 0.2s ease;
  display: inline-block;
}

.nav-cta:hover {
  background: #0a3618;
}

@media (max-width: 900px) {
  .topbar {
    height: auto !important;
    min-height: 96px;
    padding: 18px 22px !important;
  }

  .brand-title {
    font-size: 28px;
  }

  .brand-shield {
    width: 64px;
    height: 68px;
  }

  .nav-link:not(.nav-cta) {
    display: none;
  }

  .nav-links {
    gap: 0;
  }
}
</style>
