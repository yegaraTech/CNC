import React from 'react'

const datas=[
    {
        photo: "p",
        title:"Flexible MOQ",
        description:"from 1 to 10,000 as per your needs."
    },
    {
        photo: "p",
        title:"In-house Production",
        description:"capability with over 100 CNC machines including 5 axis, 3 axis and more."
    },
    {
        photo: "p",
        title:"Quick & Precision",
        description:"Turn around as fast as 1 day. Tight tolerance up to 0.01mm"
    },
    {
        photo: "0",
        title:"7*24 Service",
        description:"instant customer service. Expert quality control system.."
    }
]

function QuickServices() {
  return (
    <div className=' flex   bg-stone-50 '>
    <div className="container mx-auto  shadow-xl  bg-white m-[-45px]">
        <div className='grid grid-cols-2  md:grid-cols-4  gap-8'>
            {datas.map((data,index)=>{
                    return <div key={index} className='flex  flex-col justify-center space-y-4 flex-none hover:flex-1'>
                                <img className=" items-center self-center " src={data.photo} alt="First CNC" />
                                <h1 className=''>{data.title}</h1>
                                <p className=''>{data.description}</p>
                            </div>
                })}
             
        </div>

        </div>
    </div>
  )
}

export default QuickServices