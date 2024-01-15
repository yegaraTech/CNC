import React,{useEffect} from 'react'
import Image3 from '../assets/image3.png'

import AOS from 'aos';
import 'aos/dist/aos.css';


function AboutUs() {
  useEffect(() => {
    AOS.init();
}, [])
  return (
    <div>
    <div className='grid bg-stone-50 ' id='aboutUs'>
        {/* <div className="w-96 h-screen mx-[-220px]  rotate-[20.57deg] bg-black bg-opacity-20" /> */}
        <div className="h-screen  flex  justify-center items-center ">
            <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" className='flex flex-col gap-8 md:max-w-screen-xl mx-12 justify-self-center'>
                <div  className="text-center text-neutral-800 text-6xl font-normal font-['Quando'] ">Who We Are</div>
                <div className="text-justify text-zinc-600 text-3xl font-light font-['Open Sans'] ">At Markon-Tech, we specialize in the production of cutting-edge laser and router CNC machines. Our passion for precision engineering drives us to deliver top-tier solutions for your manufacturing needs. With a commitment to innovation and excellence, we're dedicated to providing you with the tools that empower your creativity and elevate your craftsmanship.
                
            </div>
        </div>  
        
        </div>
    </div>
    {/* <div className='flex justify-end  md:mt-[-350px] '>
     <img data-aos="fade-up-left"data-aos-duration="2000" src={Image3} alt="CNC" />
    </div> */}
   

    </div>
  )
}

export default AboutUs