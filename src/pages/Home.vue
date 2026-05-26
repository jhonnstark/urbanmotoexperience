<template>
  <div id="home">
    <!-- Hero Section -->
    <section class="hero-section text-white text-center d-flex align-center">
      <v-img
        src="https://via.placeholder.com/1920x1080"
        gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,.8)"
        height="100vh"
        cover
      >
        <v-container class="fill-height">
          <v-row class="fill-height" align="center" justify="center">
            <v-col cols="12" md="8">
              <h1
                class="text-h2 font-weight-bold mb-4"
                style="line-height: 1.2; text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7)"
                v-html="$t('home.hero.title')"
              ></h1>
              <p class="text-h6 font-weight-light mx-auto" style="max-width: 600px">
                {{ $t('home.hero.subtitle') }}
              </p>
              <div class="mt-8">
                <v-btn size="large" color="success" class="mx-2">
                  {{ $t('home.hero.book_button') }}
                  <v-icon right>mdi-arrow-right</v-icon>
                </v-btn>
                <v-btn size="large" variant="outlined" color="white" class="mx-2">
                  {{ $t('home.hero.route_button') }}
                  <v-icon right>mdi-arrow-right</v-icon>
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-img>
    </section>

    <!-- Other Sections -->
    <ExperienceSection />
    <RouteSection />
    <AboutSection />
    <GallerySection />
    <ContactSection />
    <SocialsSection />
  </div>
</template>

<script setup lang="ts">
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import RouteSection from '@/components/sections/RouteSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import GallerySection from '@/components/sections/GallerySection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import SocialsSection from '@/components/sections/SocialsSection.vue'
</script>
