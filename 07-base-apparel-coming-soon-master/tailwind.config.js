/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'desaturated-red': 'hsl(0, 36%, 70%)',
        'soft-red': 'hsl(0, 93%, 68%)',
        'dark-grayish-red': 'hsl(0, 6%, 24%)',
        'gradient-1': {
          from: 'hsl(0, 0%, 100%)',
          to: 'hsl(0, 100%, 98%)',
        },
        'gradient-2': {
          from: 'hsl(0, 80%, 86%)',
          to: 'hsl(0, 74%, 74%)',
        },
      },
      fontFamily: {
        'sans': ['"Josefin Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

