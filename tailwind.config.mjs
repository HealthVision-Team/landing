/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'teal': '#0B8686',
        'deep-teal': '#4A8383',
        'blue-green': '#CDE8E8',
        'dark-green': '#073434',
        'deep-blue': '#4A6073',
        'light-blue': '#D7E2FF',
        'dark-blue': '#002042',
        'grey': '#505050',
        'grey-2': '#677182',
        'grey-3': '#E8E8E8',
        'grey-4': '#B8B8B8',
        'grey-5': '#FAFAFA'
      }
    }
  },
  plugins: []
}