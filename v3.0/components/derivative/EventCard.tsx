import { styled } from '@stitches/react'

export const StyledEventCard = styled('div' ,{
    width: '120px',
    height: '52px',
    backgroundColor: "IndianRed",

    variants: {
        color: {
            grey:{
                backgroundColor: 'DarkGrey'
            }
        }
    }
    
})

export default function EventCard() {
    return (
        <StyledEventCard></StyledEventCard>
    )
}




























