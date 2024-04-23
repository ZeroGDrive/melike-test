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
        background: {
          DEFAULT: "rgb(var(--color-background))",
          dialog: "rgb(var(--color-dialog-backdrop) / <alpha-value>)",
        },
        gray: {
          text: "rgb(var(--color-gray-text))",
        },
      },
      fontFamily: {
        sans: ["var(--font-primary)", "sans-serif"],
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-in-out",
      },
    },
  },
  plugins: [],
};
