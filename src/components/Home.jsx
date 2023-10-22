import React from 'react'
import Firstcnc from '../assets/Firstcnc.png'
import QuickServices from './QuickServices'


function Home() {
  return (
    <>
   <div className="container mx-auto flex flex-wrap justify-around bg-white h-screen ">
    <div className="flex flex-col justify-center items-start gap-6">
        <h1 className="font-bold text-7xl text-center font-['Poppins'] ">Welcome to </h1>
        <h1 className="font-bold text-7xl  text-center font-['Poppins'] ">Markon Tech!</h1>
        <p className=" text-stone-400 text-4xl font-semibold font-['Open Sans'] text-center">Cut-N-Create</p>
       <button className="w-40 h-14 px-2 py-4mt-4 bg-black text-white font-semibold font-['Inter'] rounded-md">BUY</button>
     </div>
    <img className="h-96 justify-center items-center self-center" src={Firstcnc} alt="First CNC" />
</div>
<QuickServices/>
    
    </>
  )
}

export default Home