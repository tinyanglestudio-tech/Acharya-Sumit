import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cosmic:  '#050510',
        navy:    '#0A0A2E',
        gold:    '#C9A84C',
        'gold-lt': '#e8c96a',
        saffron: '#FF6B1A',
        cream:   '#F5ECD7',
        purple:  '#3D1A6E',
        kumkum:  '#7B1C1C',
      },
      fontFamily: {
        cinzel:     ['var(--font-cinzel)', 'serif'],
        garamond:   ['var(--font-garamond)', 'serif'],
        devanagari: ['var(--font-devanagari)', 'serif'],
      },
      keyframes: {
        'om-glow': {
          '0%, 100%': {
            filter: 'drop-shadow(0 0 12px rgba(201,168,76,0.95)) drop-shadow(0 0 40px rgba(201,168,76,0.7)) drop-shadow(0 0 80px rgba(201,168,76,0.35))',
          },
          '50%': {
            filter: 'drop-shadow(0 0 18px rgba(255,220,100,1)) drop-shadow(0 0 60px rgba(201,168,76,0.9)) drop-shadow(0 0 120px rgba(201,168,76,0.55))',
          },
        },
        'om-float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        'aura-pulse': {
          '0%, 100%': { transform: 'translate(-50%, -50%) scale(1)',    opacity: '0.75' },
          '50%':      { transform: 'translate(-50%, -50%) scale(1.18)', opacity: '1' },
        },
        'gold-shimmer': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':      { backgroundPosition: '100% 50%' },
        },
        'btn-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(201,168,76,0.3), 0 4px 16px rgba(0,0,0,0.3)' },
          '50%':      { boxShadow: '0 0 50px rgba(201,168,76,0.6), 0 4px 24px rgba(0,0,0,0.4)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        'scroll-drop': {
          '0%':   { transform: 'scaleY(0)', transformOrigin: 'top',    opacity: '1' },
          '50%':  { transform: 'scaleY(1)', transformOrigin: 'top',    opacity: '1' },
          '100%': { transform: 'scaleY(1)', transformOrigin: 'bottom', opacity: '0' },
        },
        'spin-slow': {
          from: { transform: 'translate(-50%, -50%) rotate(0deg)' },
          to:   { transform: 'translate(-50%, -50%) rotate(360deg)' },
        },
        'spin-slow-reverse': {
          from: { transform: 'translate(-50%, -50%) rotate(0deg)' },
          to:   { transform: 'translate(-50%, -50%) rotate(-360deg)' },
        },
      },
      animation: {
        'om-glow':          'om-glow 3s ease-in-out infinite',
        'om-float':         'om-float 6s ease-in-out infinite',
        'aura-pulse':       'aura-pulse 3s ease-in-out infinite',
        'gold-shimmer':     'gold-shimmer 3s ease-in-out infinite',
        'btn-pulse':        'btn-pulse 2.5s ease-in-out infinite',
        'fade-in':          'fade-in 1s ease-out both',
        'fade-up':          'fade-up 1s ease-out both',
        'scroll-drop':      'scroll-drop 1.5s ease-in-out infinite',
        'spin-slow':        'spin-slow 60s linear infinite',
        'spin-slow-reverse':'spin-slow-reverse 90s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
