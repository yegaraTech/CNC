import React from 'react'
import date from '../assets/icon/date.png'
import home from '../assets/icon/home.png'
import phone from '../assets/icon/phone.png'
import ruler from '../assets/icon/ruler.png'

const datas=[
    {
        photo: date,
        title:"Flexible MOQ",
        description:"from 1 to 10,000 as per your needs."
    },
    {
        photo: home,
        title:"In-house Production",
        description:"capability with over 100 CNC machines including 5 axis, 3 axis and more."
    },
    {
        photo: phone,
        title:"Quick & Precision",
        description:"Turn around as fast as 1 day. Tight tolerance up to 0.01mm"
    },
    {
        photo: ruler,
        title:"7*24 Service",
        description:"instant customer service. Expert quality control system.."
    }
]

function QuickServices() {
  return (
    <div className=' flex   bg-stone-50 border-stone-900 '>
    <div className="container md:mx-auto  shadow-2xl  bg-white mt-[-50px] mx-8 rounded-md">
        <div className='grid grid-cols-2  md:grid-cols-4  gap-8 p-5'>
            {datas.map((data,index)=>{
                    return <div key={index} className='flex  flex-col justify-center space-y-4 flex-none hover:flex-1 text-center'>
                                <img className=" items-center self-center w-12 lg:w-20 fill-white" src={data.photo} alt="First CNC" />
                                <h1 className='text-black text-base font-bold font-["Roboto"]'>{data.title}</h1>
                                <p className='text-neutral-700 text-sm font-normal font-["Roboto"] '>{data.description}</p>
                            </div>
                })}
             
        </div>

        </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
    </div>
  )
}

export default QuickServices