import React from 'react'
import Image from 'next/image'

const Section2 = () => {
  return (
    <div>
     <div className='flex h-[80%]'>
       <div className='w-1/2 flex flex-col justify-center items-start m-12'>
         <h1 className='w-[500px] h-[134px] mt-[50px] pl-[40px] font-[Roboto] font-bold text-[50px] text-[#000000]'>Learn new skills online with ease</h1>

         <p className='text-[#000000] font-[Roboto] text-[18px] w-[500px] h-[54px] pl-[40px] mt-[35px]'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
          
         <div className='flex gap-[20px] mt-[30px] pl-[40px]'> 
         <button className='w-[178px] h-[48px] border-2 box-border pt-[10px] pr-[15px] pb-[12px] pl-[15px]  border-[#000000] bg-[#000000] text-white'>Start Learning Now</button>
         <button className='w-[164px] h-[48px] border-2 box-border pt-[10px] pr-[24px] pb-[12px] pl-[23px]  border-[#000000]'>Explore Courses</button>
         </div>
       </div>

      <div>
        <Image
        src='/Image.svg'
        alt='woman'
        width={640}
        height={500}
        />
      </div>
       </div>

       <div className='w-[1354px] h-[223px] flex items-center bg-[#F7F7F7]'>
        <h1 className='w-[320px] h-[60px] pl-[7px] py-[50px] font-[Roboto] text-[23px] font-bold text-[#000000]'>Trusted by 2000+ companies worldwide.</h1>
       
       <div className='ml-auto pr-[20px]' >
      <Image
      src={'/logos.svg'}
      alt='logo'
      width={500}
      height={500}
      className='w-[880px] h-[56px]'
      />

       </div>
    </div>

    
</div>
  )
}

export default Section2
