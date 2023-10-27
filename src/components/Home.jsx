import React from 'react'
import Firstcnc from '../assets/Firstcnc.png'
import QuickServices from './QuickServices'
import cncVideo from '../assets/video/cnc.gif'

function Home() {
  return (
    <div className='flex flex-col gap-28 lg:gap-52 pt-20' id='home'>
   <img src={cncVideo} className='absolute z-[-2] w-full' />

   
    <div className="container mx-auto flex flex-col p-2 md:p-12 gap-6">
        <h1 className="font-bold text-4xl lg:text-6xl  font-['Poppins'] ">Welcome to </h1>
        <h1 className="font-bold text-4xl lg:text-6xl   font-['Poppins'] ">Markon Tech!</h1>
        <p className=" text-stone-400 text-2xl font-semibold font-['Open Sans']">Cut-N-Create</p>
       <button className="w-20 h-10 px-2 py-4mt-4 bg-black  text-white font-semibold font-['Inter'] rounded-md">BUY</button>
     </div>
    {/* <img className="lg:h-96 justify-center items-center self-center" src={Firstcnc} alt="First CNC" /> */}

<QuickServices/>
    
    </div>
  )
}

export default Home