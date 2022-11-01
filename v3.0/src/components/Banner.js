import React from 'react';


const styles = {
  container: `
    w-auto
    h-full
    row-span-5
    grid
    grid-cols-6
    grid-rows-6
    bg-gray-100
    overflow-hidden
  `,

  img: `
    col-start-1
    col-end-7
    row-start-3 xl:row-start-1
    row-end-7
    z-0
    bg-hero-banner
    bg-cover xl:bg-contain
    bg-no-repeat
    bg-top xl:bg-right-bottom

  `,

  text: `
    xl:pl-28
    text-6xl
    leading-snug
    text-center xl:text-left
    col-start-1
    col-end-7 xl:col-end-4
    row-start-1 xl:row-start-4
    row-end-3 xl:row-end-6
    place-self-center justify-self-center xl:place-self-start
    z-10
  `
}


const Banner = () =>  {
  return (
    <div id="BANNER" className={styles.container}>
      <div id="HEY" className={styles.text}>Hey, I'm Didi, <br/> CPO at Magical</div>
      <div id="IMG" className={styles.img}></div>
    </div>
  )
}

export default Banner;