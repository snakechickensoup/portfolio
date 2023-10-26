/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      default: '#2A292A',
      white: '#F5F5F5',
      green: '#31854D',
      yellow: '#FFCD29',
      blind: '#E94057',
      bryta: '#FFAA28',
    },
    fontSize: {
      xs: ['0.75rem', '1rem'] /* 12px */,
      sm: ['0.875rem', '1.25rem'] /* 14px */,
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
      transitionProperty: {
        window: 'width, height',
      },
    },
    listStyleType: {
      square: 'square',
    },
  },
  plugins: [],
};
