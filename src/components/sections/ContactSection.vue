<template>
  <section id="contact" class="bg-grey-darken-4 text-white py-16">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <h2 class="text-h3 font-weight-bold" style="line-height: 1.2">
            {{ $t('contact.title_part1') }}
            <span style="color: #4caf50">{{ $t('contact.title_part2') }}</span>
          </h2>
          <p class="text-h6 font-weight-light mt-4">{{ $t('contact.subtitle') }}</p>

          <v-btn
            size="large"
            color="success"
            class="mt-8"
            href="https://wa.me/yourphonenumber"
            target="_blank"
            block
          >
            <v-icon left class="mr-2">mdi-whatsapp</v-icon>
            {{ $t('contact.whatsapp_button') }}
          </v-btn>

          <v-btn
            size="large"
            variant="outlined"
            color="white"
            class="mt-4"
            href="https://instagram.com/yourprofile"
            target="_blank"
            block
          >
            <v-icon left class="mr-2">mdi-instagram</v-icon>
            {{ $t('contact.instagram_button') }}
          </v-btn>

          <v-divider class="my-8"></v-divider>

          <div class="d-flex justify-space-around">
            <div v-for="(feature, i) in 4" :key="i" class="text-center">
              <v-icon>{{ $t(`contact.features[${i}].icon`) }}</v-icon>
              <p class="mt-1 text-caption">{{ $t(`contact.features[${i}].text`) }}</p>
            </div>
          </div>
        </v-col>

        <v-col cols="12" md="6">
          <v-img
            src="https://via.placeholder.com/600x700?text=Contact+Image"
            class="rounded-lg"
            height="100%"
            cover
          ></v-img>
        </v-col>
      </v-row>

      <v-row class="mt-12 text-center">
        <v-col v-for="(item, i) in 3" :key="i" cols="12" md="4">
          <v-card flat color="transparent">
            <div class="text-center">
              <v-icon size="x-large" color="green-lighten-1">{{
                $t(`contact.highlights[${i}].icon`)
              }}</v-icon>
              <h3 class="text-h6 font-weight-bold mt-4">
                {{ $t(`contact.highlights[${i}].title`) }}
              </h3>
              <p class="mt-2">{{ $t(`contact.highlights[${i}].description`) }}</p>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
//
</script>
