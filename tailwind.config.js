/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        xl: "2rem",
      },
      screens: {
        sm: "768px",
        md: "1024px",
        lg: "1280px",
        xl: "1440px",
      },
    },
    extend: {
      colors: {
        primary: {
          gold: "#CCA208",
        },
        accent: {
          "red-600": "#6E0E10",
        },
      },
      fontFamily: {
        avenir: ["Avenir", "sans-serif"],
      },
      backgroundImage: {
        image: "url('/src/assets/images/center.png')",
        profile: "url('/src/assets/images/profile.png')",
      },
    },
  },
  plugins: [],
};
