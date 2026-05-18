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
        cream: {
          DEFAULT: '#FCFCF7',
          50: '#FDFDF9',
          100: '#F8F5EF',
          200: '#F2EDE4',
          300: '#EBE4D8',
        },
        rose: {
          DEFAULT: '#E8A4A4',
          dark: '#D48484',
          light: '#F5D5D5',
          muted: '#FCF3F3',
        },
        sage: {
          DEFAULT: '#B8C9B5',
          dark: '#9BB89A',
          light: '#D4E2D1',
        },
        charcoal: {
          DEFAULT: '#2D2D2D',
          muted: '#7A7070',
          light: '#B5ACAC',
        },
        nude: {
          DEFAULT: '#D4A99A',
          dark: '#C4897A',
          light: '#EDD8D0',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        heading: ['Playfair Display', 'Georgia', 'serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
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
