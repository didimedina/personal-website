import { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger"

export default function Hero () {
  gsap.registerPlugin(ScrollTrigger)
  // https://stackoverflow.com/questions/65688826/gsap-scrolltrigger-with-next-js
    const rootRef = useRef(null)
    const el = gsap.utils.selector(rootRef);
    
    useEffect(() => {  
      console.log("running effect")

      const tl = gsap.timeline({
          scrollTrigger: {
              trigger: el(".HERO-SECTION"),
              start: "top top",
              end: "+=300%",
              scrub: 1,
              // markers: true,
              pin: true,
              snap: {
                snapTo: 1,
                duration: { min: 0.2, max: 1 },
                delay: 0.1
              },
              id: "A"
            }
      })
      .to(el(".AVATAR-WRAPPER"), { duration: 1, top: "50%" })
      .to(el(".AVATAR-ILLO"), { duration: 1, y: "120px", opacity: 0 }, "<")
      .to(el(".HEADING-WRAPPER"), { duration: 0.5, opacity: 0, scale: 0.8, y: 50 }, "<")
      .set(el(".AVATAR-ILLO"), { display: "none" })
      .to(el(".AVATAR-WRAPPER"), { duration: 1, width: "100%", height: "80%", top: "10vh"})
      .set(el(".AVATAR-IMG"), { display: "block" }, "<")
      .fromTo(el(".AVATAR-IMG"), { duration: 1, scale: 0.8, opacity: 0, y: "10vh", transformOrigin: "bottom" }, { y: 0, opacity: 1, scale: 1}, "<0.5")
      .to({}, { duration: 0.5 }, ">")



  }, [el]);

  return (
    <div ref={rootRef}>
      <div className="HERO-SECTION overflow-hidden w-screen h-screen flex justify-center items-end">
          <div className="HERO-CONTAINER relative mx-5 max-w-7xl w-full h-full flex justify-center items-end">
              <div className="AVATAR-WRAPPER overflow-hidden w-24 aspect-square absolute bottom-1/2 bg-gray-6 flex items-end justify-center">
                  <div className="AVATAR-ILLO w-2/3 h-4/5 bg-gray-8"></div>
                  <div className="AVATAR-IMG w-2/3 max-w-md h-4/5 bg-pink-8 hidden"></div>
              </div>
              <div className="HEADING-WRAPPER absolute top-1/2 w-4/5 flex mt-8 items-center justify-center gap-3 flex-col">
                  <p className="text-xl font-serif font-black">
                      Hey, Im Didi.
                  </p>
                  <div className="h-7 w-5 rounded-full stroke-black border-2"></div>
              </div>
          </div>
      </div>
    </div>
  )
}
