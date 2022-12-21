export default function Section(props) {
    return (
        <div id="section" class="w-full h-fit">
            <div id="content" class={`mx-auto ${props.overflow ? "max-w-7xl" : "max-w-4xl"} px-4 sm:px-6 lg:px-8`}>
                {props.children}
            </div>
        </div>
    )
}