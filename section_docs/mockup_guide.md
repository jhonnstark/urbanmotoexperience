# Mockup Component Guide

This document outlines the HTML structure and styling used to create the components from the design mockups. This guide can be reused by other agents to create new components with a consistent style.

## Section Structure

Each content section should be wrapped in a `<section>` tag with appropriate padding.

```html
<section class="py-16">
  <v-container>
    <!-- Section Content Goes Here -->
  </v-container>
</section>
```

## Typography

- **Section Subtitle**: Small, uppercase, bold, and green.
  - **HTML**: `<p class="text-uppercase font-weight-bold" style="color: #4caf50;">...</p>`
- **Main Section Title**: `h2` with `text-h3` class, bold, and dark blue/grey color.
  - **HTML**: `<h2 class="text-h3 font-weight-bold mt-2 mb-4" style="color: #2c3e50;">...</h2>`
- **Section Description**: `p` with `text-h6` class, light weight, and a max-width for readability.
  - **HTML**: `<p class="text-h6 font-weight-light mx-auto" style="max-width: 600px;">...</p>`
- **Card/Feature Title**: `h3` with `text-h6` class, bold, and dark blue/grey color.
  - **HTML**: `<h3 class="text-h6 font-weight-bold mt-4" style="color: #2c3e50;">...</h3>`

## Card Layout (`What's Included` Section)

This layout is used for a 5-item feature list.

- **Grid**: A `v-row` containing five `v-col` elements. Each `v-col` has `cols="12" md="2.4"`.
- **Card**: A `v-card` with `flat` and `text-center` props. The background should be transparent.
- **Card Image**: `v-img` with a fixed height and rounded corners (`rounded-lg`).
- **Card Icon**: `v-icon` with `size="x-large"` and a green color.
- **Card Content**: A `div` containing the icon, title, and description.

### Example Structure:

```html
<v-row class="mt-12">
  <v-col v-for="item in items" :key="item.title" cols="12" md="2.4">
    <v-card class="text-center" flat>
      <v-img :src="item.image" height="180px" cover class="rounded-lg"></v-img>
      <div class="mt-6">
        <v-icon size="x-large" color="green-darken-1">{{ item.icon }}</v-icon>
        <h3 class="text-h6 font-weight-bold mt-4" style="color: #2c3e50;">{{ item.title }}</h3>
        <p class="mt-2 px-2">{{ item.description }}</p>
      </div>
    </v-card>
  </v-col>
</v-row>
```
