/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
      screens: {
      'iphone': '414px',
      'phones': '640px',
      'tablets': '768px',
      'desktop': '1024px',
    },
  },
  plugins: [],
};
