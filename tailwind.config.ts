import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0f0f12',
        primary: '#00b3ff',     // Neon mavi
        secondary: '#9d00ff',   // Neon mor
        accent: '#ff00e5',      // Neon pembe
        highlight: '#00ff66',   // Neon yeşil
        text: '#ffffff',
        'text-secondary': '#a0aec0',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      spacing: {
        'xs': '0.25rem',
        'sm': '0.5rem',
        'md': '1rem',
        'lg': '2rem',
        'xl': '4rem',
      },
      boxShadow: {
        'neon-blue': '0 0 5px #00b3ff, 0 0 20px #00b3ff',
        'neon-purple': '0 0 5px #9d00ff, 0 0 20px #9d00ff',
        'neon-pink': '0 0 5px #ff00e5, 0 0 20px #ff00e5',
        'neon-green': '0 0 5px #00ff66, 0 0 20px #00ff66',
      },
      animation: {
        'glow': 'glow 2.5s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 10px #00b3ff' },
          '50%': { textShadow: '0 0 20px #00b3ff, 0 0 30px #00b3ff' },
          '100%': { textShadow: '0 0 10px #00b3ff' },
        },
      },
    },
  },
  plugins: [],
}

export default config 