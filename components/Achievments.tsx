import React from 'react'

const Achievments = () => {
  return (
    <div className='w-[1345px] h-[488px] py-[112px] px-[64px] gap-[80px] bg-[#FFFFFF]'>
      <div className='w-[1170px] h-[256px] gap-[30px]'>

       <div className='w-[1170px] h-[136px] gap-[200px]'>

         <h1 className='w-[1170px] h-[58px] font-bold text-[48px] text-center font-[Roboto] text-[#000000]'>Our Achivements</h1>
         <p className='w-[1170px] h-[54px] mt-[20px] font-[Roboto] text-[18px] text-center text-[#000000]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
         Suspendisse varius enim in eros elementum tristique. Duis cursus, 
         mi quis viverra ornareeros dolor interdum nulla, ut commodo diam libero vitae erat.</p>

       </div>

       <div className='flex justify-between w-[1170] h-[80px] gap-[16px] mt-[40px]'>
         <div className='w-[616px] h-[80px] flex py-[8px] gap-[20px] '>

         <div className='w-[296px] h-[71px] bg-white flex flex-col items-center justify-center'>
           <h1 className='font-[Roboto] text-[40px] font-bold text-[#000000]'>+200</h1>
           <p className='font-[Roboto] text-[16px] pb-[10px] text-[#000000]'>Courses</p>
        </div>

        <div className='w-[296px] h-[71px] bg-white flex flex-col items-center justify-center'>
           <h1 className='font-[Roboto] text-[40px] font-bold text-[#000000]'>+50k</h1>
           <p className='font-[Roboto] text-[16px] pb-[10px] text-[#000000]'>Mentors</p>
        </div>

         </div>

           
         <div className='w-[616px] h-[80px] flex py-[8px] gap-[20px]'>

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
