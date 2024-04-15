import { ssrExportAllKey } from 'vite/runtime';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      display: ['Merriweather', 'sans-serif'],
    },
    animation: {
      'slide-in-right': 'slide-in-right 1s ease-out',
      'slide-out-right': 'slide-out-right 3s ease-out',
      spin: 'spin 1s linear infinite',
      ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    },
    extend: {
      keyframes: {
        'slide-in-right': {
          '0%': {
            transform: 'translateX(1000px)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: 1,
          },
        },
        'slide-out-right': {
          '100%': {
            transform: 'translateX(1000px)',
            opacity: 0,
          },
          '0%': {
            transform: 'translateX(0)',
            opacity: 1,
          },
        },
        spin: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
        ping: {
          '75%, 100%': {
            transform: 'scale(2)',
            opacity: 0,
          },
        },
        pulse: {
          '50%': {
            opacity: '.5',
          },
        },
      },
    },
  },
  plugins: [],
};
