import React from 'react'

const Achievments = () => {
  return (
    <div className='md:w-[1345px] md:h-[488px] w-[428px] h-[451px] py-[112px] md:px-[64px] px-[20px] gap-[80px] bg-[#FFFFFF]'>
      <div className='md:w-[1170px] md:h-[256px] w-[380px] h-[355px] gap-[30px]'>

       <div className='md:w-[1170px] md:h-[136px] w-[380px] h-[147px] gap-[200px]'>

         <h1 className='md:w-[1170px] md:h-[58px] w-[390px] h-[42px] px-[20px] font-bold md:text-[48px] text-[32px] text-center font-[Roboto] text-[#000000]'>Our Achivements</h1>
         <p className='md:w-[1170px] md:h-[54px] w-[362px] h-[81px] md:mt-[20px] mt-[40px] font-[Roboto] text-[18px] text-center text-[#000000]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
         Suspendisse varius enim in eros elementum tristique.</p>

       </div>

       <div className='md:flex md:justify-between md:w-[1170] md:h-[80px] w-[380px] h-[176px] md:gap-[16px] gap-[24px] mt-[40px]'>
         <div className='md:w-[616px] md:h-[80px] w-[380px] h-[76px] mt-[50px] flex py-[8px] gap-[20px] '>

         <div className='w-[296px] h-[71px] bg-white flex flex-col items-center justify-center'>
           <h1 className='font-[Roboto] text-[40px] font-bold text-[#000000]'>+200</h1>
           <p className='font-[Roboto] text-[16px] pb-[10px] text-[#000000]'>Courses</p>
        </div>

        <div className='w-[296px] h-[71px] bg-white flex flex-col items-center justify-center'>
           <h1 className='font-[Roboto] text-[40px] font-bold text-[#000000]'>+50k</h1>
           <p className='font-[Roboto] text-[16px] pb-[10px] text-[#000000]'>Mentors</p>
        </div>

         </div>

           
         <div className='md:w-[616px] md:h-[80px] w-[380px] h-[76px] mt-[60px] flex py-[8px] gap-[20px]'>

         <div className='w-[296px] h-[71px] bg-white flex flex-col items-center justify-center'>
           <h1 className='font-[Roboto] text-[40px] font-bold text-[#000000]'>+370k</h1>
           <p className='font-[Roboto] text-[16px] pb-[10px] text-[#000000]'>Students</p>
        </div>

        <div className='w-[290px] h-[71px] bg-white flex flex-col items-center justify-center'>
           <h1 className='font-[Roboto] text-[40px] font-bold text-[#000000]'>100+</h1>
           <p className='font-[Roboto] text-[16px] pb-[10px] text-[#000000]'>Recognition</p>
        </div>

         </div>

       </div>

      </div>
    </div>

  )
}

export default Achievments
