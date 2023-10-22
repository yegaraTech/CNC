import React from 'react'
import photo1 from '../assets/Ellipse 1435.png'

function Testimonial() {
  return (
    <div className='container mx-auto flex flex-wrap bg-white min-h-screen justify-center'>
        <div className='text-center py-10'>
            <h5 className='text-neutral-800 text-5xl'>Our happy Clients</h5>
            <div className='flex flex-wrap gap-12 justify-center'>
                <div className='flex flex-col w-96 h-56 bg-stone-50 p-5 gap-5'>
                    <p>Lorem ipsum dolor sit amet consectetur. Condimentum eget vitae ligula sed urna sit sagittis interdum a. Blandit mattis mattis lobortis orci. Facilisis dui sagittis tempor egestas pellentesque eu maecenas. Risus lectus nisl.</p>
                    <div className='flex gap-5'>
                        <img src={photo1} className="w-12 h-12" alt="" />
                        <div>
                            <h3>Jacqueline Wrigh</h3>
                            <p>Customer</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-96 h-56 bg-stone-50 p-5 gap-5'>
                    <p>Lorem ipsum dolor sit amet consectetur. Condimentum eget vitae ligula sed urna sit sagittis interdum a. Blandit mattis mattis lobortis orci. Facilisis dui sagittis tempor egestas pellentesque eu maecenas. Risus lectus nisl.</p>
                    <div className='flex gap-5'>
                        <img src={photo1} className="w-12 h-12" alt="" />
                        <div>
                            <h3>Jacqueline Wrigh</h3>
                            <p>Customer</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-96 h-56 bg-stone-50 p-5 gap-5'>
                    <p>Lorem ipsum dolor sit amet consectetur. Condimentum eget vitae ligula sed urna sit sagittis interdum a. Blandit mattis mattis lobortis orci. Facilisis dui sagittis tempor egestas pellentesque eu maecenas. Risus lectus nisl.</p>
                    <div className='flex gap-5'>
                        <img src={photo1} className="w-12 h-12" alt="" />
                        <div>
                            <h3>Jacqueline Wrigh</h3>
                            <p>Customer</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-96 h-56 bg-stone-50 p-5 gap-5'>
                    <p>Lorem ipsum dolor sit amet consectetur. Condimentum eget vitae ligula sed urna sit sagittis interdum a. Blandit mattis mattis lobortis orci. Facilisis dui sagittis tempor egestas pellentesque eu maecenas. Risus lectus nisl.</p>
                    <div className='flex gap-5'>
                        <img src={photo1} className="w-12 h-12" alt="" />
                        <div>
                            <h3>Jacqueline Wrigh</h3>
                            <p>Customer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial