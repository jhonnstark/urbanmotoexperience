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
      <v-btn text @click="scrollTo('home')">Home</v-btn>
      <v-btn text @click="scrollTo('experience')">Experience</v-btn>
      <v-btn text @click="scrollTo('route')">Route</v-btn>
      <v-btn text @click="scrollTo('about')">About Us</v-btn>
      <v-btn text @click="scrollTo('gallery')">Gallery</v-btn>
      <v-btn text @click="scrollTo('contact')">Contact</v-btn>
      <v-btn color="success" class="ml-4">BOOK A RIDE</v-btn>
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
