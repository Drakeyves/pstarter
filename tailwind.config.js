module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors
        'bg-primary': '#0D0D14',
        'bg-secondary': '#141421',
        'accent-purple': {
          light: '#9F7AEA',
          DEFAULT: '#7A6FE3',
          dark: '#553C9A',
        },
        'accent-teal': {
          light: '#2ED6A7',
          DEFAULT: '#25B592',
          dark: '#1C8870',
        },
        'accent-gold': {
          light: '#F7B731',
          DEFAULT: '#F5A623',
          dark: '#D48806',
        },
        'accent-metallic': {
          light: '#C5C5D3',
          DEFAULT: '#A1A1B5',
          dark: '#71718A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  daisyui: {
    themes: [
      {
        'propulsion-society': {
          primary: '#7A6FE3',
          secondary: '#25B592',
          accent: '#F5A623',
          neutral: '#A1A1B5',
          'base-100': '#0D0D14',
          'base-200': '#141421',
          'base-300': '#1F1F2C',
          info: '#3ABFF8',
          success: '#25B592',
          warning: '#F5A623',
          error: '#F87272',
        },
      },
      'corporate',
      'black',
    ],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
