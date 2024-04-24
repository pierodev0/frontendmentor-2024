/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red2': 'hsl(0, 100%, 74%)',
        'green2': 'hsl(154, 59%, 51%)',
        'blue2': 'hsl(248, 32%, 49%)',
        'dark-blue': 'hsl(249, 10%, 26%)',
        'grayish-blue': 'hsl(246, 25%, 77%)',
      },
    },
  },
  plugins: [],
}

