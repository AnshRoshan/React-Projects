/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  // darkMode: ["selector", '[data-mode="dark"]'],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // font-family: 'Poppins', sans-serif; in classname poppins
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        sans: ['Open Sans', 'sans-serif'],
      },
      colors: {
        accent: "rgba(var(--accent))",
        primary: "rgba(var(--primary))",
        secondary: "rgba(var(--secondary))",
        tertiary: "rgba(var(--tertiary))",
        text: "rgba(var(--text))",
        background: "rgba(var(--background))",
      },
      keyframes: {
        spin: {
          '0%, 100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        spin: 'spin 1s linear infinite',
      },

    },
  },
  // Add custom utility class
  utilities: {
    '.centered': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  plugins: [],
};
