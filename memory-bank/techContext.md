# Portfolio Projesi - Teknik Bağlam

## 🛠 Teknoloji Stack

### Core Teknolojiler
- **Next.js 14**
  - App Router
  - Server Components
  - Server Actions
  - Route Handlers

- **TypeScript**
  - Strict mode
  - Type safety
  - Interface definitions
  - Type guards

- **Tailwind CSS**
  - JIT compiler
  - Custom configuration
  - Responsive design
  - Dark mode

### UI/UX Kütüphaneleri
- **Framer Motion**
  - Page transitions
  - Scroll animations
  - Gesture support
  - Variants

- **React Icons**
  - Icon components
  - Custom icons
  - SVG optimization

- **React Intersection Observer**
  - Scroll-based animations
  - Lazy loading
  - Performance optimization

### Development Tools
- **ESLint**
  - TypeScript support
  - React rules
  - Accessibility rules

- **Prettier**
  - Code formatting
  - Consistent style
  - Integration with ESLint

- **Husky**
  - Git hooks
  - Pre-commit checks
  - Code quality

## 📦 Bağımlılıklar

### Production Dependencies
```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^10.16.0",
    "react-icons": "^4.11.0",
    "react-intersection-observer": "^9.5.0",
    "zustand": "^4.4.0"
  }
}
```

### Development Dependencies
```json
{
  "devDependencies": {
    "typescript": "^5.0.0",
    "@types/react": "^18.2.0",
    "@types/node": "^20.0.0",
    "tailwindcss": "^3.3.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0",
    "eslint": "^8.0.0",
    "prettier": "^3.0.0",
    "husky": "^8.0.0"
  }
}
```

## 🔧 Geliştirme Ortamı

### VS Code Eklentileri
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript and JavaScript Language Features
- GitLens

### Git Yapılandırması
```gitignore
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
```

### TypeScript Yapılandırması
```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### Tailwind Yapılandırması
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#181817',
        primary: '#1b45d7',
        secondary: '#19327f',
        accent: '#021fa0',
        text: '#ffffff',
        'text-secondary': '#a0aec0',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

## 🚀 Deployment

### Vercel Yapılandırması
- Automatic deployments
- Environment variables
- Analytics
- Performance monitoring

### CI/CD Pipeline
1. Code push
2. TypeScript check
3. ESLint check
4. Build
5. Deploy

### Performance Monitoring
- Core Web Vitals
- Lighthouse scores
- Error tracking
- User analytics 