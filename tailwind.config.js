/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'rose': {
          25: '#fef7f0',
          50: '#f9f2e5',
          100: '#f3e5d0',
          200: '#e7cba1',
          300: '#dbb172',
          400: '#cf9743',
          500: '#c37d14',
          600: '#9c6410',
          700: '#754b0c',
          800: '#4e3208',
          900: '#271904',
        },
        'emerald': {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#a5cacf',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        }
      },
      fontFamily: {
        sans: [
          '"Roboto"',
          '"Open Sans"',
          '"Montserrat"',
          'ui-sans-serif',
          'system-ui'
        ],
        serif: [
          '"Playfair Display"',
          '"Merriweather"',
          '"Lora"',
          'ui-serif',
          'Georgia'
        ],
        mono: [
          '"Fira Mono"',
          '"Menlo"',
          '"Monaco"',
          'ui-monospace',
          'SFMono-Regular'
        ]
      },
    },
  },
  plugins: [],
};