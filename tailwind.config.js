/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    // colors: {
    //   primary: 'rgb(var(--color-primary) / <alpha-value>)',
    //   secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
    // },

    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        background: 'rgb(var(--color-background) / <alpha-value>)'
      },
      backgroundImage: {
        'heroGradient': 'radial-gradient(circle at 15% 50%, rgba(236, 233, 253, 1), rgba(255, 255, 255, 0) 25%), radial-gradient(circle at 85% 30%, rgba(216, 243, 246, 1), rgba(255, 255, 255, 0) 25%)',
        'heroGrid': "url(/grid.svg)",
        'lineGradient': 'bg-gradient-to-l from-slate-300'
      }
    },
  },
  plugins: [],
}

