/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      default: '#2A292A',
      white: '#F5F5F5',
      green: '#31854D',
    },
    fontSize: {
      base: ['1rem', '1.5rem'] /* 16px */,
      lg: ['1.5rem', '2rem'] /* 24px */,
      xl: ['1.875rem', '2.25rem'] /* 32px*/,
      xxl: ['3.75rem', '1'] /* 60px*/,
    },
    extend: {
      backgroundImage: {
        main: "url('assets/images/main.png')",
      },
      height: {
        main: 'calc(100vh - 3.5rem)',
      },
    },
  },
  plugins: [],
};
