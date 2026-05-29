# Urban Moto Experience

A modern, fully-featured single-page application for Urban Moto Experience - a premium motorcycle tour company. Built with Vue 3, TypeScript, Vuetify, and featuring advanced scroll-triggered animations and multi-language support.

## 🌟 Features

### Core Technologies
✅ **Vue 3** - Latest Vue with Composition API and `<script setup>` syntax  
✅ **TypeScript** - Full type safety throughout the application  
✅ **Vuetify 3** - Material Design components and responsive layout  
✅ **Vue Router** - Client-side routing with smooth scroll navigation  
✅ **Pinia** - State management for app-wide data  
✅ **Vue i18n** - Full internationalization support (EN, ES, FR, DE, RU)  
✅ **Vite** - Lightning-fast build tool and HMR  
✅ **Prettier** - Consistent code formatting  
✅ **ESLint** - Code quality and linting  
✅ **Playwright** - End-to-end testing

### Application Features
🎨 **Modern UI/UX** - Clean, professional design with Material Design principles  
🌐 **Multi-language Support** - 5 languages (English, Spanish, French, German, Russian)  
✨ **Scroll Animations** - Advanced Intersection Observer-based animations that replay on scroll  
📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices  
♿ **Accessibility** - Respects user's reduced motion preferences  
🎯 **SEO Optimized** - Proper meta tags and semantic HTML structure  

### Page Sections
The application features a comprehensive single-page layout with 7 main sections:

1. **Hero Section** - Eye-catching landing with call-to-action
2. **About Section** - Company story and mission with animated reveals
3. **Route Section** - Detailed tour route with interactive stops
4. **Gallery Section** - Photo showcase with grid layout
5. **Experience Section** - Tour features and statistics
6. **Socials Section** - Instagram integration and social media links
7. **Contact Section** - Booking form and contact information

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ or higher
- npm, yarn, or pnpm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will open at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Testing

```bash
npm run test:e2e
```

### Linting

```bash
npm run lint
```

### Formatting

```bash
npm run format
```

## 📁 Project Structure

```
src/
├── assets/              # Static assets and global styles
│   └── animations.css   # Global scroll animation styles
├── components/          # Reusable Vue components
│   └── sections/        # Page section components
│       ├── AboutSection.vue
│       ├── ContactSection.vue
│       ├── ExperienceSection.vue
│       ├── GallerySection.vue
│       ├── RouteSection.vue
│       └── SocialsSection.vue
├── composables/         # Reusable composition functions
│   └── useScrollAnimation.ts  # Intersection Observer animation logic
├── locales/             # i18n translation files
│   ├── en.json          # English
│   ├── es.json          # Spanish
│   ├── fr.json          # French
│   ├── de.json          # German
│   └── ru.json          # Russian
├── pages/               # Page components
│   ├── Home.vue         # Main landing page
│   └── About.vue        # About page
├── router/              # Vue Router configuration
│   └── index.ts         # Route definitions
├── stores/              # Pinia state management
│   ├── index.ts         # Store exports
│   └── app.ts           # App-wide state
├── App.vue              # Root component with navigation
├── main.ts              # Application entry point
└── vite-env.d.ts        # TypeScript declarations

public/
└── images/              # Public image assets
    ├── background.png
    ├── hero-section.jpg
    └── urban-moto-hero.png

ejemplo/                 # Design mockups and documentation
├── *.png                # Section mockup images
├── urban-moto-mock-brief.md
└── UrbanMotoHome.vue    # Reference implementation

section_docs/            # Section-specific documentation
├── about_section.md
├── route_section.md
└── mockup_guide.md

e2e/                     # End-to-end tests
└── app.spec.ts
```

## 🎨 Animation System

The application features a sophisticated scroll-triggered animation system:

- **Intersection Observer API** - Monitors element visibility in viewport
- **Replay on Scroll** - Animations trigger both when scrolling down and up
- **Staggered Animations** - Sequential reveals with customizable delays
- **Performance Optimized** - Uses CSS transforms and opacity for smooth 60fps animations
- **Accessibility** - Respects `prefers-reduced-motion` user preference

### Animation Classes
- `.reveal` - Basic fade-up animation
- `.s1` to `.s5` - Staggered animations with increasing delays
- `.post`, `.story`, `.stop-card`, `.feature-card`, `.stat-card`, `.gallery-item` - Component-specific animations

## 🌐 Internationalization

The app supports 5 languages with complete translations for all sections:

- **English (en)** - Default language
- **Spanish (es)** - Español
- **French (fr)** - Français
- **German (de)** - Deutsch
- **Russian (ru)** - Русский

Language can be switched via the navigation menu. All content, including navigation labels, section titles, descriptions, and call-to-action buttons are fully localized.

## 🧩 Key Components

### Navigation
- Responsive app bar with language selector
- Smooth scroll navigation to sections
- Mobile-friendly drawer menu
- Prominent "BOOK A RIDE" CTA button

### Sections
Each section is a self-contained Vue component with:
- Full i18n support
- Scroll-triggered animations
- Responsive design
- Vuetify components for consistent styling

## ⚙️ Configuration Files

- `vite.config.ts` - Vite build configuration with path aliases
- `tsconfig.json` - TypeScript compiler options
- `playwright.config.ts` - E2E testing configuration
- `.prettierrc` - Code formatting rules
- `.eslintrc.cjs` - Linting rules and Vue-specific settings
- `.gitignore` - Git ignore patterns

## 🔧 Development Notes

### State Management
The app uses Pinia for state management with a centralized store pattern. The main app store handles global state like theme and user preferences.

### Routing
Vue Router is configured with:
- Hash mode for GitHub Pages compatibility
- Smooth scroll behavior
- Named routes for easy navigation

### Styling
- Vuetify's Material Design system
- Custom CSS animations in `animations.css`
- Scoped styles in component files
- Responsive breakpoints for all screen sizes

## 📝 License

MIT

## 🤝 Contributing

This is a tutorial project for learning Vue 3, TypeScript, and modern web development practices.

---

Built with ❤️ using Vue 3 + TypeScript + Vuetify
