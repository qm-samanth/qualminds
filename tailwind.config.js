/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#f3f1ff',
          100: '#ebe5ff',
          200: '#d9ccff',
          300: '#bea6ff',
          400: '#9f75ff',
          500: '#843dff',
          600: '#6610f2', // Primary
          700: '#5b0edb',
          800: '#480bb0',
          900: '#3a098f',
        },
        purple: {
          50: '#F9F5FF',
          100: '#F3EBFF',
          200: '#E7D6FF',
          300: '#D8B9FF',
          400: '#C89FFF',
          500: '#6610f2', // Updated to match primary
          600: '#5b0edb',
          700: '#480bb0',
          800: '#3a098f',
          900: '#2a076a',
        },
        teal: {
          50: '#EDFCFF',
          100: '#DCF8FF',
          200: '#B8F1FF',
          300: '#95EAFF',
          400: '#71E2FF',
          500: '#6610f2', // Updated to match primary
          600: '#5b0edb',
          700: '#480bb0',
          800: '#3a098f',
          900: '#2a076a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      boxShadow: {
        'soft': '0 2px 15px rgba(0, 0, 0, 0.04)',
        'strong': '0 5px 30px rgba(0, 0, 0, 0.08)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-in-left': 'slideInFromLeft 0.5s ease-out forwards',
        'slide-in-right': 'slideInFromRight 0.5s ease-out forwards',
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};