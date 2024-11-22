import React from 'react'
import Image from 'next/image'

const Section1 = () => {
  return (
    <div className='flex'>
    <div className='mt-[10px] w-[1358px] h-[70px] bg-[#F7F7F7] pr-[640px] pl-[50px] '>
        <hr/>
        <div className='container text-sm md:text-lg lg:text-xl mt-[10px] flex justify-start h-16'>
        <Image
        src={'/Ddsgnr Library.png'}
        alt='logo'
        width={136.6}
        height={41}
        className='w-[136.6px] h-[41px]'/>


<div className="w-[901px] h-[45px] flex justify-between gap-[30px] pl-[10px] ">
        <ul className="flex justify-center items-center pl-[200px] gap-[35px] ">
    <li className="w-[64px] text-[#000000] text-[17px] font-[Roboto]">Home</li>
    <li className="w-[64px] text-[#000000] text-[17px] font-[Roboto]">Courses</li>
    <li className="w-[64px] text-[#000000] text-[17px] font-[Roboto]">Services</li>
    <li className="w-[113px] text-[#000000] text-[17px] font-[Roboto]">Achievement</li>
    <li className="w-[86px] text-[#000000] text-[17px] font-[Roboto]">About Us</li>
    <li className="w-[104px] text-[#000000] text-[17px] font-[Roboto]">Testimonial</li>
      </ul>
        
     <div className='flex justify-center items-center gap-[35px]'> 
      <button className='w-[80px] h-[40px] rounded border-2 border-[#000000] px-[14px] py-[2px]'>Login</button>
      <button className='w-[100px] h-[40px] rounded border-2 text-white bg-[#000000] border-[#000000]  px-[12px] py-[3px]'>Sign Up</button>
    </div>  
</div>
     </div>
    </div>
</div>
  )
} 

export default Section1
