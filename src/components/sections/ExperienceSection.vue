<template>
  <section id="experience" class="py-16">
    <v-container>
      <div class="text-center">
        <p class="text-uppercase font-weight-bold" style="color: #4caf50">
          {{ $t('experience.header.subtitle') }}
        </p>
        <h2 class="text-h3 font-weight-bold mt-2 mb-4" style="color: #2c3e50">
          {{ $t('experience.header.title') }}
        </h2>
        <p class="text-h6 font-weight-light mx-auto" style="max-width: 600px">
          {{ $t('experience.header.description') }}
        </p>
      </div>

      <v-row class="mt-12">
        <v-col v-for="(item, i) in 5" :key="i" cols="12" md="2.4">
          <v-card class="text-center" flat>
            <v-img
              :src="`https://via.placeholder.com/400x300?text=Feature+${i + 1}`"
              height="180px"
              cover
              class="rounded-lg"
            ></v-img>
            <div class="mt-6">
              <v-icon size="x-large" color="green-darken-1">{{
                $t(`experience.features[${i}].icon`)
              }}</v-icon>
              <h3 class="text-h6 font-weight-bold mt-4" style="color: #2c3e50">
                {{ $t(`experience.features[${i}].title`) }}
              </h3>
              <p class="mt-2 px-2">{{ $t(`experience.features[${i}].description`) }}</p>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
// Data is now managed by i18n files
</script>

<style scoped>
.v-card {
  background-color: transparent;
}
</style>
