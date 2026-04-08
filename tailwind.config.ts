import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        solar: {
          orange: '#F97316',
          gold: '#F59E0B',
        },
        navy: {
          DEFAULT: '#1E3A5F',
          light: '#2D5A8E',
          dark: '#0F2340',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-orange': 'linear-gradient(135deg, #F97316 0%, #F59E0B 100%)',
        'gradient-navy': 'linear-gradient(135deg, #1E3A5F 0%, #2D5A8E 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0F2340 0%, #1E3A5F 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'count-up': 'countUp 2s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      boxShadow: {
        'glow-orange': '0 0 30px rgba(249, 115, 22, 0.3)',
        'glow-navy': '0 0 30px rgba(30, 58, 95, 0.3)',
      },
    },
  },
  plugins: [],
}

export default config
