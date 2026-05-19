export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 20px 60px rgba(15, 23, 42, 0.35)',
      },
      colors: {
        surface: '#0f172a',
        panel: '#111827',
        line: '#243041',
      },
    },
  },
  plugins: [],
};