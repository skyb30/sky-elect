/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        sky: {
          900: '#08122B',
          800: '#0B1D3D',
          700: '#12325F',
          600: '#1E4A8A',
          500: '#2563EB',
        },
        electric: {
          blue: '#2563EB',
          orange: '#F97316',
          white: '#FFFFFF',
        },
      },
      boxShadow: {
        soft: '0 12px 30px rgba(0,0,0,0.10)',
        premium: '0 25px 80px rgba(0,0,0,0.18)',
      },
      backdropBlur: {
        18: '18px',
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(1000px 700px at 15% 15%, rgba(37, 99, 235, 0.25), transparent 55%), radial-gradient(900px 650px at 85% 25%, rgba(249, 115, 22, 0.20), transparent 50%), linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0))',
      },
    },
  },
  plugins: [],
}

