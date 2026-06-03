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
          <img src="/images/log3.png" alt="Urban Moto Experience CDMX" class="brand-logo" />
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
          <a class="nav-link" @click="scrollTo('socials')" data-testid="nav-socials">{{ $t('nav.socials') }}</a>
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
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

.brand-logo {
  height: 80px;
  width: auto;
  object-fit: contain;
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
  color: var(--um-navy);
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
  color: var(--um-white) !important;
  background: var(--um-green-deep);
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
  background: var(--um-green-dark);
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

  .brand-logo {
    height: 50px;
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
  .brand-logo {
    height: 44px;
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
