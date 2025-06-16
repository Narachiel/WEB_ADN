/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      colors: {
        'sky-blue': 'var(--sky-blue)',
        'sky-blue-dark': 'var(--sky-blue-dark)',
        'sky-orange': 'var(--sky-orange)',
        'sky-green': 'var(--sky-green)',
      },
    },
  },
  plugins: [],
}
