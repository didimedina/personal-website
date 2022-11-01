import * as Stitches from '@stitches/react';

import { styled } from '../../stitches.config';

// type CSS = Stitches.CSS<typeof config>
// type CSS = Stitches.CSSProperties

// export interface SharedStyles {
//     variants?: {
//         [Name in string]: {
//             [Pair in number | string]: CSS
//         }
//     }     
// }

// type CSSVariants = Record<string, Record<number | string, CSS>>
// type SharedCSS = CSS | Record<string, CSSVariants>
// type SharedCSS = CSS | Record<number | string, CSS>

type SharedCSS = Stitches.CSSProperties

const testStyles: SharedCSS = {
    backgroundColor: "Aqua",
    color: "AliceBlue",

}

export const TestComponent = styled("div", {
    backgroundColor: "$blue10",
    height:"40px",
    width: "200px",
    ...testStyles,
    variants: {
        size: {
            sm: {...testStyles}
        }
    }
})
