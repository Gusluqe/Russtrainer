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
          100: '#F5F2E9',
          200: '#EFEBDD',
          300: '#E6DFD0',
        },
        rose: {
          DEFAULT: '#d4848f',
          dark: '#c47a82',
          deep: '#a85c68',
          deeper: '#94505b',
          light: '#f4e1e3',
          muted: '#fbf1f1',
        },
        plum: {
          DEFAULT: '#3b2a24',
          light: '#4a2f27',
        },
        sage: {
          DEFAULT: '#B8C9B5',
          dark: '#9BB89A',
          light: '#D4E2D1',
        },
        charcoal: {
          DEFAULT: '#3b2a24',
          muted: '#6e655d',
          light: '#b5a89e',
        },
        nude: {
          DEFAULT: '#b98468',
          dark: '#a06b52',
          light: '#e9c9bd',
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
