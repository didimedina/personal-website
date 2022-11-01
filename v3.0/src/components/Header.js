import React from 'react';


const styles = {
  container: `
    w-auto
    h-full
    px-4 sm:px-12 md:px-20 lg:px-28
    flex
    justify-between
    items-center

  `,

  email: `
    text-2xl
    text-gray-500
  `,

  logo: `
    bg-wink
    bg-center
    bg-contain
    w-10
    h-10
  `
}


const Header = () =>  {
  return (
    <div id="HEADER" className={styles.container}>
      <div id="LOGO" className={styles.logo}></div>
      <a href="mailto:#" id="EMAIL" className={styles.email}>hi@didimedina.com</a>
    </div>
  )
}

export default Header;