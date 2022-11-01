import { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger"
import { useElementSize, useWindowSize } from 'usehooks-ts';


export default function Community () {
  gsap.registerPlugin(ScrollTrigger)
  // https://stackoverflow.com/questions/65688826/gsap-scrolltrigger-with-next-js
    const rootRef = useRef(null)
    const el = gsap.utils.selector(rootRef);

    const [ galleryRef, { width: elW, height: elH }] = useElementSize()
    const { width: winW, height: winH } = useWindowSize()
    console.log(winH - elH)

    // 100vh - height = offset
    
    useEffect(() => {  

      const tl = gsap.timeline({
          scrollTrigger: {
              trigger: el(".COMMUNITY-SECTION"),
              start: "top top",
              end: `+=400% bottom`,
              scrub: 1,
              markers: true,
              pin: true,
              pinSpacing: true,
              id: "gallery"
            }
      })
      .fromTo(el(".GALLERY-WRAPPER"), { duration: 1, y: "400", opacity: 0}, {y: "0", opacity: 1})
      .to(el(".GALLERY"), { duration: 3, y: winH - elH })
  
  }, [el, elH, winH]);

  return (
    <div ref={rootRef}>
        <div className="COMMUNITY-SECTION overflow-hidden w-screen h-screen flex justify-center items-end">
            <div className="COMMUNITY-CONTAINER relative mx-5 max-w-7xl w-full h-full grid grid-cols-2 grid-rows-1 gap-32">
                <div className="w-full h-full flex justify-center flex-col gap-6">
                    <p className="text-lg font-serif leading-tight font-black">I take the <span className="line-through">work</span> relationships home with me…</p>
                    <p className="text-md font-sans text-gray-10 antialiased font-normal">Because hosting inspiring people for dinner is way more delicious than hosting a podcast.</p>
                </div>
                <div className="GALLERY-WRAPPER h-full w-full ">
                    <div ref={galleryRef} className="GALLERY w-full h-auto grid grid-flow-row gap-6">
                        <div className="w-full aspect-[4/3] bg-gray-3"/>
                        <div className="w-full aspect-[4/3] bg-gray-3"/>
                        <div className="w-full aspect-[4/3] bg-gray-3"/>
                        <div className="w-full aspect-[4/3] bg-gray-3"/>
                        <div className="w-full aspect-[4/3] bg-gray-3"/>
                        <div className="w-full aspect-[4/3] bg-gray-3"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
