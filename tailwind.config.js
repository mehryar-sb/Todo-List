/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "500px",
      // => @media (min-width: 500px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "972px",
      // => @media (min-width: 972px) { ... }

      xl: "1120px",
      // => @media (min-width: 1120px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
