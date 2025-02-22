/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sourceSans3: "'Source Sans 3', sans-serif"
      }
    },
  },
  plugins: [
    require('daisyui'),
    require('flowbite/plugin')
  ],
}

