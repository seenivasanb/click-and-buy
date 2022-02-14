module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,jsx,ts,tsx,vue}'],
  content: [],
  theme: {
    fontFamily: {
      'family-regular': 'regular-font',
      'family-bold': 'bold-font'
    },
    extend: {
      colors: {
        primary: '#153a5b',
        secondary: '#5A5E60',
        'light-gray': '#f5f9fc',
      },
    },
  },
  plugins: []
};