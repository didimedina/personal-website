import Section from "./_primitives/Section";

export default function Hero(props){
    return (
        <>
            <Section overflow>
                <div class="h-[70vh] bg-gray-100 mt-4 sm:mt-6 lg:mt-8 pl-[20%]">
                    <img src={'/images/hero.webp'} class="mx-auto h-full"/>
                </div>
            </Section>
            <Section>
                <p class="max-w-xl font-medium text-3xl md:text-6xl leading-tight md:leading-snug mt-6 md:mt-8 lg:mt-10 xl:mt-12">Hey I'm Didi, I build crafted software.</p>
            </Section>
        </>

    )
}