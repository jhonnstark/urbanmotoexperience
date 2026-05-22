<template>
  <v-container class="py-16">
    <v-row>
      <v-col cols="12" class="text-center">
        <h1 class="text-h2 font-weight-bold mb-4">{{ $t('pages.home.title') }}</h1>
        <p class="text-h6">{{ $t('pages.home.description') }}</p>
      </v-col>
    </v-row>
    <v-row class="mt-8">
      <v-col cols="12" md="4">
        <v-card>
          <v-card-title>🚀 Fast</v-card-title>
          <v-card-text>Built with Vite for lightning-fast development</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card>
          <v-card-title>🎨 Beautiful</v-card-title>
          <v-card-text>Vuetify components for stunning UI</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card>
          <v-card-title>🌍 Global</v-card-title>
          <v-card-text>i18n support for multiple languages</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
</script>
