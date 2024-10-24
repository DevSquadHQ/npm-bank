/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "Navy-blue": "#111928",
        "form": "#1F2A37",
        "input": "#374151",
        'button':'#1C64F2'
      },
      margin:{
        'auto':'auto'
      }
    },
  },
  plugins: [],
};
