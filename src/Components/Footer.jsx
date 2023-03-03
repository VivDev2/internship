import React from 'react'
import{FaFacebookSquare} from  'react-icons/fa';
import{FaDribbbleSquare} from  'react-icons/fa';
import{FaTwitterSquare}  from  'react-icons/fa';
import{FaInstagramSquare} from  'react-icons/fa';


function Footer() {
  return (
    <div className='bg grey-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20'>
      <div className='p-5'>
        <ul>
          <p className='text-grey-800 font-bold text-3xl pb-6'>
              <span className='text-white'>MHTECHIN</span>
          </p>
          <div className='flex gap-6 pb-5'>
            {/*section for icons */}
            <FaDribbbleSquare  size={30} className= "text-2xl cursor-pointer   text-pink-600" />
            <FaFacebookSquare size={30} className="text-2xl cursor-pointer  text-blue-600"/>
            <FaInstagramSquare size={30} className="text-2xl cursor-pointer text-red-500"/>
            <FaTwitterSquare size={30} className="text-2xl cursor-pointer text-blue-300"/>

          </div>
        </ul>
      </div>
      <div className='p-5'>
        <ul>
            <p className='text-white font-bold text-2xl pb-4'>Product</p>
            <li className='text-grey-500 text-md pb-2 font-semibold hover: text-blue-600 cursor-pointer'>Stcokes</li>
            <li className='text-grey-500 text-md pb-2 font-semibold hover: text-blue-600 cursor-pointer'>Career</li>
            <li className='text-grey-500 text-md pb-2 font-semibold hover: text-blue-600 cursor-pointer'>Our Vision</li>
            <li className='text-grey-500 text-md pb-2 font-semibold hover: text-blue-600 cursor-pointer'>Team</li>
        </ul>

      </div>
      <div className='p-5'>
        <ul>
          <p className='text-white   font-bold text-2xl pb-4'>Company</p>
            <li className='text-grey-500 text-md pb-2 font-semibold hover: text-blue-600 cursor-pointer'>Email</li>
            <li className='text-grey-500 text-md pb-2 font-semibold hover: text-blue-600 cursor-pointer'>Products</li>
            <li className='text-grey-500 text-md pb-2 font-semibold hover: text-blue-600 cursor-pointer'>Prising</li>
            <li className='text-grey-500 text-md pb-2 font-semibold hover: text-blue-600 cursor-pointer'>Clients</li>
          
        </ul>
      </div>
      <div className='p-5'>
        <ul>
          <p className='text-white   font-bold text-2xl pb-4'>Support</p>
            <li className='text-grey-500 text-md pb-2 font-semibold hover: text-blue-600 cursor-pointer'>About</li>
            <li className='text-grey-500 text-md pb-2 font-semibold hover: text-blue-600 cursor-pointer'>Contact Us</li>
            <li className='text-grey-500 text-md pb-2 font-semibold hover: text-blue-600 cursor-pointer'>Terms & conditions</li>
            <li className='text-grey-500 text-md pb-2 font-semibold hover: text-blue-600 cursor-pointer'>Video</li>
          
        </ul>
      </div>





    </div>
  )
}

export default Footer