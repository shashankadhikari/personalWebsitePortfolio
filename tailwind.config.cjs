/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "custom-bg": "#e7e9f1",
        "custom-text": "#3b3d52",
        "custom-button": "#3b3d52",
        "custom-accent": "#2b2d42",
        "gs-athome": "#FDF1EA",
      },
      fontFamily: {
        sans: "'Encode Sans Semi Condensed', sans-serif",
        arial: "'Arial', sans-serif",
      },
      fontSize: {
        "15xl": "18rem",
        "12xl": "11rem",
      },
      dropShadow: {
        "10xl": "6px 6px 0px #3b3d52",
      },
    },
  },
  plugins: [],
};
