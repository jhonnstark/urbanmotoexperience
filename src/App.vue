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
          <v-btn class="nav-cta" @click="scrollTo('contact')">{{ $t('nav.book_a_ride') }}</v-btn>
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

<style>
/* Global styles for sticky header */
.v-app-bar.topbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

/* Add padding to main content to account for fixed header */
.v-main {
  padding-top: 118px;
}

@media (max-width: 900px) {
  .v-main {
    padding-top: 80px;
  }
}
</style>

<style scoped>
.topbar {
  padding: 0 36px 0 46px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
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
  color: white;
  background-color: #06240f;
  border-radius: 8px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.16);
  cursor: pointer;
  text-decoration: none;
  font-family: 'Oswald', sans-serif;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  transition: background-color 0.2s ease;
  display: inline-block;
}

.nav-cta:hover {
  background-color: #0a3618;
}

@media (max-width: 1200px) {
  .nav-links {
    gap: 28px;
    font-size: 16px;
  }

  .nav-link {
    font-size: 16px;
  }

  .nav-cta {
    font-size: 16px;
    padding: 14px 20px;
    margin-left: 4px;
  }
}

@media (max-width: 900px) {
  .topbar {
    height: auto;
    min-height: 80px;
    padding: 12px 16px;
  }

  .topbar-content {
    flex-wrap: wrap;
    gap: 12px;
  }

  .brand {
    gap: 12px;
  }

  .brand-shield {
    width: 52px;
    height: 56px;
    border: 2px solid #0e2230;
    box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.45);
  }

  .shield-city {
    top: 12px;
    left: 12px;
    font-size: 16px;
    letter-spacing: -6px;
  }

  .shield-road {
    left: 26px;
    bottom: 8px;
    width: 10px;
    height: 42px;
  }

  .brand-title {
    font-size: 24px;
    letter-spacing: 2px;
  }

  .brand-sub {
    font-size: 13px;
    letter-spacing: 4px;
    margin-top: 4px;
  }

  .brand-city {
    font-size: 14px;
    letter-spacing: 6px;
    margin-top: 6px;
  }

  .nav-links {
    width: 100%;
    justify-content: space-between;
    gap: 8px;
    font-size: 13px;
  }

  .nav-link {
    font-size: 13px;
    letter-spacing: 0.4px;
  }

  .nav-cta {
    font-size: 13px;
    padding: 10px 16px;
    margin-left: 0;
  }
}

@media (max-width: 600px) {
  .brand-title {
    font-size: 20px;
  }

  .brand-sub {
    font-size: 11px;
    letter-spacing: 3px;
  }

  .brand-city {
    font-size: 12px;
    letter-spacing: 4px;
  }

  .nav-links {
    font-size: 11px;
    gap: 6px;
  }

  .nav-link {
    font-size: 11px;
  }

  .nav-cta {
    font-size: 11px;
    padding: 8px 12px;
  }
}
</style>
