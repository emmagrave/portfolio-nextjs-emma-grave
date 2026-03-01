/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#c9a0a8',
        accent: '#d4a5ae',
        dark: '#2d2d2d',
        light: '#f8f5f3',
        muted: '#999999',
        border: '#ece6e3',
      },
      fontFamily: {
        sans: ['var(--font-crimson)'],
        cursive: ['var(--font-allura)'],
      },
      animation: {
        'fade-up': 'fadeUp 0.9s ease-out both',
        'morph': 'morphBlob 22s ease-in-out infinite',
        'shimmer': 'shimmer 2.2s infinite',
        'pulse-dot': 'pulseDot 2.2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          'from': { opacity: '0', transform: 'translateY(28px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        morphBlob: {
          '0%, 100%': { 
            borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
            transform: 'rotate(0deg) scale(1)'
          },
          '25%': {
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            transform: 'rotate(90deg) scale(1.08)'
          },
          '50%': {
            borderRadius: '30% 60% 50% 40% / 50% 60% 40% 60%',
            transform: 'rotate(180deg) scale(0.92)'
          },
          '75%': {
            borderRadius: '50% 40% 60% 40% / 40% 50% 50% 60%',
            transform: 'rotate(270deg) scale(1.04)'
          },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        pulseDot: {
          '0%, 100%': { 
            boxShadow: '0 0 0 2px #c9a0a8, 0 0 8px rgba(201, 160, 168, 0.4)' 
          },
          '50%': { 
            boxShadow: '0 0 0 2px #c9a0a8, 0 0 20px rgba(201, 160, 168, 0.7)' 
          },
        },
      },
    },
  },
  plugins: [],
}
