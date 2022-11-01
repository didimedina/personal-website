import { styled } from '@stitches/react'
import { motion } from 'framer-motion'


// Wrapper has the final hieght 
// Root is set to auto and has columns
// Grid has the row count and is also set to 100% on height
// Pass down the root css to grid and deprecate the wrapper. Leave scroll on the root
// 


export const Root = styled('div' ,{
    width: '100%',
    height: '100%',
    columns: 7,
    columnGap: '16px',
    columnFill: 'auto',
    
})

export const Grid = styled('div' ,{
    width: '100%',
    height: '700%',
    display: 'grid',
    backgroundColor: 'LightGray',
    gridTemplateRows: 'repeat(168, 1fr)', 

    variants: {
        scroll: {
            true: {
                height: '200%',
            }
        }
    }   
})


export const Event = styled(motion.div, {
    width: 'auto',
    // marginBottom: '5px',
    boxShadow: '0px 0px 0px 2px white',

    '&:active': {
        outline: 'black solid 2px',
    },

    variants: {
        color: {
            grey: {
                backgroundColor: 'LightGray',
            },
            green: {
                backgroundColor: 'LightGreen'
            },
            blue: {
                backgroundColor: 'LightBlue'
            },
            pink: {
                backgroundColor: 'LightPink'
            }
        },
        size: {
            sm: {
                // height: '200px',
                gridRowStart: 'span 2'
            },
        }
    },
    defaultVariants: {
        color: 'grey',
        size: 'sm'
    }
})