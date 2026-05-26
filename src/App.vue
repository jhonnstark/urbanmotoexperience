<template>
  <v-app>
    <v-app-bar app color="white" height="118" flat>
      <v-toolbar-title>
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
      </v-toolbar-title>

      <v-spacer />

      <nav class="nav-links" aria-label="Main navigation">
        <v-btn text @click="scrollTo('experience')" data-testid="nav-experience">{{
          $t('nav.experience')
        }}</v-btn>
        <v-btn text @click="scrollTo('route')" data-testid="nav-route">{{ $t('nav.route') }}</v-btn>
        <v-btn text @click="scrollTo('about')" data-testid="nav-about">{{ $t('nav.about') }}</v-btn>
        <v-btn text @click="scrollTo('faq')" data-testid="nav-faq">{{ $t('nav.faq') }}</v-btn>
        <v-btn
          class="nav-cta"
          color="dark-green"
          dark
          @click="scrollTo('book')"
          data-testid="nav-book-a-ride"
          >{{ $t('nav.book_a_ride') }}</v-btn
        >
      </nav>
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
.brand {
  display: flex;
  align-items: center;
  gap: 18px;
  text-decoration: none;
  color: inherit;
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

.nav-links .v-btn {
  color: #101820;
  text-decoration: none;
}

.nav-cta {
  margin-left: 6px;
  padding: 18px 28px;
  color: white !important;
  background: #06240f;
  border-radius: 8px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.16);
}
</style>
