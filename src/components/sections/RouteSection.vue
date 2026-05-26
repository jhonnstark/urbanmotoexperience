<template>
  <section id="route" class="py-16">
    <v-container>
      <v-row align="center">
        <v-col cols="12" md="5">
          <p class="text-uppercase font-weight-bold" style="color: #4caf50">
            {{ $t('route.header.subtitle') }}
          </p>
          <h2 class="text-h3 font-weight-bold mt-2 mb-4" style="color: #2c3e50">
            {{ $t('route.header.title') }}
          </h2>
          <p class="text-body-1 mb-8">
            {{ $t('route.header.description') }}
          </p>

          <div v-for="(stop, index) in 6" :key="index" class="d-flex align-start mb-6">
            <v-avatar color="green" size="32" class="mr-4 mt-1">
              <span class="white--text font-weight-bold">{{ index + 1 }}</span>
            </v-avatar>
            <div>
              <h3 class="text-h6 font-weight-bold" style="color: #2c3e50">
                {{ $t(`route.stops[${index}].name`) }}
              </h3>
              <p>{{ $t(`route.stops[${index}].description`) }}</p>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="7">
          <v-img
            src="https://via.placeholder.com/800x600?text=Route+Map"
            class="rounded-lg"
            contain
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
// Data is now managed by i18n files
</script>
