/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        popOut: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '70%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' }
        },
        bubble: {
          '0%': {
            transform: 'translateY(100%) translateX(-50%)',
            opacity: '0'
          },
          '50%': {
            opacity: '0.5'
          },
          '100%': {
            transform: 'translateY(-100%) translateX(50%)',
            opacity: '0'
          }
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        }
      },
      animation: {
        'pop-out': 'popOut 4s ease-out forwards',
        'shimmer': 'shimmer 8s linear infinite',
        'bubble-slow': 'bubble 8s ease-in-out infinite',
        'bubble-medium': 'bubble 6s ease-in-out infinite',
        'bubble-fast': 'bubble 4s ease-in-out infinite',
        'fade-in': 'fadeIn 3s ease-in'
      },
      backgroundSize: {
        'shimmer': '200% 100%',
        'bubble': '400% 400%'
      },
      backgroundImage: {
        'bubble-pattern': `
          radial-gradient(circle at 20% 50%, rgba(147, 197, 253, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 30%, rgba(147, 197, 253, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 70%, rgba(147, 197, 253, 0.1) 0%, transparent 50%)
        `
      }
    },
  },
  plugins: [],
};
