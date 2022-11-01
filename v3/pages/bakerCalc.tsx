import React, { useState } from 'react'
import { Button } from '../components/primitives/Button'
import { Text } from '../components/primitives/Text'
import { TextField } from '../components/primitives/TextField'
import { TestComponent } from '../components/_playground/SharedStylesUtil'



export default function bakerCalc() {
  
    // const [size, setSize] = useState<TextVariants['size']>('md')

    return (
        <div>
            <Button color={"slate"} size={'lg'}></Button>
            <TestComponent/>
        </div>
    )
}