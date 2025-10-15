/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#40E0D0',
          600: '#0f766e',
          700: '#0d5b56',
          800: '#115e59',
          900: '#134e4a',
        },
        turquoise: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#40E0D0',
          600: '#0f766e',
          700: '#0d5b56',
          800: '#115e59',
          900: '#134e4a',
        },
        cream: {
          50: '#fefdf9',
          100: '#fefbf3',
          200: '#fdf6e3',
          300: '#fbf0d0',
          400: '#f8e8b8',
          500: '#f5deb3',
          600: '#e6c79a',
          700: '#d4b082',
          800: '#c19969',
          900: '#a67c52',
        },
        brown: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
        }
      },
    },
  },
  plugins: [],
}
