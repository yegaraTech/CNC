import React from 'react'
import photo1 from '../assets/Ellipse 1435.png'
import NeedInformation from './NeedInformation'

function Testimonial() {
  return (
  <div className='container mx-auto ' id='testimoni'>
    <div className='space-y-'>
        <h5 className='text-center text-neutral-800 text-4xl md:text-5xl font-["Preahvihear"] m-10'>Our happy Clients</h5>
            <div className='md:flex md:justify-center space-y-4'>
            <div className='flex flex-wrap gap-20 mx-4  justify-center max-w-5xl group '>
                <div className='flex flex-col w-96 h-56 bg-stone-50 p-5 md:gap-5 gap-2 rounded-2xl shadow-lg group-hover:blur-sm cursor-pointer hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500'>
                    <p className='text-zinc-600 text-left'>Lorem ipsum dolor sit amet consectetur. Condimentum eget vitae ligula sed urna sit sagittis interdum a. Blandit mattis mattis lobortis orci. Facilisis dui sagittis tempor egestas pellentesque eu maecenas. Risus lectus nisl.</p>
                    <div className='flex gap-5 '>
                        <img src={photo1} className="w-12 h-12" alt="" />
                        <div className='text-left'> 
                            <h3>Jacqueline Wrigh</h3>
                            <p className='text-neutral-400 text-sm '>Customer</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-96 h-56 bg-stone-50 p-5 md:gap-5 gap-2 rounded-2xl shadow-lg group-hover:blur-sm cursor-pointer hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500'>
                    <p className='text-zinc-600 text-left'>Lorem ipsum dolor sit amet consectetur. Condimentum eget vitae ligula sed urna sit sagittis interdum a. Blandit mattis mattis lobortis orci. Facilisis dui sagittis tempor egestas pellentesque eu maecenas. Risus lectus nisl.</p>
                    <div className='flex gap-5 '>
                        <img src={photo1} className="w-12 h-12" alt="" />
                        <div className='text-left'> 
                            <h3>Jacqueline Wrigh</h3>
                            <p className='text-neutral-400 text-sm '>Customer</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-96 h-56 bg-stone-50 p-5 md:gap-5 gap-2 rounded-2xl shadow-lg group-hover:blur-sm cursor-pointer hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500'>
                    <p className='text-zinc-600 text-left'>Lorem ipsum dolor sit amet consectetur. Condimentum eget vitae ligula sed urna sit sagittis interdum a. Blandit mattis mattis lobortis orci. Facilisis dui sagittis tempor egestas pellentesque eu maecenas. Risus lectus nisl.</p>
                    <div className='flex gap-5 '>
                        <img src={photo1} className="w-12 h-12" alt="" />
                        <div className='text-left'> 
                            <h3>Jacqueline Wrigh</h3>
                            <p className='text-neutral-400 text-sm '>Customer</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-96 h-56 bg-stone-50 p-5 md:gap-5 gap-2 rounded-2xl shadow-lg group-hover:blur-sm cursor-pointer hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500'>
                    <p className='text-zinc-600 text-left'>Lorem ipsum dolor sit amet consectetur. Condimentum eget vitae ligula sed urna sit sagittis interdum a. Blandit mattis mattis lobortis orci. Facilisis dui sagittis tempor egestas pellentesque eu maecenas. Risus lectus nisl.</p>
                    <div className='flex gap-5 '>
                        <img src={photo1} className="w-12 h-12" alt="" />
                        <div className='text-left'> 
                            <h3>Jacqueline Wrigh</h3>
                            <p className='text-neutral-400 text-sm '>Customer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    <NeedInformation/>
    </div>
  )
}

export default Testimonial