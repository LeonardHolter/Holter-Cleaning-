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
          50: '#f0f4fa',
          100: '#e1e9f4',
          400: '#5c7fb8',
          500: '#1B3B6F',
          600: '#16325c',
          700: '#122849',
          800: '#0e1f37',
          900: '#0a1525',
        },
        accent: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          400: '#75c7f0',
          500: '#4AAFE3',
          600: '#3e93c1',
          700: '#32779f',
          800: '#265b7d',
          900: '#1a3f5b',
        },
        silver: {
          400: '#d0d0d0',
          500: '#C0C0C0',
          600: '#a8a8a8',
          700: '#909090',
          800: '#787878',
          900: '#606060',
        }
      },
    },
  },
  plugins: [],
}
