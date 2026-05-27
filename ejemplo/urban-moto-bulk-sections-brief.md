# Urban Moto bulk sections implementation brief

Use these screenshots as visual targets:

- `about.png` → AboutSection.vue
- `contact.png` → ContactSection.vue
- `gallery.png` → GallerySection.vue
- `socials.png` → SocialsSection.vue

Existing project context:

- Vue 3 + TypeScript single-file components.
- Current page imports sections from `@/components/sections/...`.
- Existing style language uses `Bebas Neue` for large headings and `Oswald` for labels/buttons.
- Brand colors: dark navy `#071a2c`, green `#79b83f`, deeper green `#4f9b32`, white background.
- Keep section IDs: `about`, `contact`, `gallery`, `socials`.
- Components should be self-contained and scoped.
- Use `$t()`/`useI18n()` where possible, but hardcoded fallback arrays are acceptable for first visual implementation.
- Use CSS animations compatible with the existing route/hero components.
- Add `prefers-reduced-motion` override.

Recommended assets:

```txt
public/images/about-main.png
public/images/contact-bg.png
public/images/gallery-1.png
public/images/gallery-2.png
public/images/gallery-3.png
public/images/gallery-4.png
public/images/gallery-5.png
public/images/gallery-6.png
public/images/social-1.png
public/images/social-2.png
public/images/social-3.png
public/images/social-4.png
public/images/social-5.png
public/images/social-6.png
public/images/social-thumb-routes.png
public/images/social-thumb-riders.png
public/images/social-thumb-reviews.png
public/images/social-thumb-cdmx.png
public/images/social-thumb-safety.png
public/images/social-thumb-night.png
```

For now, if individual assets are not available, use gradients/placeholders or reuse generated screenshots as background references. The agent can later crop/export assets.

## About section target

Layout:

- White section.
- Two-column desktop layout.
- Left: green eyebrow `ABOUT THE EXPERIENCE`, small green underline, huge heading `A DIFFERENT WAY TO EXPLORE CDMX` with `CDMX` green.
- Paragraph copy under heading.
- Feature icon grid: 3 columns first row, 2 columns second row. Thin grey separators.
- CTA button outline green: `LEARN MORE →`.
- Right: large rounded photo card with motorcycle riders in CDMX.

Animation:

- Text fades/slides up in stagger.
- Feature icons scale/fade in stagger.
- Image fades/slides from right.

Responsive:

- Stack image after text below 1000px.
- Feature grid becomes 2 columns, then 1 column on narrow screens.

## Contact CTA section target

Layout:

- Large dark hero-like card with rounded corners and image background.
- Dark left overlay gradient.
- Left content: huge heading `READY TO EXPLORE CDMX?`, `CDMX?` green.
- Subtitle: `Ride through the city like a local.`
- Two large buttons: green WhatsApp button and transparent Instagram button.
- Inline feature strip below buttons: small groups, flexible schedules, helmets included, safety first.
- Bottom white floating card with three benefits: local guides, unforgettable stops, authentic experience.

Animation:

- Background zooms gently on load.
- Heading lines stagger in.
- Buttons slide/fade.
- Bottom benefit card fades upward.

Responsive:

- Card padding decreases.
- Buttons full width on mobile.
- Bottom benefit card stacks.

## Gallery section target

Layout:

- White section, centered header.
- Eyebrow `GALLERY`, green underline.
- Large heading `THE EXPERIENCE`.
- Subtitle.
- 3-column x 2-row image grid with rounded image corners and narrow gaps.

Animation:

- Header fades up.
- Images appear in stagger with slight scale-up.
- Hover: image zooms subtly.

Responsive:

- 2 columns tablet, 1 column mobile.

## Socials section target

Layout:

- White section, centered header.
- Eyebrow `FOLLOW THE RIDE`, green underline.
- Heading `FOLLOW THE RIDE`.
- Subtitle.
- 3-column x 2-row Instagram-like grid.
- One card has play button overlay and `RIDE THROUGH CDMX` text.
- Below: Instagram icon, handle `@urbanmotoexperiencecdmx`, green follow button.
- Bottom category row with circular thumbnails: Routes, Riders, Reviews, CDMX, Safety, Night Ride.

Animation:

- Header fades.
- Cards stagger.
- Follow CTA fades up after grid.
- Category thumbnails pop in stagger.

Responsive:

- 2 columns tablet, 1 column mobile.
- Category row scrolls horizontally on mobile.

## Playwright visual loop instruction for agent

After implementing components:

1. Start dev server.
2. Use Playwright to open the home page.
3. Screenshot each section at desktop width 1600x1000.
4. Compare against provided section screenshots.
5. Adjust spacing, font sizes, column widths, border radii, and animation delays.
6. Repeat until visually close.

Use CSS values as flexible approximations; prioritize matching overall hierarchy, spacing, proportions, and brand feel.
