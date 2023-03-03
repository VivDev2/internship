import React from 'react';
import Typed from 'react-typed';
export const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[96px] w-full h-screen mx-auto text-center flex flex-col '>
            <p className='text-[#00df9a] font-bold p-2'>Grow with Expeirnce</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with Practice</h1>
            <div className='flex justify-center items-center'>
               <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Fast, Flexible</p>
               <Typed
               className=' text-[#f54b4b] md:text-5xl sm:text-4xl text-xl font-bold pl-2' 
               strings={['Accurate','youre','code']} 
               typeSpeed={120} 
               backSpeed={140} 
               loop

               />
                
            
            </div>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
        
        
        
        
        </div>
    
    
    
    </div>
  );
};

export default Hero;