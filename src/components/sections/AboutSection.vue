<template>
  <section id="about" class="py-16">
    <v-container>
      <v-row align="center">
        <v-col cols="12" md="6">
          <p class="text-uppercase font-weight-bold" style="color: #4caf50">
            {{ $t('about.header.subtitle') }}
          </p>
          <h2
            class="text-h3 font-weight-bold mt-2 mb-4"
            style="color: #2c3e50"
            v-html="$t('about.header.title')"
          ></h2>
          <p class="text-body-1">
            {{ $t('about.header.description') }}
          </p>

          <v-row class="mt-8">
            <v-col v-for="(item, i) in 5" :key="i" cols="6" class="d-flex align-center">
              <v-icon color="green-darken-1" class="mr-3">{{
                $t(`about.features[${i}].icon`)
              }}</v-icon>
              <span>{{ $t(`about.features[${i}].text`) }}</span>
            </v-col>
          </v-row>

          <v-btn variant="outlined" color="green-darken-1" size="large" class="mt-8">
            {{ $t('about.learn_more_button') }}
            <v-icon right>mdi-arrow-right</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="12" md="6">
          <v-img
            src="https://via.placeholder.com/600x500?text=About+Us"
            class="rounded-lg"
            height="500"
            cover
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
// Data is now managed by i18n files
</script>
