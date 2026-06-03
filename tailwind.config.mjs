/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        jetbrains: ['JetBrains Mono', 'monospace'],
        geist: ['Geist', 'system-ui', 'sans-serif'],
        'geist-mono': ['Geist Mono', 'monospace'],
        squada: ['Squada One', 'system-ui', 'sans-serif'],
        sourceSans: ['Source Sans3', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#1e1e1e',
        secondary: '#93C9C7',
        tertiary: '#3e3e3e',
        quaternary: '#4e4e4e',
        quinary: '#5e5e5e',
        senary: '#6e6e6e',
        septenary: '#7e7e7e',
        octonary: '#8e8e8e',
        nonary: '#9e9e9e',
        decenary: '#aeaeae',
        accent: {
          light: '#b8e0de',
          DEFAULT: '#93C9C7',
          dark: '#5a9e9b',
          glow: 'rgba(147, 201, 199, 0.35)',
        },
        surface: {
          DEFAULT: '#111111',
          light: '#1a1a1a',
          lighter: '#222222',
          border: 'rgba(255, 255, 255, 0.06)',
          'border-hover': 'rgba(147, 201, 199, 0.2)',
        },
      },
      screens: {
        md: '769px',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.333%)' },
        },
        slide: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        slide: 'slide 30s linear infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
