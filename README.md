# Urban Moto Experience

A modern Vue 3 application built with TypeScript, Vuetify, Vue Router, Pinia, and Vue i18n.

## Features

✅ **Vue 3** - Latest Vue with Composition API  
✅ **TypeScript** - Full type safety  
✅ **Vuetify 3** - Material Design components  
✅ **Vue Router** - Client-side routing with SEO support  
✅ **Pinia** - State management  
✅ **Vue i18n** - Internationalization (EN, FR)  
✅ **Vite** - Lightning-fast build tool  
✅ **Prettier** - Code formatting  
✅ **ESLint** - Code linting  

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

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

### Preview

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

### Formatting

```bash
npm run format
```

## Project Structure

```
src/
├── assets/           # Static assets
├── components/       # Reusable components
├── locales/         # i18n translations
│   ├── en.json
│   └── fr.json
├── pages/           # Page components
│   ├── Home.vue
│   └── About.vue
├── router/          # Vue Router config
├── stores/          # Pinia stores
├── App.vue          # Root component
├── main.ts          # Application entry
└── vite-env.d.ts    # Type declarations
```

## Configuration Files

- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration
- `.prettierrc` - Prettier formatting rules
- `.eslintrc.cjs` - ESLint rules
- `.gitignore` - Git ignore rules

## Branches

- `master` - Production branch
- `develop` - Development branch

## License

MIT
