import React from 'react'
import Image from 'next/image'

const Section2 = () => {
  return (
    <div>

      <div className="md:flex items-center justify-between flex-col-1">
        <div className="lg:pr-[60px] lg:pl-[80px] flex flex-col gap-6 lg:w-1/2 lg:py-[141px] py-[64px] px-6 w-[428px] h-[390px]">
          <h1 className="text-[40px] sm:text-[56px] font-bold">
            Learn new skills online with ease
          </h1>
          <p className="text-[18px]">
            Discover a wide range of courses covering a variety of
            subjects, taught by expert instructors.
          </p>
          <div className="flex gap-[16px] pt-4">
            <button className="md:py-2 py-3 md:px-5 px-6 bg-black text-white rounded-[5px]">
              Start learning now
            </button>
            <button className="py-2 px-5 border-solid border-[1px] border-black rounded-[5px]">
              Explore Courses
            </button>
          </div>
        </div>

        <div className="lg:w-1/2 w-full">
          <Image
            src="/Image.svg"
            alt="Tablet image"
            width={640}
            height={900}
          />
        </div>
      </div>

      <div className='md:w-[1354px] md:h-[223px] flex items-center w-[428px] h-[239.34px] px-[24px] py-[40px] bg-[#F7F7F7]'>
        <h1 className='md:w-[320px] md:h-[60px] flex pl-[7px] md:py-[50px] font-[Roboto] md:text-[23px] w-[327px] h-[54px] text-[18px] font-bold text-[#000000]'>Trusted by 2000+ companies worldwide.</h1>
       
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
