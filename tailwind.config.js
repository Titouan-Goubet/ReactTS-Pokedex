/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        custom: ['"Roboto:100,900"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
