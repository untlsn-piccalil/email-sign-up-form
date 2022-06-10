module.exports = {
  purge: false,
  extract: {
    include: ['**/*.{jsx,tsx,css}'],
    exclude: ['node_modules', '.git', '.next'],
  },
  theme: {
    extend: {
      colors: {
        primary: '#4c2982',
        secondary: '#f9d170',
        bg: {
          primary: '#f9f7f3',
          success: '#f5fffe',
          error: '#fdeff3',
        },
        text: '#252525',
        light: '#f3f3f3',
        success: '#067973',
        error: '#b71540',
      },
    },
  },
  plugins: [],
};
