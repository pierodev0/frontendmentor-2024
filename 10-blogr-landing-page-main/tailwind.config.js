/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-red': 'hsl(356, 100%, 66%)', // CTA text
        'very-light-red': 'hsl(355, 100%, 74%)', // CTA hover background
        'very-dark-blue': 'hsl(208, 49%, 24%)', // headings
        'white': 'hsl(0, 0%, 100%)', // text
        'grayish-blue': 'hsl(240, 2%, 79%)', // footer text
        'very-dark-grayish-blue': 'hsl(207, 13%, 34%)', // body copy
        'very-dark-black-blue': 'hsl(240, 10%, 16%)', // footer background
        //gradients
        'very-light-red': 'hsl(13, 100%, 72%)',
        'light-red': 'hsl(353, 100%, 62%)',
        'very-dark-gray-blue': 'hsl(237, 17%, 21%)',
        'very-dark-desaturated-blue': 'hsl(237, 23%, 32%)',
      }
    },

  },
  plugins: [],
}

