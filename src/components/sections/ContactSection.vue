<template>
  <section id="contact" class="section-container">
    <v-img
      :src="contactImage"
      gradient="to bottom, rgba(0,0,0,.3), rgba(0,0,0,.8)"
      height="100vh"
      cover
      class="d-flex align-center"
    >
      <v-container>
        <v-row class="text-center text-white">
          <v-col cols="12">
            <h2 class="text-h3 font-weight-bold">CONTACT</h2>
            <p class="text-h6 font-weight-light mt-4">Get in touch and book your ride.</p>
          </v-col>
        </v-row>
      </v-container>
    </v-img>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const contactImage = ref('/images/contact_compressed.png')
</script>

<style scoped>
.section-container {
  height: 100vh;
}
</style>
