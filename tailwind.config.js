/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './templates/**/*.twig',
		'./assets/javascript/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'wh-blue': '#0a2458',
      },
      fontFamily: {
        'custom': ['Mercury', 'Brutapro'],
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
