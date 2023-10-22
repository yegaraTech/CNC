import React from 'react'

function NeedInformation() {
  return (
    <div className='flex  px-12 py-7 my-12 bg-neutral-800 rounded-lg md:justify-between justify-center items-center  gap-5 flex-wrap'>
         <div className="flex flex-col justify-center md:items-start items-center gap-2.5 ">
            <div className="text-center text-white text-3xl font-medium font-['Poppins']">Need more information?</div>
            <p className="text-center text-white  font-normal font-['Open Sans']">Write your concern to us and our specialist will get back to you.</p>
        </div>
        <button className="w-40 md:h-14 bg-white rounded-lg justify-center items-center ">
            <p className="text-neutral-800 text-2xl font-semibold font-['Inter']">Click Here</p>
        </button>
    </div>
  )
}

export default NeedInformation