/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "dp.html", // Include HTML files
    "dp.js", // Include JavaScript files
    "dp.css", // Include CSS files
  ],
  theme: {
    colors: {
      ry: "#e63946",
      wg: "#f1faee",
      bw: "#a8dadc",
      bb: "#457b9d",
      db: "#1d3557",
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
  },

  plugins: [],
};
