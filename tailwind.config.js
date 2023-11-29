/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        hexcolor: "#00ff00",
        hslcolor: "hsl(120, 100%, 50%)",
      },
    },
  },
  plugins: [],
};
