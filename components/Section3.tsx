import React from 'react'
import Image from 'next/image'

const Section3 = () => {
  return (
    <div className='w-[1369px] h-[900px] py-[112px]  bg-[#FFFFFF]'>
      <div className='md:w-[768px] md:h-[80px] w-[385px] h-[162px] md:px-[200px] px-[20px] gap-[300px]'>
      
      <h1 className='md:w-[768px] md:h-[58px] w-[385px] h-[84px] text-[#000000] md:pl-[140px] flex justify-center font-[Roboto] md:text-[40px] text-[32px] text-center font-bold'>Explore Courses By Category</h1>
      <p className='md:w-[760px] md:h-[27px] w-[385px] h-[54px] font-[Roboto] md:mt-[20px] mt-[30px] md:pl-[144px] md:text-[15px] text-[18px] text-[#000000]'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
  </div>

      <div className='w-[1369px] h-[637px] py-[112px] md:px-[30px] px-[20px] gap-[96px] bg-[#FFFFFF]'>

  <div className='md:grid md:grid-cols-3 grid-col-1 md:gap-[20px] '>
  {/* Card 1 */}
  <div className='md:w-[410.67px] md:h-auto w-[380px] h-[132px] border rounded p-[16px] flex items-center gap-[20px] bg-[#F7F7F7]'>
    <div className='w-[100px] h-[100px] flex items-center justify-center bg-[#FFFFFF] rounded'>
      <Image
        src='/pen-tool-2.svg'
        alt='pen-tool'
        width={32}
        height={32}
      />
    </div>
    <div>
      <h1 className='font-[Roboto] text-[20px] font-semibold text-[#000000]'>Design & Development</h1>
      <p className='text-[#000000] font-[Roboto] text-[18px]'>50+ Courses Available</p>
    </div>
  </div>

  {/* Card 2 */}
  <div className='md:w-[410.67px] md:h-auto w-[380px] h-[132px] border rounded p-[16px] flex items-center gap-[20px] mt-[20px] bg-[#F7F7F7]'>
    <div className='w-[100px] h-[100px] flex items-center justify-center bg-[#FFFFFF] rounded'>
      <Image
        src='/volume-high.svg'
        alt='volume'
        width={32}
        height={32}
      />
    </div>
    <div>
      <h1 className='font-[Roboto] text-[20px] font-semibold text-[#000000]'>Marketing</h1>
      <p className='text-[#000000] font-[Roboto] text-[18px]'>50+ Courses</p>
       </div>
     </div>


     {/*card 3*/}
     <div className='md:w-[410.67px] md:h-auto w-[380px] h-[132px] border rounded p-[16px] flex items-center gap-[20px] mt-[20px] bg-[#F7F7F7]'>
    <div className='w-[100px] h-[100px] flex items-center justify-center bg-[#FFFFFF] rounded'>
      <Image
        src='/group.svg'
        alt='group'
        width={32}
        height={32}
      />
    </div>
    <div>
      <h1 className='font-[Roboto] text-[20px] font-semibold text-[#000000]'>Development</h1>
      <p className='text-[#000000] font-[Roboto] text-[18px]'>50+ Courses</p>
       </div>
     </div>

     {/*card 4*/}
     <div className='w-[410.67px] h-auto border rounded p-[16px] items-center gap-[16px] bg-[#F7F7F7] hidden md:flex'>
    <div className='w-[100px] h-[100px] flex items-center justify-center bg-[#FFFFFF] rounded'>
      <Image
        src='/microphone.svg'
        alt='microphonr'
        width={32}
        height={32}
      />
    </div>
    <div>
      <h1 className='font-[Roboto] text-[20px] font-semibold text-[#000000]'>Communication</h1>
      <p className='text-[#000000] font-[Roboto] text-[18px]'>50+ Courses</p>
       </div>
     </div>



     {/*card 5*/}
     <div className='w-[410.67px] h-auto border rounded p-[16px] items-center gap-[16px] bg-[#F7F7F7] hidden md:flex'>
    <div className='w-[100px] h-[100px] flex items-center justify-center bg-[#FFFFFF] rounded'>
      <Image
        src='/link.svg'
        alt='link'
        width={32}
        height={32}
      />
    </div>
    <div>
      <h1 className='font-[Roboto] text-[20px] font-semibold text-[#000000]'>Digital Marketing</h1>
      <p className='text-[#000000] font-[Roboto] text-[18px]'>50+ Courses</p>
       </div>
     </div>

       
       {/*card 6*/}
     <div className='w-[410.67px] h-auto border rounded p-[16px] items-center gap-[16px] bg-[#F7F7F7] hidden md:flex'>
    <div className='w-[100px] h-[100px] flex items-center justify-center bg-[#FFFFFF] rounded'>
      <Image
        src='/arrow-2.svg'
        alt='arrow'
        width={32}
        height={32}
      />
    </div>
    <div>
      <h1 className='font-[Roboto] text-[20px] font-semibold text-[#000000]'>Self Developnment</h1>
      <p className='text-[#000000] font-[Roboto] text-[18px]'>50+ Courses</p>
       </div>
     </div>


     {/*card 7*/}
     <div className='w-[410.67px] h-auto border rounded p-[16px] items-center gap-[16px] bg-[#F7F7F7] hidden md:flex'>
    <div className='w-[100px] h-[100px] flex items-center justify-center bg-[#FFFFFF] rounded'>
      <Image
        src='/briefcase.svg'
        alt='briefcase'
        width={32}
        height={32}
      />
    </div>
    <div>
      <h1 className='font-[Roboto] text-[20px] font-semibold text-[#000000]'>Business</h1>
      <p className='text-[#000000] font-[Roboto] text-[18px]'>50+ Courses</p>
       </div>
     </div>


     {/*card 8*/}
     <div className='w-[410.67px] h-auto border rounded p-[16px] items-center gap-[16px] bg-[#F7F7F7] hidden md:flex'>
    <div className='w-[100px] h-[100px] flex items-center justify-center bg-[#FFFFFF] rounded'>
      <Image
        src='/book.svg'
        alt='book'
        width={32}
        height={32}
      />
    </div>
    <div>
      <h1 className='font-[Roboto] text-[20px] font-semibold text-[#000000]'>Finance</h1>
      <p className='text-[#000000] font-[Roboto] text-[18px]'>50+ Courses</p>
       </div>
     </div>
     

     {/*card 9*/}
     <div className='w-[410.67px] h-auto border rounded p-[16px] items-center gap-[16px] bg-[#F7F7F7] hidden md:flex'>
    <div className='w-[100px] h-[100px] flex items-center justify-center bg-[#FFFFFF] rounded'>
      <Image
        src='/file.svg'
        alt='book-2'
        width={32}
        height={32}
      />
    </div>
    <div>
      <h1 className='font-[Roboto] text-[20px] font-semibold text-[#000000]'>Consulting</h1>
      <p className='text-[#000000] font-[Roboto] text-[18px]'>50+ Courses</p>
       </div>
     </div>

      <div className='flex md:justify-center items-center mt-[30px]'>
        <div className='md:pl-[900px] px-[120px]'>
        <button className='w-[158px] h-[48px] rounded border py-[12px] px-[17px] gap-[8px] border-[#000000] text-[#000000]'>
        View All Courses
        </button>
        </div>
      </div>

      </div>
    </div> 
    </div> 
  )
}

export default Section3