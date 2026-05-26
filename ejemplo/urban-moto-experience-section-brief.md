# Urban Moto Experience — “What’s Included” Section Brief

Use this brief to implement a Vue 3 + TypeScript component that visually matches the provided reference image `experience.png`.

## Target component

Create or replace:

```txt
src/components/sections/ExperienceSection.vue
```

This section should sit after the hero and before/near the route section. It should match the same visual system already used by `HomeView.vue` and `RouteSection.vue`:

- Vue 3 Composition API with `<script setup lang="ts">`
- Scoped CSS
- `vue-i18n` translations using `useI18n()`
- Fonts: `Bebas Neue` for large titles, `Oswald` for labels/navigation, system font for paragraph text
- Main colors:
  - dark navy: `#071a2c`
  - green: `#79b83f`
  - muted body: `#172234`
  - soft white/off-white: `#ffffff`, `#f7faf4`

## Visual reference

The reference section has:

1. Centered eyebrow text: `EXPERIENCE FEATURES`
2. Small centered green line below eyebrow
3. Large centered heading: `WHAT’S INCLUDED`
4. Centered paragraph subtitle:
   `We take care of the details so you can enjoy the city, the ride, and the experience.`
5. Five feature cards in one horizontal row on desktop.
6. Each card includes:
   - A tall rounded image at the top
   - An outlined green/navy icon below the image
   - Bold uppercase feature title
   - Short paragraph description
7. Cards have a white background, very soft shadows, and rounded corners.
8. The card row has equal spacing and should feel like a premium tourism landing page.

## Layout details

Desktop reference:

```txt
[ centered header ]

[card 1] [card 2] [card 3] [card 4] [card 5]
```

Approximate section sizing:

- Section padding: `80px 42px 70px`
- Max container width: `1450px`
- Header max width: `680px`
- Card row: `grid-template-columns: repeat(5, 1fr)`
- Card image ratio: about `1 / 1.32`, rounded `10px`
- Card content padding: `28px 28px 34px`

Responsive behavior:

- At `max-width: 1200px`: 3 columns
- At `max-width: 820px`: 2 columns
- At `max-width: 560px`: 1 column

## Feature cards

Use this feature data:

```ts
const features = computed<Feature[]>(() => [
  {
    key: 'helmet',
    title: t('experience.features.helmet.title'),
    description: t('experience.features.helmet.description'),
    image: '/images/experience/extra-helmet.png',
    icon: HelmetIcon,
  },
  {
    key: 'photos',
    title: t('experience.features.photos.title'),
    description: t('experience.features.photos.description'),
    image: '/images/experience/photo-stops.png',
    icon: CameraIcon,
  },
  {
    key: 'stories',
    title: t('experience.features.stories.title'),
    description: t('experience.features.stories.description'),
    image: '/images/experience/local-stories.png',
    icon: MicIcon,
  },
  {
    key: 'driver',
    title: t('experience.features.driver.title'),
    description: t('experience.features.driver.description'),
    image: '/images/experience/driver-included.png',
    icon: BikeIcon,
  },
  {
    key: 'coffee',
    title: t('experience.features.coffee.title'),
    description: t('experience.features.coffee.description'),
    image: '/images/experience/coffee-stop.png',
    icon: CoffeeIcon,
  },
])
```

Suggested English i18n values:

```json
{
  "experience": {
    "header": {
      "subtitle": "EXPERIENCE FEATURES",
      "title": "WHAT’S INCLUDED",
      "description": "We take care of the details so you can enjoy the city, the ride, and the experience."
    },
    "features": {
      "helmet": {
        "title": "EXTRA HELMET",
        "description": "High quality helmets for your safety and comfort."
      },
      "photos": {
        "title": "PHOTO STOPS",
        "description": "Beautiful spots along the route to take amazing pictures."
      },
      "stories": {
        "title": "LOCAL STORIES",
        "description": "Discover the city through stories, history and local insights."
      },
      "driver": {
        "title": "DRIVER INCLUDED",
        "description": "Relax and enjoy the ride. Our professional drivers take care of everything."
      },
      "coffee": {
        "title": "OPTIONAL COFFEE STOP",
        "description": "We can make a stop at a great local coffee spot if you’d like."
      }
    }
  }
}
```

## Animation requirements

Animate similarly to the hero and route components:

- Header fades/slides up first.
- Cards fade up with staggered delays.
- Image inside each card can slightly scale from `1.04` to `1`.
- Icons can appear after the image using a small pop-in animation.
- Support `prefers-reduced-motion` by disabling animations.

Recommended timings:

- eyebrow: `80ms`
- line: `160ms`
- title: `240ms`
- subtitle: `340ms`
- cards: start at `460ms`, add `120ms` per card

## Icons

Prefer `lucide-vue-next` if already installed:

```ts
import { Bike, Camera, Coffee, Mic, ShieldCheck } from 'lucide-vue-next'
```

Map `ShieldCheck` to the helmet feature if no helmet icon exists. Style icons with:

- Stroke color: dark navy
- Secondary accent: green
- Size: `58px` desktop, `46px` mobile
- Keep line style minimal, similar to the reference.

If `lucide-vue-next` is not installed, implement inline SVG icons in the component or ask the agent to install it.

## Assets

Place final card images here:

```txt
public/images/experience/extra-helmet.png
public/images/experience/photo-stops.png
public/images/experience/local-stories.png
public/images/experience/driver-included.png
public/images/experience/coffee-stop.png
```

Temporary fallback: if these images do not exist, the component should still look acceptable by using CSS gradient placeholders.

## Playwright visual check

After implementation, run the app and take a screenshot of the section.

Suggested workflow:

1. Start dev server.
2. Open home page.
3. Scroll to `#experience`.
4. Capture screenshot.
5. Compare against `experience.png`.
6. Adjust:
   - title size
   - card width
   - image height
   - card shadow
   - spacing between cards
   - responsive behavior

The final result does not need to be pixel-perfect, but should clearly match the reference: centered heading, five premium feature cards, large photos, navy/green icon system, and soft white card layout.
