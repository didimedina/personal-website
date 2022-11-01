import * as Cal from '../components/derivative/Cal'
import { css, styled } from '@stitches/react'

// function onPan(event, info: any) {
//   console.log(info.point.x, info.point.y)
//   // if panned x 1/24th of the page update grid position
// }

export default function Calendar() {
    return (
        <Cal.Root css={{ width: '500px', height: '700px' }}>
          <Cal.Grid>
            {/* <Cal.Event color={'blue'}/> */}
          </Cal.Grid>
        </Cal.Root>
    )
  }

