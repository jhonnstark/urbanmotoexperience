<template>
  <section id="socials" class="section-container">
    <v-img
      :src="socialsImage"
      gradient="to bottom, rgba(0,0,0,.3), rgba(0,0,0,.8)"
      height="100vh"
      cover
      class="d-flex align-center"
    >
      <v-container>
        <v-row class="text-center text-white">
          <v-col cols="12">
            <h2 class="text-h3 font-weight-bold">SOCIALS</h2>
            <p class="text-h6 font-weight-light mt-4">Follow our journey.</p>
          </v-col>
        </v-row>
      </v-container>
    </v-img>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const socialsImage = ref('/images/socials_compressed.png')
</script>

<style scoped>
.section-container {
  height: 100vh;
}
</style>
