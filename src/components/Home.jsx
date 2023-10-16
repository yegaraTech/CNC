import React from 'react'
import NavBar from './NavBar'

import Firstcnc from '../assets/Firstcnc.png'


function Home() {
  return (
    <>
    <NavBar/>
   <div className="container mx-auto flex flex-wrap justify-around bg-white h-screen">
    <div className="flex flex-col justify-center items-start gap-6">
        <h1 className="font-bold text-7xl text-center">Welcome to </h1>
        <h1 className="font-bold text-7xl  text-center">Markon Tech!</h1>
        <p className="text-xl text-center">Cut-N-Create</p>
        <button className="px-4 py-2 mt-4 bg-black text-white font-semibold">BUY</button>
    </div>
    <img className="h-96 justify-center items-center self-center" src={Firstcnc} alt="First CNC" />
</div>

    
    </>
  )
}

export default Home