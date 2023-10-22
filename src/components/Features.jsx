import React from 'react'
import featuresDatas from '../data/featuresData.json'

function Features() {
    const datas=featuresDatas.data
  return (
    <div className='container mx-auto text-center'>
        <h1>Pack of Smart Features</h1>
        <div className='grid grid-cols-2 grid-rows-2 gap-4'>
            {datas.map((data,index)=>{
                return <div>
                    <h1>{data.photo}</h1>
                    <h1>{data.title}</h1>
                    <p>{data.description}</p>
                </div>
            })}
        </div>
    </div>
  )
}

export default Features