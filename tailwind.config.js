/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "netflix-red": {
          800: "#E50914",
          400: "#f6121d",
          200: "#f72a35",
          100: "#f8434c",
        },
      },
    },
  },
  plugins: [],
};
