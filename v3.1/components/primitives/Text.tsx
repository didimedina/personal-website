import { styled, theme, css } from '../../stitches.config'
import type * as Stitches from '@stitches/react';

export const sharedStyles = {
    variants: {
        font: {
            sans: {fontFamily: '$sans'},
            mono: {fontFamily: '$mono'},
        },
        color: {
            slate: {color: '$slate11'},
            green: {color: '$green11'},
            blue: {color: '$blue11'},
            red: {color: '$red11'},
        },
        size: {
            'xs': {
                fontSize: '10px',
                '@bp1': {fontSize: '10px'},
                '@bp2': {fontSize: '10px'},
                '@bp3': {fontSize: '12px'},
            },
            'sm': {
                fontSize: '12px',
                '@bp1': {fontSize: '12px'},
                '@bp2': {fontSize: '12px'},
                '@bp3': {fontSize: '14px'},
            },
            'md': {
                fontSize: '14px',
                '@bp1': {fontSize: '14px'},
                '@bp2': {fontSize: '14px'},
                '@bp3': {fontSize: '16px'},

            },
            'lg': {
                fontSize: '16px',
                '@bp1': {fontSize: '16px'},
                '@bp2': {fontSize: '16px'},
                '@bp3': {fontSize: '20px'},
            },
            'xl': {
                fontSize: '20px',
                '@bp1': {fontSize: '20px'},
                '@bp2': {fontSize: '20px'},
                '@bp3': {fontSize: '24px'},
            },
            '2xl': {
                fontSize: '24px',
                '@bp1': {fontSize: '24px'},
                '@bp2': {fontSize: '28px'},
                '@bp3': {fontSize: '32px'},
            },
            '3xl': {
                fontSize: '28px',
                '@bp1': {fontSize: '28px'},
                '@bp2': {fontSize: '40px'},
                '@bp3': {fontSize: '48px'},
            },
            '4xl': {
                fontSize: '32px',
                '@bp1': {fontSize: '32px'},
                '@bp2': {fontSize: '56px'},
                '@bp3': {fontSize: '64px'},
            },
        },
    },
}


export const Text = styled("div", {
    display: "inline-block",
    backgroundColor: "green",

    variants: {
        ...sharedStyles.variants
    },    

    defaultVariants: {
        size: 'md',
        font: 'sans',
        color: "slate",
    }
})


export type TextProps = React.ComponentProps<typeof Text>
export type TextVariantTypes = Stitches.VariantProps<typeof Text>

// type TextSizeType = React.ComponentProps<typeof Text>['size']