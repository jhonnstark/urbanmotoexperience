<template>
  <section id="gallery" class="py-16 text-center">
    <v-container>
      <p class="text-uppercase font-weight-bold" style="color: #4caf50">
        {{ $t('gallery.header.subtitle') }}
      </p>
      <h2 class="text-h3 font-weight-bold mt-2 mb-4" style="color: #2c3e50">
        {{ $t('gallery.header.title') }}
      </h2>
      <p class="text-h6 font-weight-light mx-auto" style="max-width: 600px">
        {{ $t('gallery.header.description') }}
      </p>

      <v-row class="mt-12">
        <v-col v-for="(item, i) in 6" :key="i" cols="12" md="4">
          <v-card class="overflow-hidden rounded-lg">
            <v-img
              :src="`https://via.placeholder.com/600x400?text=Gallery+Image+${i + 1}`"
              aspect-ratio="1.5"
              cover
              class="gallery-image"
            ></v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
//
</script>

<style scoped>
.gallery-image {
  transition: transform 0.3s ease-in-out;
}

.gallery-image:hover {
  transform: scale(1.05);
}
</style>
