# Urban Moto landing page mock brief

Use this file as implementation guidance for a Vue 3 + TypeScript project. The target visual is based on `home_compressed.png`.

## Goal
Create a responsive hero landing page that closely matches the uploaded reference:

- White top navbar, about 120px high on desktop.
- Logo on the left with shield icon and stacked text: `URBAN MOTO`, `✦ EXPERIENCE ✦`, `CDMX`.
- Nav links on the right: `EXPERIENCE`, `ROUTE`, `ABOUT US`, `FAQ`, plus dark green `BOOK A RIDE` button.
- Full-width hero image below navbar, filling the remaining viewport height.
- Dark gradient overlay from left to center and bottom to top for readable text.
- Huge condensed headline on the left:
  - `EXPLORE`
  - `MEXICO CITY`
  - `ON TWO WHEELS`
  - `TWO WHEELS` should be green.
- Small green horizontal divider under headline.
- Subtitle: `Urban motorcycle rides through iconic landmarks, architecture, green areas, and local spots in CDMX.`
- CTA buttons: green filled `BOOK A RIDE →` and dark transparent outlined `VIEW ROUTE →`.

## Suggested fonts
The headline appears closest to a tall condensed display font. Good web alternatives:

1. `Bebas Neue` — closest/easiest for the big hero text.
2. `Anton` — heavier and wider.
3. `Oswald` — good for nav/buttons.
4. `Roboto Condensed` — safer general condensed option.

Recommended combination:

```css
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@400;500;600;700&display=swap');
```

Use `Bebas Neue` for the hero headline and `Oswald` for nav/buttons/body.

## Colors
```css
--green: #8cc63f;
--dark-green: #06240f;
--text-dark: #0f1f2b;
--white: #ffffff;
```

## Layout measurements
Desktop reference approximation:

- Canvas/reference ratio: about `1491 x 1055`.
- Navbar height: `118px`.
- Logo area width: `330px`.
- Hero content left offset: `64px`.
- Hero content max width: `650px`.
- Headline font size: `96px` to `112px` depending viewport.
- Headline line-height: `0.92`.
- Button height: `68px`.
- Button width: `240px`.

## Image handling
Place the uploaded reference/background image in the app public folder, for example:

```text
public/images/urban-moto-hero.png
```

Then use it as the hero background. Set:

```css
background-position: center center;
background-size: cover;
```

For closer matching, on wide screens try:

```css
background-position: center 52%;
```

## Playwright visual refinement instructions
After implementing, run the dev server and compare screenshots.

Suggested loop:

1. Open page at desktop size `1491 x 1055`.
2. Take screenshot.
3. Compare with `home_compressed.png` visually.
4. Adjust these first:
   - navbar height
   - headline size and line-height
   - left content offset
   - hero background position
   - overlay darkness
   - CTA button sizes
5. Repeat until visually close.

Example Playwright test:

```ts
import { test, expect } from '@playwright/test';

test('urban moto landing page screenshot', async ({ page }) => {
  await page.setViewportSize({ width: 1491, height: 1055 });
  await page.goto('http://localhost:5173/');
  await expect(page).toHaveScreenshot('urban-moto-home.png', {
    fullPage: true,
    maxDiffPixelRatio: 0.08,
  });
});
```

## Main implementation notes
- Use semantic sections: `header`, `nav`, `main`, `section`.
- Keep the page height at `100vh`.
- Hero should be `calc(100vh - 118px)` on desktop.
- On mobile, stack nav or hide links behind a simple menu.
- Avoid exact logo image dependency at first; approximate with a shield block and text.
