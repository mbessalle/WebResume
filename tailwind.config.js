module.exports = {
  content: [
    './src/**/*.{astro,js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // This will justify text in all 'prose' class elements
            p: {
              textAlign: 'justify',
            },
            // Add other elements as needed
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
