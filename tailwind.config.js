/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      kaushan: ["Kaushan Script"],
    },
    extend: {
      colors: {
        orange: {
          DEFAULT: "#F43D1C",
        },
      },
    },
    plugins: [],
  },
};
