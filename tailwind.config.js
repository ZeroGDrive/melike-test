/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        success: "rgb(var(--color-success) / <alpha-value>)",
        danger: "rgb(var(--color-danger) / <alpha-value>)",
        primary: {
          DEFAULT: "rgb(var(--color-primary))",
          bright: "rgb(var(--color-primary-bright))",
        },
        background: "rgb(var(--color-background))",
        gray: {
          text: "rgb(var(--color-gray-text))",
        },
      },
      fontFamily: {
        sans: ["var(--font-primary)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
