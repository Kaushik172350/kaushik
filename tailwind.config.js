/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          950: '#070A14',
          900: '#0A0E1A',
          850: '#0D1220',
          800: '#111729',
          700: '#1A2138',
          600: '#2A3352',
        },
        light: {
          50: '#F7F8FC',
          100: '#EEF1F8',
          200: '#E2E6F0',
        },
        ink: {
          100: '#E7EAF3',
          300: '#B7BDD1',
          500: '#8B93A7',
          700: '#4C5468',
        },
        accent: {
          blue: '#4F7FFF',
          teal: '#22D3B8',
          amber: '#FFB454',
          pink: '#F472B6',
          purple: '#A78BFA',
          orange: '#FB923C',
          red: '#F87171',
          cyan: '#22D3EE',
          green: '#4ADE80',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'stack-gradient': 'linear-gradient(135deg, #4F7FFF 0%, #22D3B8 100%)',
        'stack-gradient-soft': 'linear-gradient(135deg, rgba(79,127,255,0.15) 0%, rgba(34,211,184,0.15) 100%)',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'float-slow': 'float 12s ease-in-out infinite',
        'blink': 'blink 1s step-end infinite',
        'marquee': 'marquee 30s linear infinite',
        'gradient-x': 'gradient-x 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(-20px) translateX(10px)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
