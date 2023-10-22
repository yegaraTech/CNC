import React from 'react'
// import featuresDatas from '../data/featuresData'
import photo1 from '../assets/Firstcnc.png'

const datas=[
    {
        photo: photo1,
        title:"Built-in dust collection",
        description:"Normally, desktop CNC machines are not equipped with dust collection functions because of the size and limited space.Through a very innovative way, we completely built the dust collection system inside the machine, let your projects start cleanand finish clean."
    },{
        photo:photo1,
        title:"Auto Tool Changing and Auto Probin",
        description:"Without the automatic functions, you need to manually change every tool during every job and manually do the probing work, which is very tedious and time-consuming when milling PCB or other complex objects. Whether you are doing auto-leveling, cutting, cleaning, drilling, or carving, Cavera can automatically change the right tool for the right job seamlessly,making sure you get the best result. Just focus on your design, let Carvera do the rest."

    },
    {
        photo:photo1,
        title:"Optional 4th axis module",
        description:"One more axis, much more possibilities, with the 4th axis module, you can machine cylindrical items, double sided objects, and 3D shapes. Carvera provides you with truly 4th axis simultaneous machining, you can make real 3D stereo models which can only be made by 3D printers. Here, you are not limited by materials, plastic, wood, even metal, you can make beautiful yet realistic crafts."

    },
    {
        photo:photo1,
        title:"Integrated laser module",
        description:"Laser engraving is a unique and amazing technology that lets you leave your mark and draw beautiful patterns on your product. With the integrated 2.5W diode laser module, you can seamlessly switch between CNC and Laser functions and engrave a wide variety of materials including paper, wood, plastic, leather, fabric, etc."
    }
]



function Features() {
    // const datas=featuresDatas.data
  return (
    <div className='container mx-auto text-center bg-black text-white'>
        <h1 className=''>Pack of Smart Features</h1> 
        <div className='grid grid-cols-2 grid-rows-2 gap-4'>
            {datas.map((data,index)=>{
                return <div key={index}>
                    <img className="" src={data.photo} alt="First CNC" />
                    <h1>{data.title}</h1>
                    <p>{data.description}</p>
                </div>
            })}
        </div>
    </div>
  )
}

export default Features

