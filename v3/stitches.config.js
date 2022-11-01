import { createStitches, globalCss } from '@stitches/react';
import {
  slateA,
  slate,
  blue,
  red,
  green,
  slateDark,
  blueDark,
  redDark,
  greenDark,
} from '@radix-ui/colors';

const preflight = globalCss({
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
    borderColor: 'currentColor'
  },
  '.google-map *': {
    borderStyle: "none"
  },
  'button:focus': {
    outline: "1px dotted",
    outline: "5px auto -webkit-focus-ring-color"
  }

});

preflight()

export const { theme, styled, getCssText, css } = createStitches({
  theme: {
    fonts: {
      sans: 'Inter, sans-serif, system-ui',
    },
    colors: {
      ...slate,
      ...slateA,
      ...blue,
      ...red,
      ...green,
    },
  },
  media: {
    bp1: '(min-width: 640px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1024px)',
    hover: '(any-hover: hover)',
  }
});

// theme.colors