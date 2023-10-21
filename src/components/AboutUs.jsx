import React from 'react'
import Image3 from '../assets/image3.png'


function AboutUs() {
  return (
    <div>
    <div className='grid bg-stone-50 '>
        <div className="w-96 h-screen mx-[-220px]  rotate-[20.57deg] bg-black bg-opacity-20" />
        <div className="h-screen  flex  justify-center items-center col-start-2 col-span-4 ">
            <div className=' max-w-screen-xl justify-self-center'>
                <div className="h-20 text-center text-neutral-800 text-6xl font-normal font-['Quando'] ">Who We Are</div>
                <div className="h-72 text-justify text-zinc-600 text-3xl font-light font-['Open Sans'] leading-10">At Markon-Tech, we specialize in the production of cutting-edge laser and router CNC machines. Our passion for precision engineering drives us to deliver top-tier solutions for your manufacturing needs. With a commitment to innovation and excellence, we're dedicated to providing you with the tools that empower your creativity and elevate your craftsmanship.
                
            </div>
        </div>  
        
        </div>
    </div>
    <div className='flex justify-end mt-[-300px] mb-10'>
     <img className="" src={Image3} alt="CNC" />
    </div>
   

    </div>
  )
}

export default AboutUs