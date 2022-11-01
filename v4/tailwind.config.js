/** @type {import('tailwindcss').Config} */ 

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      gray: {
        1: '#fcfcfc',
        2: '#f8f8f8',
        3: '#f3f3f3',
        4: '#ededed',
        5: '#e8e8e8',
        6: '#e2e2e2',
        7: '#dbdbdb',
        8: '#c7c7c7',
        9: '#8f8f8f',
        10: '#858585',
        11: '#6f6f6f',
        12: '#171717',
      },
      pink: {
        1: '#fffcfd',
        2: '#fff7fb',
        3: '#feeff6',
        4: '#fce5f0',
        5: '#f9d8e7',
        6: '#f4c6db',
        7: '#edadc8',
        8: '#e58fb1',
        9: '#e93d82',
        10: '#e03177',
        11: '#d31e66',
        12: '#3d0d1d',
      },
      orange:{
        1: '#fffcfc',
        2: '#fff8f7',
        3: '#fff0ee',
        4: '#ffe6e2',
        5: '#fdd8d3',
        6: '#fac7be',
        7: '#f3b0a2',
        8: '#ea9280',
        9: '#e54d2e',
        10: '#db4324',
        11: '#ca3214',
        12: '#341711',
      },
      green:{
        1: '#fbfefb',
        2: '#f3fcf3',
        3: '#ebf9eb',
        4: '#dff3df',
        5: '#ceebcf',
        6: '#b7dfba',
        7: '#97cf9c',
        8: '#65ba75',
        9: '#46a758',
        10: '#3d9a50',
        11: '#297c3b',
        12: '#1b311e',
      },
      blue: {
        1: '#fdfdfe',
        2: '#f8faff',
        3: '#f0f4ff',
        4: '#e6edfe',
        5: '#d9e2fc',
        6: '#c6d4f9',
        7: '#aec0f5',
        8: '#8da4ef',
        9: '#3e63dd',
        10: '#3a5ccc',
        11: '#3451b2',
        12: '#101d46',
      }
    },
    fontSize: {
      xxl: "128px",
      xl: "72px",
      lg: "56px",
      md: "32px",
      sm: "24px",
      xs: "20px",
    },

    // extend: {
    //   fontFamily: {
    //     'sans': ['TT Hoves', ...defaultTheme.fontFamily.sans],
    //     'serif': ['Larken', ...defaultTheme.fontFamily.serif],
    //     // 'mono': [...defaultTheme.fontFamily.mono]
    //   },
    // },
  },
  plugins: [],
}
