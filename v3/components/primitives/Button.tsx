import { styled, theme } from '../../stitches.config'
import * as Text from './Text'


export const Button = styled("button", {
    // Reset
    all: 'unset',
    alignItems: 'center',
    boxSizing: 'border-box',
    userSelect: 'none',
    '&::before': {
      boxSizing: 'border-box',
    },
    '&::after': {
      boxSizing: 'border-box',
    },
    appearance: 'none',
    border: 'none',
    width: "200px",
    lineHeight: 1,
    display: 'inline-flex',
    flexShrink: 0,
    justifyContent: 'center',
    WebkitTapHighlightColor: 'rgba(0,0,0,0)',
    borderRadius: "4px",
    $$currentColor: "",
    
    
    variants: {
        size: {
            xs: {
                ...Text.sharedStyles.variants.size.xs,
                height: "24px",
                paddingLeft: "4px",
                paddingRight: "4px",
                // borderRadius: "2px"
            },
            sm: {
                ...Text.sharedStyles.variants.size.sm,
                height: "32px",
                paddingLeft: "4px",
                paddingRight: "4px",
                // borderRadius: "2px"
            },
            md: {
                ...Text.sharedStyles.variants.size.md,
                height: "40px",
                paddingLeft: "4px",
                paddingRight: "4px",
                // borderRadius: "4px"
            },
            lg: {
                ...Text.sharedStyles.variants.size.lg,
                height: "52px",
                paddingLeft: "4px",
                paddingRight: "4px",
                borderRadius: "4px",
                '@bp1': {
                    height: "40px",
                },
                '@bp2': {
                    height: "44px",
                    borderRadius: "6px",
                },
                '@bp3': {
                    height: "44px",
                },
            },
        },
        color: {
           slate: {
               backgroundColor: theme.colors.blue9,
               color: theme.colors.blue1,
               '@hover': {
                   '&:hover': {
                        color: theme.colors.blue3,
                        backgroundColor: theme.colors.blue10,
                    },
                    '&:active': {
                        backgroundColor: theme.colors.blue11,
                        color: theme.colors.blue7
                }
               }
           }  
        }
    },

    defaultVariants: {
        size: 'md',
        color: "slate"
    }

})