import React from 'react'
import laptop from '../assets/laptop.jpg'
export const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
       <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img src={laptop} alt= "/"/>
            <div className='flex flex-col justify-center '>
                <p className=' text-[#00df98] m-4'></p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 md:mx-4'>START YOU'R JOURNEY WITH US</h1>
                <p className='md:mx-5'>Be the part of our team which can shape the future with start developing skills applying and taking them to next level</p>
            
            
            
            </div>
       
       
       
       </div>
    
    
    </div>
  )
}

export default Analytics