/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Poppins", "sans-serif"],
      },
      color: {
        "primaryColor": "#242532",
        "secondaryColor": "#313444 ",
        "Title": "#313444",
      },
    },
  },
  plugins: [],
}

