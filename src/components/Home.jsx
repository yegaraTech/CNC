import React from 'react'
import Firstcnc from '../assets/Firstcnc.png'


function Home() {
  return (
    <div className='h-screen mt-14'>
   <div className="container mx-auto flex flex-wrap justify-around bg-white h-4/5 ">
    <div className="flex flex-col justify-center lg:items-start gap-6">
        <h1 className="font-bold text-5xl lg:text-7xl text-center font-['Poppins'] ">Welcome to </h1>
        <h1 className="font-bold text-5xl lg:text-7xl  text-center font-['Poppins'] ">Markon Tech!</h1>
        <p className=" text-stone-400 text-4xl font-semibold font-['Open Sans'] text-center">Cut-N-Create</p>
       <button className="w-40 h-14 px-2 py-4mt-4 bg-black self-center lg:self-start text-white font-semibold font-['Inter'] rounded-md">BUY</button>
     </div>
    <img className="lg:h-96 justify-center items-center self-center" src={Firstcnc} alt="First CNC" />
</div>

    
    </div>
  )
}

export default Home