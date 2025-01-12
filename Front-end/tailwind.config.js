import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'shad-dark' : '-10px -10px 0px 10px #f0f9ff',
        'shad-white' : '-30px -30px 0px 30px #f0f9ff',
        'shad-dark-right' : '10px -10px 0px 10px #f0f9ff',
        'shad-white-right' : '30px -30px 0px 30px #f0f9ff',
      }
    },
  },
  plugins: [
    daisyui
  ],
}

