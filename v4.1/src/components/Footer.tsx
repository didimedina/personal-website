import { DiscordIcon, EmailIcon, TwitterIcon, WinkIcon } from "./Icons";
import Section from "./Section";

type ContactCTAProps = {
    icon?: any,
    title?: string,
    description?: string,
    url?: string,
    children?: any
}

function Arrow() {
    return <span id="arrow" class="leading-none group-hover:opacity-100 opacity-0 ease-out duration-150 -translate-x-2 group-hover:translate-x-0 scale-50 group-hover:scale-100 transition-all">{"->"}</span>
}

function ContactCTA(props: ContactCTAProps) {
    return (
        <a href={props.url} target="_blank" class="group">
            <div class="grid grid-cols-[44px_auto] gap-2 h-fit items-center ">
                {props.children}
                <div id="copyWrapper" class="flex flex-col gap-2">
                    <div class="flex h-fit w-fit gap-1">
                        <div class="border-b-[1px] border-gray-900 h-fit w-fit">
                            <p class="text-md text-gray-900 leading-none">{props.title}</p>
                        </div>
                        <Arrow/>
                    </div>
                    <p class="text-xs text-gray-400 leading-none">{props.description}</p>
                </div>
            </div>
        </a>
    )
}

export default function Footer(){
    return (
        <Section>
            <div class="border-t-[1px] border-gray-200 w-full pt-8 pb-12">
                <div class="flex flex-wrap gap-8 justify-between h-fit">
                    <div class="flex flex-wrap gap-8 w-fit">
                        <ContactCTA url="mailto:hi@didimedina.com" title="Email" description="hi@didimedina.com"><EmailIcon/></ContactCTA>
                        <ContactCTA url="https://discordapp.com/users/1038072236537561139" title="Discord" description="didimedina#0384"><DiscordIcon/></ContactCTA>
                        <ContactCTA url="https://twitter.com/thatguydidi" title="Twitter" description="@thatguydidi"><TwitterIcon/></ContactCTA>
                    </div>
                    <WinkIcon/>
                </div>
            </div>
        </Section>
    )
}