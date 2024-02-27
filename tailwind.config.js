/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#181818",
      },
      boxShadow: {
        imgShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
