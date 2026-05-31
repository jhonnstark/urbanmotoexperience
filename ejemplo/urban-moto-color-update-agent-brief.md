# Urban Moto Experience — Color System Update Brief

## Goal
Update the website color system so it feels more premium, serious, and minimal like the original brand, while borrowing the more vivid adventure feeling from the new badge logo.

The final direction should be:

**70% minimal premium + 30% urban adventure.**

Avoid making the site look too neon, gaming, or overly touristy.

---

## Brand Mood
The website should feel:

- Premium
- Urban
- Cinematic
- Clean
- Adventure-focused
- Trustworthy
- More serious than playful
- Inspired by Reforma, jacarandas, helmets, night rides, and CDMX architecture

The Instagram/promotional posts can be more colorful, but the website should stay refined.

---

## New Core Palette
Use these colors as the main brand tokens.

```css
:root {
  --um-green-deep: #1B2B17;
  --um-green-primary: #7FB239;
  --um-green-dark: #4F7A28;
  --um-navy: #081A2C;
  --um-charcoal: #111111;
  --um-off-white: #F5F5F2;
  --um-jacaranda: #6E4AA5;
  --um-gold: #C9A23A;
}
```

---

## Color Usage Rules

### Primary Backgrounds
Use mostly:

```css
--um-off-white: #F5F5F2;
--um-charcoal: #111111;
--um-navy: #081A2C;
```

White/off-white sections should feel clean and premium.
Dark sections should feel cinematic, not flat black.

---

### Main Text
Use navy instead of pure black for most headings.

```css
color: var(--um-navy);
```

For dark sections:

```css
color: var(--um-off-white);
```

---

### Green Accent
Use the vivid green only for important actions and highlights.

Good uses:

- CTA buttons
- highlighted word in titles
- icons
- small lines under eyebrows
- route path
- active states

Avoid using the green everywhere.

```css
background: var(--um-green-primary);
color: var(--um-green-primary);
```

For hover states:

```css
background: var(--um-green-dark);
```

---

### Deep Green
Use deep green for premium brand elements.

Good uses:

- navbar button
- footer background accents
- logo text if using text-only version
- dark green cards
- subtle overlays

```css
background: var(--um-green-deep);
```

---

### Jacaranda Purple
Use purple very carefully.

Good uses:

- subtle gradients
- image overlays
- small decorative accents
- gallery hover shadows

Do not use purple as the main UI color.

```css
color: var(--um-jacaranda);
```

---

### Gold
Use gold only as a tiny premium accent.

Good uses:

- stars
- badge details
- small decorative lines
- secondary icon accents

Do not use gold for large buttons.

```css
color: var(--um-gold);
```

---

## Vuetify Theme Update
If the project uses Vuetify, update the theme values to match this direction.

Example:

```ts
const urbanMotoTheme = {
  dark: false,
  colors: {
    background: '#F5F5F2',
    surface: '#FFFFFF',
    primary: '#7FB239',
    secondary: '#1B2B17',
    green: '#7FB239',
    greenDark: '#4F7A28',
    navy: '#081A2C',
    charcoal: '#111111',
    jacaranda: '#6E4AA5',
    gold: '#C9A23A',
  },
}
```

If the existing code uses `rgb(var(--v-theme-green))`, make sure the Vuetify `green` token maps to:

```txt
#7FB239
```

---

## CSS Variable Strategy
Create or update a global stylesheet, for example:

```txt
src/styles/brand.css
```

Add:

```css
:root {
  --um-green-deep: #1B2B17;
  --um-green-primary: #7FB239;
  --um-green-dark: #4F7A28;
  --um-navy: #081A2C;
  --um-charcoal: #111111;
  --um-off-white: #F5F5F2;
  --um-jacaranda: #6E4AA5;
  --um-gold: #C9A23A;

  --um-text-main: #081A2C;
  --um-text-muted: #4F5B66;
  --um-border-soft: rgba(8, 26, 44, 0.12);
  --um-shadow-soft: 0 18px 55px rgba(8, 26, 44, 0.08);
}
```

Then replace repeated hardcoded colors inside components with these variables.

---

## Component Updates

### Navbar
Use:

```css
background: #ffffff;
color: var(--um-navy);
```

Book button:

```css
background: var(--um-green-deep);
color: white;
```

Hover:

```css
background: var(--um-green-dark);
```

---

### Hero Section
Keep the cinematic dark overlay.

Use green only for the highlighted phrase:

```css
.highlight {
  color: var(--um-green-primary);
}
```

Primary CTA:

```css
background: var(--um-green-primary);
```

Secondary CTA:

```css
border: 2px solid rgba(245, 245, 242, 0.78);
color: var(--um-off-white);
```

---

### Route Section
Route line:

```css
stroke: var(--um-green-dark);
```

Numbers:

```css
background: var(--um-green-primary);
```

Headings:

```css
color: var(--um-navy);
```

Stats panel:

```css
background: rgba(245, 245, 242, 0.96);
```

---

### Experience / Features Section
Cards should stay mostly white/off-white.

Icons:

```css
color: var(--um-green-primary);
stroke: var(--um-navy);
```

Card shadows should be soft, not heavy.

```css
box-shadow: var(--um-shadow-soft);
```

---

### About Section
Use minimal premium colors.

Title:

```css
color: var(--um-navy);
```

The word `CDMX` can use:

```css
color: var(--um-green-primary);
```

Feature icon dividers:

```css
border-color: var(--um-border-soft);
```

---

### Gallery / Socials
Use jacaranda only through images or subtle overlays.

Do not make buttons purple.

Instagram button should be green:

```css
background: var(--um-green-primary);
```

---

### Contact CTA Section
This section can be darker and more cinematic.

Overlay example:

```css
background:
  linear-gradient(90deg, rgba(8, 26, 44, 0.92), rgba(8, 26, 44, 0.46)),
  url('/images/contact-bg.png');
```

WhatsApp button:

```css
background: var(--um-green-primary);
```

---

## Typography Notes
Keep the current typography direction:

- Big headings: `Bebas Neue`
- UI/nav/buttons: `Oswald`
- Paragraphs: system font or clean sans-serif

Do not change typography unless needed for consistency.

---

## Logo Usage Direction
Use two brand versions:

### Main Logo
Use on:

- Navbar
- Footer
- Website UI
- Watermarks
- Light backgrounds

Style:

- Minimal
- Dark green/navy
- Clean typography
- Serious premium feel

### Badge Logo
Use on:

- Instagram assets
- stickers
- helmets
- merch mockups
- promotional graphics
- hero overlays only if it does not clutter the design

Style:

- More colorful
- Adventure/tour feeling
- Better for social media than the main site UI

---

## Implementation Checklist

1. Find existing hardcoded colors in all section components.
2. Add global brand CSS variables.
3. Update Vuetify theme tokens if used.
4. Replace old greens with `#7FB239` and `#4F7A28`.
5. Replace pure black headings with `#081A2C` where appropriate.
6. Use `#1B2B17` for premium dark green brand areas.
7. Keep jacaranda purple as a subtle accent only.
8. Test all sections in desktop and mobile.
9. Run Playwright screenshot comparison after changes.
10. Make sure CTAs still have strong contrast and accessibility.

---

## Visual Target
The final site should look like:

```txt
Premium motorcycle experience in CDMX
with cinematic jacaranda energy
but clean enough to feel like a real brand.
```

Avoid:

```txt
Neon gaming logo
Generic tourism flyer
Too many gradients
Too much green everywhere
Overly dark unreadable sections
```
