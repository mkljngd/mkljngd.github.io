/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark mode color palette
        background: {
          black: '#0C0C0C',
          dark: '#1A1A1A',
          border: '#2C2C2C',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#B3B3B3',
        },
        primary: {
          50: '#fff4f0',
          100: '#ffe6d9',
          200: '#ffccb3',
          300: '#ffa680',
          400: '#ff7a4d',
          500: '#FF4D00',
          600: '#e64400',
          700: '#cc3d00',
          800: '#b33600',
          900: '#992f00',
        },
        secondary: {
          50: '#fff4f0',
          100: '#ffe6d9',
          200: '#ffccb3',
          300: '#ffa680',
          400: '#ff7a4d',
          500: '#FF6A1A',
          600: '#e65f17',
          700: '#cc5414',
          800: '#b34911',
          900: '#993e0e',
        },
        accent: {
          50: '#fff4f0',
          100: '#ffe6d9',
          200: '#ffccb3',
          300: '#ffa680',
          400: '#ff7a4d',
          500: '#FF6A1A',
          600: '#e65f17',
          700: '#cc5414',
          800: '#b34911',
          900: '#993e0e',
        }
      },
      fontFamily: {
        'sans': ['Montserrat', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'gradient': 'gradient 15s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        }
      }
    },
  },
  plugins: [],
}
