<template>
  <v-app>
    <v-app-bar app color="transparent" dark absolute>
      <v-toolbar-title class="font-weight-bold">
        <div class="d-flex align-center">
          <v-img src="/images/logo.png" height="40" width="40" contain class="mr-2" />
          <span>URBAN MOTO</span>
        </div>
      </v-toolbar-title>
      <v-spacer />
      <v-btn text @click="scrollTo('home')" data-testid="nav-home">{{ $t('nav.home') }}</v-btn>
      <v-btn text @click="scrollTo('experience')" data-testid="nav-experience">{{
        $t('nav.experience')
      }}</v-btn>
      <v-btn text @click="scrollTo('route')" data-testid="nav-route">{{ $t('nav.route') }}</v-btn>
      <v-btn text @click="scrollTo('about')" data-testid="nav-about">{{ $t('nav.about') }}</v-btn>
      <v-btn text @click="scrollTo('gallery')" data-testid="nav-gallery">{{
        $t('nav.gallery')
      }}</v-btn>
      <v-btn text @click="scrollTo('contact')" data-testid="nav-contact">{{
        $t('nav.contact')
      }}</v-btn>
      <v-btn color="success" class="ml-4" data-testid="nav-book-a-ride">{{
        $t('nav.book_a_ride')
      }}</v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify'
import { useRouter } from 'vue-router'

const theme = useTheme()
const router = useRouter()

const scrollTo = (id: string) => {
  router.push(`/#${id}`)
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.v-btn {
  text-transform: none;
  font-weight: 600;
}
</style>
