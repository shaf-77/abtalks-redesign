/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#171717',
        muted: '#737373',
        paper: '#f8f7f4',
        line: '#e8e5df',
        accent: '#6d5dfc',
        warm: '#f3efe7',
        green: '#3f8f6b',
      },
      boxShadow: {
        soft: '0 8px 30px rgba(28, 25, 23, .06)',
        card: '0 2px 10px rgba(28, 25, 23, .04), 0 12px 35px rgba(28, 25, 23, .05)',
      },
    },
  },
  plugins: [],
}