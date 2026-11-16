/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#030816',
          925: '#030817',
          900: '#050b18',
          850: '#070f20',
          800: '#071326',
          750: '#08152c',
          700: '#09162b',
          650: '#0b1931',
          600: '#0d1b34',
          500: '#102344',
        },
        brand: {
          blue: '#3478f6',
          bright: '#4b8cff',
          soft: '#70a7ff',
          ice: '#eaf1ff',
          muted: '#9fb2d4',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
