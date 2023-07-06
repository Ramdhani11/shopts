/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#055429",
        secondary: "#e3ffdc",
        grey: "#5a645f",
        smoothGrey: "#9d9d9d",
        myBlack: "#04170d",
        lightWhite: "#fafafa",
        borderColor: "#f4f4f5",
      },
    },
  },
  plugins: [],
};
