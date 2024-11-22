import React from 'react'
import Image from 'next/image'

const Courses = () => {
  return (
    <div className='w-[1350px] h-[1742px] py-[112px] px-[50px] gap-[50px] '>
      <div className='w-[790px] h-[118px] flex gap-[16px] ml-[200px] justify-center'>
        
        <div className='w-[786px] h-[118px] gap-[24px]'>
            <h1 className='w-[768px] h-[67px] font-[Roboto] text-[56px] font-bold text-center'>Courses</h1>
            <p className='w-[768px] h-[27px] mt-[25px] font-[Roboto] text-[18px] text-center text-[#000000]'>Your Ultimate Guide to learning</p>
        </div>

      </div>

      <div className='w-[1,152px] h-[1,340px] gap-[64px]'>
         <div className='flex w-[336px] h-[40px] mt-[70px] ml-[430px]'>
            <div className='w-[87px] h-[40px] border-[1px] py-[8px] px-[16px] gap-[8px] border-[#676767]'>
            <button className='font-[Roboto] text-[16px] text-[#000000]'>Popular</button>
            </div>

            <div className='w-[140px] h-[40px] border-[1px] py-[8px] px-[16px] gap-[8px] border-[#676767]'>
            <button className='font-[Roboto] text-[16px] text-[#000000]'>Recommended</button>
            </div>

            <div className='w-[109px] h-[40px] border-[1px] py-[8px] px-[16px] gap-[8px] border-[#676767]'>
            <button className='font-[Roboto] text-[16px] text-[#000000]'>Best  Price</button>
            </div>

         </div>
      </div>

      <div className='w-[1152px] h-[1132px] mt-[50px] pr-[30px] gap-[64px'>
       <div className='grid grid-cols-3 w-[1,340px] h-[530px] gap-[32px]'>
        <div className='w-[416px] h-[530px] rounded gap-[24px] bg-[#F7F7F7]'>
            <div className='w-[416px] h-[300px]'>
            <Image
            src={'/laptop.svg'}
            alt='laptop'
            width={416}
            height={300}
            />
            </div>

          <div className='w-[416px] h-[210px] px-[16px] pb-[24px] gap-[24px]'>
             <div className='w-[382px] h-[122px] gap-[8px]'>
                <div className='flex w-[382px] h-[24px] mt-[25px] gap-[8px]'>
                    <h1 className='font-[Roboto] pl-[6px] text-[14px] font-semibold text-[#000000]'>Design</h1>
                
                <div className='flex pl-[270px] gap-[4px]'>
                     <div>
                      <Image
                      src={'/star 1.svg'}
                      alt='star'
                      width={24}
                      height={24}
                      />
                     </div>

                    <div className='w-[20px] h-[24px]'>                                                                                                                                                                                                                                                                                                                                                                  
                    <p className='Font-[Roboto] font-semibold text-[15px] text-right text-[#000000]'>5.0</p>
                    </div>
                </div>
              </div>


              <div className='w-[383px] h-[34px] mt-[10px]'>
                 <p className='font-[Roboto] font-bold text-[24px] text-[#000000]'>UX/UI Design 201</p>
              </div>

              <div className='w-[383px] h-[48px] mt-[10px]'>
                <p className='font-[Roboto] text-[16px] text-[#000000]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p> 
              </div>
                
               <div className='w-[382px] h-[40px] gap-[16px] mt-[20px]'>
                 <button className='w-[117px] h-[40px] rounded border-[1px] py-[7px] px-[14px] border-[#000000] text-[#000000]'>Enroll Now</button>
                 <button className='2-[77px] h-[40px] rounded px-[14px] py-[7px] pl-[30px]'>$400</button>
               </div>

             </div>
          </div>
       </div>

        {/*card 2*/}
      <div className='w-[1,340px] h-[530px] pl-[10px] gap-[32px]'>
        <div className='w-[416px] h-[534px] ml-[30px] rounded gap-[24px] bg-[#F7F7F7]'>
            <div >
            <Image
            src={'/data.svg'}
            alt='python'
            width={416}
            height={300}
            />
            </div>

          <div className='w-[416px] h-[210px] px-[16px] pb-[24px] gap-[24px]'>
             <div className='w-[382px] h-[122px] gap-[8px]'>
                <div className='flex w-[382px] h-[24px] mt-[13px] gap-[8px]'>
                    <h1 className='font-[Roboto] pl-[6px] text-[14px] font-semibold text-[#000000]'>Programming</h1>
                
                <div className='flex pl-[270px] gap-[4px]'>
                     <div>
                      <Image
                      src={'/star 1.svg'}
                      alt='star'
                      width={24}
                      height={24}
                      />
                     </div>

                    <div className='w-[20px] h-[24px]' >                                                                                                                                                                                                                                                                                                                                                                  
                    <p className='Font-[Roboto] font-semibold text-[15px] text-right text-[#000000]'>5.0</p>
                    </div>
                </div>
              </div>


              <div className='w-[383px] h-[34px] mt-[10px] '>
                 <p className='font-[Roboto] font-bold text-[24px] text-[#000000]'>Introduction to Python</p>
              </div>

              <div className='w-[383px] h-[48px] mt-[10px]'>
                <p className='font-[Roboto] text-[16px] text-[#000000]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p> 
              </div>
                
               <div className='w-[382px] h-[40px] gap-[16px] mt-[20px]'>
                 <button className='w-[117px] h-[40px] rounded border-[1px] py-[7px] px-[14px] border-[#000000] text-[#000000]'>Enroll Now</button>
                 <button className='2-[77px] h-[40px] rounded px-[14px] py-[7px] pl-[30px]'>$400</button>
               </div>

             </div>
          </div>
       </div>
       </div>


       {/*card 3*/}
       <div className='w-[1,340px] h-[530px] pl-[20px] gap-[32px]'>
        <div className='w-[400px] h-[530px] ml-[60px] rounded gap-[24px] bg-[#F7F7F7]'>
            <div>
            <Image
            src={'/python.svg'}
            alt='data'
            width={416}
            height={300}
            />
            </div>

          <div className='w-[416px] h-[210px] px-[16px] pb-[24px] gap-[24px]'>
             <div className='w-[382px] h-[122px] gap-[8px]'>
                <div className='flex w-[382px] h-[24px] mt-[13px] gap-[8px]'>
                    <h1 className='font-[Roboto] pl-[6px] text-[14px] font-semibold text-[#000000]'>Business</h1>
                
                <div className='flex pl-[240px] gap-[4px]'>
                     <div>
                      <Image
                      src={'/star 1.svg'}
                      alt='star'
                      width={25}
                      height={25}
                      />
                     </div>

                    <div className='w-[20px] h-[24px]'>                                                                                                                                                                                                                                                                                                                                                                  
                    <p className='Font-[Roboto] font-semibold text-[15px] text-right text-[#000000]'>5.0</p>
                    </div>
                </div>
              </div>


              <div className='w-[383px] h-[34px] mt-[10px]'>
                 <p className='font-[Roboto] font-bold text-[24px] text-[#000000]'>Data Analysis for Beginners</p>
              </div>

              <div className='w-[383px] h-[48px] mt-[10px]'>
                <p className='font-[Roboto] text-[16px] text-[#000000]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p> 
              </div>
                
               <div className='w-[382px] h-[40px] gap-[16px] mt-[20px]'>
                 <button className='w-[117px] h-[40px] rounded border-[1px] py-[7px] px-[14px] border-[#000000] text-[#000000]'>Enroll Now</button>
                 <button className='2-[77px] h-[40px] rounded px-[14px] py-[7px] pl-[30px]'>$400</button>
               </div>

             </div>
          </div>
       </div>
       </div>


         {/*card 4*/}
        
        <div className='w-[416px] h-[530px] rounded gap-[24px] bg-[#F7F7F7]'>
            <div>
            <Image
            src={'/paint.svg'}
            alt='paint'
            width={416}
            height={300}
            />
            </div>

          <div className='w-[416px] h-[210px] px-[16px] pb-[24px] gap-[24px]'>
             <div className='w-[382px] h-[122px] gap-[8px]'>
                <div className='flex w-[382px] h-[24px] mt-[13px] gap-[8px] '>
                    <h1 className='font-[Roboto] pl-[6px] text-[14px] font-semibold text-[#000000]'>Art</h1>
                
                <div className='flex pl-[270px] gap-[4px]'>
                     <div>
                      <Image
                      src={'/star 1.svg'}
                      alt='star'
                      width={24}
                      height={24}
                      />
                     </div>

                    <div className='w-[20px] h-[24px]'>                                                                                                                                                                                                                                                                                                                                                                  
                    <p className='Font-[Roboto] font-semibold text-[15px] text-right text-[#000000]'>5.0</p>
                    </div>
                </div>
              </div>


              <div className='w-[383px] h-[34px] mt-[10px]'>
                 <p className='font-[Roboto] font-bold text-[24px] text-[#000000]'>Art Specialization</p>
              </div>

              <div className='w-[383px] h-[48px] mt-[10px]'>
                <p className='font-[Roboto] text-[16px] text-[#000000]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p> 
              </div>
                
               <div className='w-[382px] h-[40px] gap-[16px] mt-[20px]'>
                 <button className='w-[117px] h-[40px] rounded border-[1px] py-[7px] px-[14px] border-[#000000] text-[#000000]'>Enroll Now</button>
                 <button className='2-[77px] h-[40px] rounded px-[14px] py-[7px] pl-[30px]'>$400</button>
               </div>

             </div>
          </div>
       </div>


       {/*card 5*/}
       <div className='w-[1,340px] h-[530px] pl-[20px] gap-[32px]'>
       <div className='w-[416px] h-[530px] ml-[20px] rounded gap-[24px] bg-[#F7F7F7]'>
            <div>
            <Image
            src={'/statue.svg'}
            alt='statue'
            width={416}
            height={300}
            />
            </div>

          <div className='w-[416px] h-[210px] px-[16px] pb-[24px] gap-[24px]'>
             <div className='w-[382px] h-[122px] gap-[8px]'>
                <div className='flex w-[382px] h-[24px] mt-[25px] gap-[8px]'>
                    <h1 className='font-[Roboto] pl-[6px] text-[14px] font-semibold text-[#000000]'>Law</h1>
                
                <div className='flex pl-[270px] gap-[4px]'>
                     <div>
                      <Image
                      src={'/star 1.svg'}
                      alt='star'
                      width={24}
                      height={24}
                      />
                     </div>

                    <div className='w-[20px] h-[24px]'>                                                                                                                                                                                                                                                                                                                                                                  
                    <p className='Font-[Roboto] font-semibold text-[15px] text-right text-[#000000]'>5.0</p>
                    </div>
                </div>
              </div>


              <div className='w-[383px] h-[34px] mt-[10px]'>
                 <p className='font-[Roboto] font-bold text-[24px] text-[#000000]'>Rule of Law</p>
              </div>

              <div className='w-[383px] h-[48px] mt-[10px]'>
                <p className='font-[Roboto] text-[16px] text-[#000000]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p> 
              </div>
                
               <div className='w-[382px] h-[40px] gap-[16px] mt-[20px]'>
                 <button className='w-[117px] h-[40px] rounded border-[1px] py-[7px] px-[14px] border-[#000000] text-[#000000]'>Enroll Now</button>
                 <button className='2-[77px] h-[40px] rounded px-[14px] py-[7px] pl-[30px]'>$400</button>
               </div>

             </div>
          </div>
       </div>
       </div>


       {/*card 6*/}
       <div className='w-[1,340px] h-[530px] pl-[20px] gap-[32px]'>
       <div className='w-[400px] h-[530px] ml-[60px] rounded gap-[24px] bg-[#F7F7F7]'>
            <div>
            <Image
            src={'/webflow.svg'}
            alt='webflow'
            width={416}
            height={300}
            />
            </div>

          <div className='w-[416px] h-[210px] px-[16px] pb-[24px] gap-[24px]'>
             <div className='w-[382px] h-[122px] gap-[8px]'>
                <div className='flex w-[382px] h-[24px] mt-[25px] gap-[8px]'>
                    <h1 className='font-[Roboto] pl-[6px] text-[14px] font-semibold text-[#000000]'>Tech</h1>
                
                <div className='flex pl-[270px] gap-[4px]'>
                     <div>
                      <Image
                      src={'/star 1.svg'}
                      alt='star'
                      width={24}
                      height={24}
                      />
                     </div>

                    <div className='w-[20px] h-[24px]'>                                                                                                                                                                                                                                                                                                                                                                  
                    <p className='Font-[Roboto] font-semibold text-[15px] text-right text-[#000000]'>5.0</p>
                    </div>
                </div>
              </div>


              <div className='w-[383px] h-[34px] mt-[10px]'>
                 <p className='font-[Roboto] font-bold text-[24px] text-[#000000]'>Introduction to webflow</p>
              </div>

              <div className='w-[383px] h-[48px] mt-[10px]'>
                <p className='font-[Roboto] text-[16px] text-[#000000]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p> 
              </div>
                
               <div className='w-[382px] h-[40px] gap-[16px] mt-[20px]'>
                 <button className='w-[117px] h-[40px] rounded border-[1px] py-[7px] px-[14px] border-[#000000] text-[#000000]'>Enroll Now</button>
                 <button className='2-[77px] h-[40px] rounded px-[14px] py-[7px] pl-[30px]'>$400</button>
               </div>

             </div>
          </div>
       </div>
       </div>
    </div>

    </div>
             

    <div className='w-[152px] h-[40px] ml-[550px] mt-[20px] rounded py-[8px] px-[13px] border-[1px] flex items-center justify-center border-[#000000]'>    
  <button className='w-[120px] h-[24px] font-[Roboto] text-[16px] text-[#000000]'>View All Courses</button>
</div>
 

    </div>
  )
}

export default Courses
