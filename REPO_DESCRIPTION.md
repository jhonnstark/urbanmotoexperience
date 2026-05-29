# Repository Description

This is a modern single-page application (SPA) for Urban Moto Experience, a premium motorcycle tour company. Built with Vue 3, TypeScript, Vuetify, and featuring advanced scroll-triggered animations and comprehensive internationalization support.

## Project Overview

Urban Moto Experience is a fully-featured landing page showcasing motorcycle tours with:
- 7 distinct sections (Hero, About, Route, Gallery, Experience, Socials, Contact)
- Multi-language support (5 languages: EN, ES, FR, DE, RU)
- Advanced scroll-triggered animations using Intersection Observer API
- Responsive design optimized for all devices
- Material Design UI components via Vuetify 3

## Technology Stack

- **Vue 3** - Progressive JavaScript framework with Composition API
- **TypeScript** - Type-safe development
- **Vuetify 3** - Material Design component library
- **Vue Router** - Client-side routing
- **Pinia** - State management
- **Vue i18n** - Internationalization
- **Vite** - Build tool and dev server
- **Playwright** - E2E testing

## Project Structure

### `src/` - Main Source Code

#### `pages/`
Vue components for each page/route:
- **`Home.vue`** - Main landing page that integrates all sections with scroll animations
- **`About.vue`** - Standalone about page

#### `components/sections/`
Modular section components used in the Home page:
- **`AboutSection.vue`** - Company story and mission with animated reveals
- **`RouteSection.vue`** - Tour route details with interactive stop cards
- **`GallerySection.vue`** - Photo showcase with grid layout
- **`ExperienceSection.vue`** - Tour features and statistics
- **`SocialsSection.vue`** - Instagram integration and social media links
- **`ContactSection.vue`** - Booking form and contact information

Each section is:
- Fully localized with i18n
- Animated with scroll-triggered effects
- Responsive across all breakpoints
- Self-contained and reusable

#### `composables/`
Reusable composition functions following Vue 3 best practices:
- **`useScrollAnimation.ts`** - Intersection Observer-based animation system that monitors element visibility and triggers animations on scroll (both up and down)

#### `router/`
Vue Router configuration:
- **`index.ts`** - Route definitions with smooth scroll behavior and hash mode for GitHub Pages compatibility

#### `stores/`
Pinia state management:
- **`index.ts`** - Store exports
- **`app.ts`** - Application-wide state (theme, preferences, etc.)

#### `locales/`
i18n translation files in JSON format:
- **`en.json`** - English (default)
- **`es.json`** - Spanish
- **`fr.json`** - French
- **`de.json`** - German
- **`ru.json`** - Russian

Each file contains complete translations for:
- Navigation menu
- All 7 sections (home, about, route, gallery, experience, socials, contact)
- Buttons and call-to-action text
- Form labels and placeholders

#### `assets/`
Static assets and global styles:
- **`animations.css`** - Global CSS for scroll-triggered animations including:
  - Base hidden states for animated elements
  - Keyframe definitions (@keyframes fadeUp, itemIn)
  - Staggered animation classes (s1-s5, c1-c5)
  - Accessibility support (prefers-reduced-motion)

#### Root Files
- **`App.vue`** - Root component with navigation bar, language selector, and router view
- **`main.ts`** - Application entry point that initializes Vue, Vuetify, Router, Pinia, i18n, and imports global animations
- **`vite-env.d.ts`** - TypeScript type declarations for Vite

### `public/` - Static Assets

#### `images/`
Public image assets served directly:
- **`background.png`** - Background image
- **`hero-section.jpg`** - Hero section image
- **`urban-moto-hero.png`** - Hero logo/image

### `ejemplo/` - Design Reference

Design mockups and documentation:
- **`*.png`** - Section mockup images (home, about, route, gallery, experience, socials, contact)
- **`*_compressed.png/webp`** - Optimized versions of mockups
- **`urban-moto-mock-brief.md`** - Design brief and specifications
- **`urban-moto-bulk-sections-brief.md`** - Bulk sections documentation
- **`UrbanMotoHome.vue`** - Reference implementation example

### `section_docs/` - Documentation

Section-specific documentation:
- **`about_section.md`** - About section specifications
- **`route_section.md`** - Route section specifications
- **`mockup_guide.md`** - General mockup guidelines

### `e2e/` - End-to-End Tests

Playwright test files:
- **`app.spec.ts`** - E2E test suite

### Configuration Files

- **`vite.config.ts`** - Vite build configuration with path aliases (@/ → src/)
- **`tsconfig.json`** - TypeScript compiler options
- **`playwright.config.ts`** - E2E testing configuration
- **`.prettierrc`** - Code formatting rules
- **`.eslintrc.cjs`** - Linting rules and Vue-specific settings
- **`.gitignore`** - Git ignore patterns
- **`package.json`** - Dependencies and npm scripts

## Key Features

### Animation System
The application uses a sophisticated scroll-triggered animation system:
- **Intersection Observer API** monitors when elements enter/exit viewport
- Animations replay when scrolling both up and down
- Staggered animations with customizable delays
- Performance-optimized using CSS transforms and opacity
- Respects user's `prefers-reduced-motion` preference

### Internationalization
Complete i18n support with:
- 5 languages fully translated
- Language switcher in navigation
- All content localized (navigation, sections, buttons, forms)
- Fallback to English for missing translations

### Responsive Design
- Mobile-first approach
- Vuetify's responsive grid system
- Breakpoint-specific layouts
- Touch-friendly interactions
- Optimized for all screen sizes

### Navigation
- Smooth scroll to sections
- Active section highlighting
- Mobile drawer menu
- Prominent CTA button
- Language selector dropdown

## Development Workflow

1. **Development**: `npm run dev` - Starts Vite dev server at localhost:5173
2. **Build**: `npm run build` - Creates production build in `dist/`
3. **Preview**: `npm run preview` - Preview production build locally
4. **Test**: `npm run test:e2e` - Run Playwright E2E tests
5. **Lint**: `npm run lint` - Check code quality
6. **Format**: `npm run format` - Format code with Prettier

## Architecture Patterns

- **Composition API** - Modern Vue 3 pattern with `<script setup>`
- **Component-based** - Modular, reusable components
- **Type-safe** - Full TypeScript coverage
- **State management** - Centralized with Pinia
- **Composables** - Reusable logic extraction
- **i18n** - Separation of content from code
- **Scoped styles** - Component-level CSS isolation

## Current State

The repository is in a fully functional state with:
- ✅ All 7 sections implemented and styled
- ✅ Complete internationalization (5 languages)
- ✅ Working scroll-triggered animations
- ✅ Responsive design across all devices
- ✅ Navigation with smooth scrolling
- ✅ No console errors or warnings
- ✅ Clean, maintainable codebase
- ✅ Comprehensive documentation

This is a tutorial/learning project demonstrating modern Vue 3 development practices and patterns.
