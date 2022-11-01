import { cva, type VariantProps } from "class-variance-authority";
import { z } from 'zod';

// const textStyles = cva(["text-xl, text-gray-800"], {
//     variants: {
//         color: {
//             red: "text-red-800",
//             blue: "text-blue-800",
//             green: "text-green-800",
//         }
//     }
// })

const Schema = z.object({
    
})

// interface Props extends VariantProps<typeof textStyles> {}

export default function Text(props: Props){
    return (
        <p />
    )
}