export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#060608',
        surface: '#0B0B0E',
        elevated: '#121216',
        copper: '#C97A40',
        steel: '#D4D8DF',
        muted: '#8A8F99',
      },
      fontFamily: {
        display: ['"Unbounded"', 'sans-serif'],
        sans: ['"Manrope"', 'sans-serif'],
      },
      transitionTimingFunction: {
        outExpo: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
    },
  },
  plugins: [],
};
