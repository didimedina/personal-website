import type { NextPage } from 'next'
import { styled, theme } from '../stitches.config';
import { gsap } from "gsap";
import { useEffect, useRef } from 'react';
// import { createMemo } from '@stitches/core/'

const createCssFunctionMap = createMemo()
export const createCssFunction = ( config, sheet ) => createCssFunctionMap(config, () => (...args) => {


const Text = styled("p", {
    fontWeight: 900,
    fontSize: 48,
    $$localTextColor: theme.colors.slate12,
    color: "$$localTextColor",

    variants: {
        size: {
            full: { width: "100%" },
            hug: { width: "fit-content" },
            // @ts-ignore 
            custom: (value: Stitches.PropertyValue<"width">) => ({ 
                width: value,
            }),
        },
    }
})

// Example 1:  <Grid size={custom("vlaue")}/>


const Text = styled("p", {
    fontWeight: 900,
    fontSize: 48,
    $$localTextColor: theme.colors.slate12,
    color: "$$localTextColor",

    variants: {
        spanX: {
            1: { gridColumnStart: "span 1" },
            2: { gridColumnStart: "span 2" },
            3: { gridColumnStart: "span 3" },
            4: { gridColumnStart: "span 4" },
            // @ts-ignore
            position: (start, end) => ({
                gridColumnStart: `${start}`,
                gridColumnEnd: `${end}`,
            })
        },
    }
})

// Example 2:  <GridChild span={position(1, 4)}/>





const Page: NextPage = () => {

    const textRef = useRef(null)

    useEffect(() => { 
        gsap.to(textRef.current, { duration: 1, rotation: "+=360"})
     })


    return (
      <>
        <Text ref={textRef}>Hey Im Didi!</Text>
      </>
    )
  }
  
export default Page