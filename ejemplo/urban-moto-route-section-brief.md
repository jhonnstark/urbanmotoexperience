# Urban Moto CDMX — Route Section Implementation Brief

## Reference section
Use the provided reference image `route_compressed.png` as the visual target for the **RouteSection** component.

The section should look like a premium landing-page route block:
- White / off-white background.
- Left side: route title and vertical itinerary timeline.
- Right side: large soft map card with green route line, circular landmark thumbnails, pin markers, and logo badge.
- Bottom of map: horizontal stats card with duration, distance, ride type, and group size.
- Overall style should match the existing hero:
  - Dark navy text.
  - Bright lime/green accent.
  - Condensed uppercase headings.
  - Clean tourism/adventure brand feel.

## Recommended fonts
Use the same font system as the hero:
- Main headings: `Bebas Neue`
- Labels, buttons, nav, stop titles: `Oswald`
- Descriptive body copy: `Inter`, `system-ui`, or `Arial`

Google import:
```css
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@400;500;600;700&display=swap');
```

## Layout
Desktop layout:
```txt
<section id="route">
  left column 42%
  right map column 58%
</section>
```

Suggested max width:
```css
max-width: 1480px;
margin: 0 auto;
padding: 86px 54px 74px;
```

Mobile:
- Stack columns vertically.
- Timeline first, map second.
- Hide decorative complexity if needed.
- Keep the stats card readable in 2 columns.

## Route stops
Use these six stops:

1. Parque España  
   `We start at this vibrant spot in the heart of Condesa.`

2. Ángel de la Independencia  
   `Ride down Reforma Avenue to the most iconic monument in the city.`

3. Chapultepec Lake  
   `Enjoy the green views and a relaxing stop by the lake.`

4. Museo de Antropología  
   `Explore one of Mexico’s most important cultural landmarks.`

5. Palacio de Bellas Artes  
   `Admire the architecture of this stunning historic building.`

6. Monumento a la Revolución  
   `We finish at this impressive icon of Mexican history.`

## Assets to prepare
Place landmark thumbnails in:

```txt
public/images/route/parque-espana.jpg
public/images/route/angel.jpg
public/images/route/chapultepec-lake.jpg
public/images/route/museo-antropologia.jpg
public/images/route/bellas-artes.jpg
public/images/route/revolucion.jpg
```

Place the logo in:

```txt
public/images/logo/urban-moto-badge.png
```

If those assets are not ready, the component should still render with CSS gradients/placeholders.

## Animation requirements
The component should support staggered entrance animations.

Preferred behavior:
- Section eyebrow fades/slides in first.
- Main heading fades/slides in after.
- Subtitle fades/slides in after heading.
- Timeline stops appear one by one.
- Map card fades/slides in from the right.
- Route line should animate as if being drawn.
- Map pins and photo circles should pop/fade in after the map appears.
- Stats cards fade upward with a small stagger.

CSS-only implementation is okay. Vue Transition is not required.

Important:
- Respect reduced motion.
- Add:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

## Playwright visual check guidance
Use Playwright to compare the implementation against the reference screenshot.

Suggested viewport:
```ts
await page.setViewportSize({ width: 1536, height: 960 })
```

Suggested steps:
1. Start app with `npm run dev`.
2. Open the home page.
3. Scroll to `#route`.
4. Wait for animations to finish:
```ts
await page.waitForTimeout(1600)
```
5. Take screenshot:
```ts
await page.locator('#route').screenshot({ path: 'route-section.png' })
```

What to compare manually:
- Left title scale and spacing.
- Timeline circles and vertical connector line.
- Large right map card proportions.
- Bright green route path.
- Stop labels placed around the route.
- Bottom stats card alignment.
- Mobile layout remains readable.

## Design tokens
Use these approximate colors:

```css
--route-dark: #071a2c;
--route-text: #172234;
--route-muted: #4f5b66;
--route-green: #79b83f;
--route-green-dark: #4f9b32;
--route-soft: #f6faf2;
--route-line: #e8ece8;
```

## Notes
The map can be mocked using CSS, pseudo-elements, route SVG, and absolute-positioned markers. It does not need to be an actual Google Map.

The goal is visual similarity, not exact geographic accuracy.
