import Hero from "./hero"
import Bio from './bio';
import Community from "./community";

export default function LP () {

  return (
    <>
        <Hero/>
        <Bio/>
        <Community/>
        <div className="w-screen h-screen bg-pink-6"/>
    </>
  )
}
