import { createStitches, globalCss, createTheme } from '@stitches/react';
import {
  tomato,
  red,
  crimson,
  pink,
  plum,
  purple,
  violet,
  indigo,
  blue,
  cyan,
  teal,
  green,
  grass,
  orange,
  brown,
  slate,
  tomatoDark,
  redDark,
  crimsonDark,
  pinkDark,
  plumDark,
  purpleDark,
  violetDark,
  indigoDark,
  blueDark,
  cyanDark,
  tealDark,
  greenDark,
  grassDark,
  orangeDark,
  brownDark,
  slateDark
  
} from '@radix-ui/colors';
import type * as Stitches from '@stitches/react';
// export type { VariantProps } from '@stitches/react';

export const { theme, styled, getCssText, css, config } = createStitches({
  theme: {
    fonts: {
      sans: 'Hoves, sans-serif',
      serif: 'Larken, serif',
      mono: '"Space Mono", monospace'
    },
    fontSizes: { 
      // needs to have a unit like px or it wont work
      // these all get converted to css variables then assigned to the proper properties. 
      // this is why unitless doesn't work here but would work in a standard JS object
      fontSize1: "12px", // caption
      fontSize2: "14px", // body small
      fontSize3: "16px", // body
      fontSize4: "20px", // title
      fontSize5: "24px", // h4
      fontSize6: "32px", // h3
      fontSize7: "48px", // h2
      fontSize8: "64px", // h1
    },

    shadows: {
      sm: "8px 0px 20px 0px $colors$slate6"
    },

    space: {
      // Scale in pixels -- isn't good and leaves akward outcomes.
      // 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 448, 512, 640, 768, 896, 1024, 1280, 1536, 1792, 2048 
      // dense:   1, 2, 3, | 4, 6,  8,  12, 16, 24, 32, 48, 64
      // regular: 1, 2, 4, | 6, 8,  12, 16, 24, 32, 48, 64, 96
      // loose:   1, 3, 6, | 8, 12, 16, 24, 32, 48, 56, 80, 112
    },
    lineHeights: {
      lineHeight1: '1',
      lineHeight2: '1.25',
      lineHeight3: '1.5',
    },
    colors: {
      ...tomato,
      ...red,
      ...crimson,
      ...pink,
      ...plum,
      ...purple,
      ...violet,
      ...indigo,
      ...blue,
      ...cyan,
      ...teal,
      ...green,
      ...grass,
      ...orange,
      ...brown,
      ...slate,
    },
  },
  media: {
    bp1: '(min-width: 640px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1024px)',
    hover: '(any-hover: hover)',
  },
  utils: {
    px: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    p: (value: Stitches.PropertyValue<'padding'>) => ({
      padding: value,
    }),
  }
});

export const darkTheme = createTheme('dark', {
    colors: {
      ...tomatoDark,
      ...redDark,
      ...crimsonDark,
      ...pinkDark,
      ...plumDark,
      ...purpleDark,
      ...violetDark,
      ...indigoDark,
      ...blueDark,
      ...cyanDark,
      ...tealDark,
      ...greenDark,
      ...grassDark,
      ...orangeDark,
      ...brownDark,
      ...slateDark
    }
})


const preflight = globalCss({
  '@font-face': [
    {
      fontFamily: 'TT-Hoves',
      src: 'local(Hoves) url("../assets/fonts/TT-Hoves-Pro.woff2")',
    },
    {
      fontFamily: 'Larken',
      src: 'local(Larken) url("../assets/fonts/Larken.woff2")',
    },
  ],

  ':root':{
    fontSize: "1rem" // set the root rem
  },
  'body': {
    // fontSize: theme.fontSizes.fontSize3, // set the default fontSize so it doesn't always render 4px based on :root.
    fontFamily: theme.fonts.serif,
    padding: 0,
    margin: 0,
  },
  // reset global styles based on TWCSS Preflight https://tailwindcss.com/docs/preflight
  'blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre': {
    margin: 0,
  },
  'h1, h2, h3, h4, h5, h6': {
    fontSize: "inherit",
    fontWeight: "inherit",
  },
  'ol, ul': {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  'img, svg, video, canvas, audio, iframe, embed, object': {
    display: "block",
    verticalAlign: "middle"
  },
  '*, ::before, ::after': {
    borderWidth: "0",
    borderStyle: "solid",
    borderColor: 'currentColor',
    boxSizing: "border-box"
  },
  '.google-map *': {
    borderStyle: "none"
  },
  'button:focus': {
    outline: "1px dotted",
    // outline: "5px auto -webkit-focus-ring-color"
  }

});

preflight()