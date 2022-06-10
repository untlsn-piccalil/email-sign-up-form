module.exports = {
  purge: false,
  extract: {
    include: ['**/*.{jsx,tsx,css}'],
    exclude: ['node_modules', '.git', '.next'],
  },
  theme: {
    extend: {
      colors: {
        'primary': '#4c2982',
        'secondary': '#f9d170',
        'bg': '#f9f7f3',
        'text': '#252525',
        'light': '#f3f3f3',
        'success': '#067973',
        'success-bg': '#f5fffe',
        'error': '#b71540',
        'error-bg': '#fdeff3',
      },
    },
  },
  plugins: [],
};
