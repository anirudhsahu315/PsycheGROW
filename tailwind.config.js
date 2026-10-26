/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        pastel: {
          cream: '#FAF8F5',
          sand: '#F4F0E8',
          canvas: '#FAF8F5',
          surface: '#FFFFFF',
          border: '#E7E2D8',
          borderSoft: '#EFEBE3',
          borderHover: '#D4CDC2',
          charcoal: '#1F262E',
          muted: '#596773',
          lightMuted: '#7E8B97',
          lavender: '#7A6F91',
          lavenderBg: '#F2EFF6',
          lavenderBorder: '#DDD8E6',
          sage: '#647D61',
          sageBg: '#EFF4EE',
          sageBorder: '#D2E0D0',
          terracotta: '#A8634F',
          terracottaBg: '#F9F0EC',
          terracottaBorder: '#EAD6CF',
          slate: '#596E82',
          slateBg: '#EFF3F6',
          slateBorder: '#D5E0E7',
          sandGold: '#967C46',
          sandGoldBg: '#F8F5EC',
          sandGoldBorder: '#E7DEC9',
          rose: '#9A636F',
          roseBg: '#F8F0F2',
          roseBorder: '#E7D4DA',
        },
        psyche: {
          50: '#FAF8F5',
          100: '#F2EFF6',
          200: '#DDD8E6',
          300: '#C2BAD0',
          400: '#9B8EAE',
          500: '#7A6F91',
          600: '#675C7E',
          700: '#564C6A',
          800: '#463D56',
          900: '#332C3F',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)',
        'card': '0 2px 8px rgba(0, 0, 0, 0.03), 0 1px 3px rgba(0, 0, 0, 0.02)',
        'float': '0 8px 24px -4px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
}
