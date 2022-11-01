import { styled, css } from '../../stitches.config';
import { Text, sharedStyles } from './Text'

export const TextField = styled("input",{
  // Reset
  appearance: 'none',
  borderWidth: '0',
  boxSizing: 'border-box',
  fontFamily: 'inherit',
  margin: '0',
  outline: 'none',
  padding: '0',
  width: '100%',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  }, 

  variants: {
    ...sharedStyles.variants,
    height: {
      sm: {
        height: "32px"
      },
      md: {
        height: "40px",
        padding: "10px"
      },
    }
  },

});


