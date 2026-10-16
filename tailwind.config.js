/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#ffffff', // Pure white background matching user request
          secondary: '#ffffff',
          tertiary: '#f8fafc',
          card: '#ffffff',
          cardHover: '#fbfcfd',
        },
        accent: {
          DEFAULT: '#059669', // Professional Emerald Green
          hover: '#047857',
          light: '#10b981',
          muted: '#ecfdf5',
          border: '#a7f3d0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.02)',
        'card-hover': '0 12px 28px -6px rgba(15, 23, 42, 0.08), 0 6px 10px -4px rgba(15, 23, 42, 0.04)',
        'photo': '0 20px 40px -15px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(226, 232, 240, 0.9)',
      }
    },
  },
  plugins: [],
}
