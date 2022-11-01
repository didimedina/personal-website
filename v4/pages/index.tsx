import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

const ClientLP = dynamic(() => import('../components/lp/lp'), {
  ssr: false,
})


const Home: NextPage = () => {
  return (
    <>
      <ClientLP/>
    </>
  )
}

export default Home
