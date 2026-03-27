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
        primary: {
          DEFAULT: '#D4AF37',
          dark: '#B8962E',
          light: '#E8C84A',
        },
        secondary: '#F5E6D3',
        dark: {
          DEFAULT: '#0A0A0A',
          50: '#141414',
          100: '#1A1A1A',
          200: '#242424',
          300: '#2E2E2E',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#E8C84A',
          dark: '#B8962E',
        },
        rose: {
          DEFAULT: '#C9A9A6',
          dark: '#B89393',
          light: '#D4B5B2',
        },
        accent: {
          cream: '#F5E6D3',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-bebas)', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundSize: {
        '200%': '200% 200%',
      },
    },
  },
  plugins: [],
}
