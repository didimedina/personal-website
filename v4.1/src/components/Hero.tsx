import heroImage from '../assets/hero2.jpg';
import Section from "./_primitives/Section";

// console.log(heroImage.src)

export default function Hero(){
    return (
        <>
            <Section overflow>
                <div class="h-[70vh] bg-gray-100 mt-4 sm:mt-6 lg:mt-8 xl:mt-12 pl-[20%]">
                    <img src={heroImage.src} class="mx-auto h-full"/>
                </div>
            </Section>
            <Section>
                <p class="text-6xl font-medium sm:mt-6 lg:mt-8 xl:mt-12">{"Hey I'm Didi, I build crafted software."}</p>
            </Section>
        </>

    )
}