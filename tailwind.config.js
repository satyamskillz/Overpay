module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }
    },
    colors: {
      primary: {
        DEFAULT: '#194BFB',
        400: '#436CFF',
        300: '#95ADFF',
        200: '#BFCDFF',
        100: '#E8EDFF',
      },
      secondary: {
        DEFAULT: '#1A202C',
        400: '#5D6A83',
        300: '#96A3BE',
        200: '#D8E3F8',
        100: '#F2F6FF',
      },
      error: {
        DEFAULT: '#FF4747',
        light: '#FF7171',
        dark: '#DD3333',
      },
      warn: {
        DEFAULT: '#FACC15',
        light: '#FDE047',
        dark: '#EAB308',
      },
      success: {
        DEFAULT: '#22C55E',
        light: '#4ADE80',
        dark: '#16A34A',
      },
      gray: {
        50: '#FAFAFA',
        100: '#F7FAFC',
        200: '#EDF2F7',
        300: '#E2E8F0',
        400: '#CBD5E0',
        500: '#A0AEC0',
        600: '#718096',
        700: '#2A313C',
        800: '#232B38',
        900: '#1A202C',
      },
    },
  },
  plugins: [],
}
