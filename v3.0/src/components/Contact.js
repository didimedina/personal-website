import React from 'react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';


const styles = {
  CTAContainer: `
    grid-cols-2
    grid
    grid-rows-[auto, auto]
    w-full
    max-w-screen-2xl
    gap-14
    mx-auto
    px-4 sm:px-12 md:px-20 lg:px-28
    mb-40
  `,

  fillCTA: `
  bg-white
    p-12
    col-span-2
  `,

  fillHeading: `
    text-4xl
    text-left
    flex
    font-sans
  text-black
    mb-4
    mr-auto
  `,

  fillDescription: `
  text-2xl
  text-left
  font-sans
text-black
  `,

  pillCTA: `
  bg-transparent
  p-12
  col-span-1
  border
  border-white
  `,

  pillHeading: `
  text-4xl
  text-left
  flex
  font-sans
text-white
  mb-4
  mr-auto
  `,

  pillDescription: `
    text-2xl
    font-sans
    text-left
  text-white
  `,
}


const Contact = () =>  {

  const joinAnimRef = useRef(null)
  const introAnimRef = useRef(null)
  const partyAnimRef = useRef(null)

  React.useLayoutEffect(() => {
    
    joinAnimRef.current = gsap.to("#JOIN-ARROW", {paused: true, x: 10, duration: 0.2})
    introAnimRef.current = gsap.to("#INTRO-ARROW", {paused: true, x: 10, duration: 0.2})
    partyAnimRef.current = gsap.to("#PARTY-ARROW", {paused: true, x: 10, duration: 0.2})

  }, []);

  const onMouseEnterJoinHandler = () => {
    joinAnimRef.current.play();
  };

  const onMouseLeaveJoinHandler = () => {
    joinAnimRef.current.reverse();
  };

  const onMouseEnterIntroHandler = () => {
    introAnimRef.current.play();
  };

  const onMouseLeaveIntroHandler = () => {
    introAnimRef.current.reverse();
  };

  const onMouseEnterPartyHandler = () => {
    partyAnimRef.current.play();
  };

  const onMouseLeavePartyHandler = () => {
    partyAnimRef.current.reverse();
  };


  return (
    <div id="CONTACT" className={styles.CTAContainer}>
      
      <a href="#" id="JOIN" className={styles.fillCTA} onMouseEnter={onMouseEnterJoinHandler} onMouseLeave={onMouseLeaveJoinHandler}>
        <div className={styles.fillHeading}>
          <div>Join my team</div>
          <div id="JOIN-ARROW" className={"ml-2"}>→</div>
        </div>
        <div className={styles.fillDescription}>If you’re a brilliant product person who cares deeply about helping others make time for what matters, I’d love to hear from you.</div>
      </a>
      
      <a href="#" id="INTRO" className={styles.pillCTA} onMouseEnter={onMouseEnterIntroHandler} onMouseLeave={onMouseLeaveIntroHandler}>
        <div className={styles.pillHeading}>
          <div>Get intro’d</div>
          <div id="INTRO-ARROW" className={"ml-2"}>→</div>
        </div>
        <div className={styles.pillDescription}>If you’re interested in hiring me, I’m currently unavailable. However, if you have an awesome project I’d be happy to introduce you to someone I trust.</div>
      </a>
      
      <a href="#" id="PARTY" className={styles.pillCTA} onMouseEnter={onMouseEnterPartyHandler} onMouseLeave={onMouseLeavePartyHandler}>
        <div className={styles.pillHeading}>
          <div>Throw a party</div>
          <div id="PARTY-ARROW" className={"ml-2"}>→</div>
        </div>
        <div className={styles.pillDescription}>If you’re into community building and want to collaberate on hosting a Peer to Peir dinner together, get in touch, it’ll be fun and somewhat professional.</div>
      </a>

    </div>
  )
}

export default Contact;