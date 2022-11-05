import Section from "./_primitives/Section";

type CardProps = {
    title: string,
    description: string,
    ctaTitle: string,
    ctaURL: string,
    id?: string,
}

function Card(props: CardProps){
    return (
        <div id={props.id} class="flex flex-col items-start w-full h-fit gap-1">
            <p class="text-xl font-medium text-gray-900">{props.title}</p>
            <p class="text-md text-gray-500">{props.description}</p>
            <InlineLink url={props.ctaURL}>{props.ctaTitle}</InlineLink>
        </div>
    )
}

type PolaroidProps = {
    imgURL: string,
    rotation?: "left" | "right",
}

function Polaroid(props: PolaroidProps){

    let rotation = "rotate-0"
    if (props.rotation == "left") { rotation = "-rotate-3" }
    if (props.rotation == "right") { rotation = "rotate-3" }

    return (
        <div class={`bg-white w-[40%] aspect-[7/8] p-2 ring-2 ring-gray-300 ${rotation}`}>
            <img src={props.imgURL} class="w-full object-cover aspect-square"/>
        </div>
    )
}

type InlineLinkProps = {
    url: string,
    children: string,
}

function InlineLink(props: InlineLinkProps){
    return (
        <a class="font-normal inline-block text-md underline underline-offset-4" href={props.url}>{props.children}</a>
    )
}


export default function Work(){
    return (
        <>
            <Section>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-10 my-4 md:my-8 lg:my-10 xl:my-12 [&_#p2p]:self-center">
                    <Card title="Consulting" description="Helping aspiring teams operationalize craftpersonship into their product design and development practices." ctaTitle="Get in touch" ctaURL="#"/>
                    <Card title="Styled" description="Building a CSS-in-JS library designed from the ground up to empower design system maintainers." ctaTitle="Get involved" ctaURL="#"/>
                    <Card id="p2p" title="Peer to Pier" description="Hosting inspiring people for home cooked meals to avoid needing to create a podcast. (and yes, I live by the water, doink!)" ctaTitle="Get invited" ctaURL="#"/>
                    <div class="flex justify-center max-w-xs md:max-w-full [&_div:not(:first-child)]:-ml-12">
                        <Polaroid rotation="right" imgURL="/images/3.webp"/>
                        <Polaroid rotation="left" imgURL="/images/2.webp"/>
                        <Polaroid rotation="right" imgURL="/images/4.webp"/>
                    </div>
                    <div class="md:col-span-2">
                        <p class="text-gray-500">
                            <span class="font-medium text-gray-900">Previously:&nbsp;</span> 
                            <InlineLink url="#">Magical</InlineLink>,&nbsp;
                            <InlineLink url="#">Salto</InlineLink>,&nbsp; 
                            <InlineLink url="#">Salto</InlineLink>,&nbsp; 
                            <InlineLink url="#">Compass</InlineLink>,&nbsp; 
                            <InlineLink url="#">Rally</InlineLink>,&nbsp; 
                            <InlineLink url="#">WeWork</InlineLink><span>,</span>&nbsp;and&nbsp;  
                            <InlineLink url="#">eBay</InlineLink>. 
                        </p>
                    </div>
                </div>
            </Section>
        </>

    )
}