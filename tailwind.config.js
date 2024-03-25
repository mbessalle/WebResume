module.exports = {
  content: [
    './src/**/*.{astro,js,jsx,ts,tsx}', 
  ],
  darkMode: 'class', 
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'), 
  ],
};
