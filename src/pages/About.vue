<template>
  <v-container class="py-16">
    <v-row>
      <v-col cols="12" md="8" offset-md="2">
        <v-card>
          <v-card-title class="text-h4">{{ $t('pages.about.title') }}</v-card-title>
          <v-card-text>
            <p class="mb-4">{{ $t('pages.about.description') }}</p>
            <v-list>
              <v-list-item>
                <v-list-item-title>✅ Vue 3 with Composition API</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>✅ TypeScript Support</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>✅ Vuetify 3 Components</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>✅ Vue Router with SEO</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>✅ Pinia State Management</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>✅ Vue i18n Internationalization</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>✅ Prettier Code Formatting</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
</script>
