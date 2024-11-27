import React from 'react'
import Image from 'next/image'

const Courses = () => {
  return (
    <div className='md:w-[1350px] md:h-[1742px] w-[428px] h-[2135px] md:py-[112px] md:px-[50px] px-[15px] py-[48px] gap-[50px] '>
      <div className='w-[790px] h-[118px] md:flex gap-[16px] md:ml-[200px] md:justify-center m-[30px] p-[30px]'>
        
        <div className='md:w-[786px] md:h-[118px] w-[249px] h-[93px] gap-[24px]'>
            <h1 className='md:w-[768px] md:h-[67px] font-[Roboto] text-[56px] font-bold text-center'>Courses</h1>
            <p className='md:w-[768px] md:h-[27px] md:mt-[25px] mt-[10px] font-[Roboto] text-[18px] text-center text-[#000000]'>Your Ultimate Guide to learning</p>
        </div>

      </div>

      <div className='w-[1,152px] h-[1,340px] gap-[64px]'>
         <div className='flex w-[336px] h-[40px] md:mt-[70px] md:ml-[430px] ml-[20px] mt-[70px]'>
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

       {/*card 1*/}  
      <div className='md:w-[1152px] md:h-[1132px] w-[380px] h-[1690px] md:mt-[50px] mt-[40px] md:pr-[30px] pr-[40px] gap-[64px'>
       <div className='md:grid md:grid-cols-3 grid-cols-1 w-[1,340px] h-[530px] gap-[32px]'>
        <div className='md:w-[416px] md:h-[530px] w-[380px] h-[558px] rounded gap-[24px] bg-[#F7F7F7]'>
            <div className='md:w-[416px] w-[380px] h-[300px]'>
            <Image
            src={'/laptop.svg'}
            alt='laptop'
            width={416}
            height={300}
            />
            </div>

          <div className='w-[416px] h-[210px] md:px-[16px] px-[10px] pb-[24px] gap-[24px]'>
             <div className='md:w-[382px] md:h-[122px] w-[348px] h-[146px] gap-[8px]'>
                <div className='flex w-[382px] h-[24px] md:mt-[25px] mt-[20px] gap-[8px]'>
                    <h1 className='font-[Roboto] pl-[6px] text-[14px] font-semibold text-[#000000]'>Design</h1>
                
                <div className='flex md:pl-[270px] pl-[250px] gap-[4px]'>
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

              <div className='md:w-[383px] md:h-[48px] w-[326px] h-[72px] mt-[10px]'>
                <p className='font-[Roboto] text-[16px] text-[#000000]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p> 
              </div>
                
               <div className='w-[382px] h-[40px] gap-[16px] mt-[20px]'>
                 <button className='w-[117px] h-[40px] rounded-[5px] border-[1px] py-[7px] px-[14px] border-[#000000] text-[#000000]'>Enroll Now</button>
                 <button className='2-[77px] h-[40px] rounded px-[14px] py-[7px] pl-[30px]'>$400</button>
               </div>

             </div>
          </div>
       </div>

        {/*card 2*/}
      <div className='md:w-[1,340px] md:h-[530px] w-[380px] h-[558px] md:pl-[10px] mt-[20px] gap-[32px]'>
        <div className='md:w-[416px] md:h-[534px] w-[380px] h-[558px] md:ml-[30px] rounded gap-[24px] bg-[#F7F7F7]'>
            <div className='md:w-[416px] w-[380px] h-[300px]'>
            <Image
            src={'/data.svg'}
            alt='python'
            width={416}
            height={300}
            />
            </div>

          <div className='w-[416px] h-[210px] md:px-[16px] px-[10px] pb-[24px] gap-[24px]'>
             <div className='md:w-[382px] md:h-[122px] w-[348px] h-[146px] gap-[8px]'>
                <div className='flex w-[382px] h-[24px] mt-[13px] gap-[8px]'>
                    <h1 className='font-[Roboto] pl-[6px] text-[14px] font-semibold text-[#000000]'>Programming</h1>
                
                <div className='flex md:pl-[270px] pl-[200px] gap-[4px]'>
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

              <div className='md:w-[383px] md:h-[48px] w-[326px] h-[72px] mt-[10px]'>
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
       <div className='md:w-[1,340px] md:h-[530px] w-[380px] h-[558px] md:pl-[20px] mt-[20px] gap-[32px]'>
        <div className='md:w-[400px] md:h-[530px] w-[380px] h-[558px] md:ml-[60px] rounded gap-[24px] bg-[#F7F7F7]'>
            <div className='md:w-[416px] w-[380px] h-[300px]'>
            <Image
            src={'/python.svg'}
            alt='data'
            width={416}
            height={300}
            />
            </div>

          <div className='w-[416px] h-[210px] md:px-[16px] px-[10px] pb-[24px] gap-[24px]'>
             <div className='md:w-[382px] md:h-[122px] w-[348px] h-[146px] gap-[8px]'>
                <div className='flex w-[382px] h-[24px] mt-[13px] gap-[8px]'>
                    <h1 className='font-[Roboto] pl-[6px] text-[14px] font-semibold text-[#000000]'>Business</h1>
                
                <div className='flex md:pl-[240px] pl-[220px] gap-[4px]'>
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

              <div className='md:w-[383px] md:h-[48px] w-[326px] h-[72px] mt-[10px]'>
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
        
        <div className='w-[416px] h-[530px] rounded gap-[24px] bg-[#F7F7F7] hidden md:block'>
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
       <div className='w-[416px] h-[530px] ml-[20px] rounded gap-[24px] bg-[#F7F7F7] hidden md:block'>
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
       <div className='w-[400px] h-[530px] ml-[60px] rounded gap-[24px] bg-[#F7F7F7] hidden md:block'>
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
             

    <div className='w-[152px] h-[40px] md:ml-[550px] ml-[100px] md:mt-[20px] mt-[50px] rounded-[5px] py-[8px] px-[13px] border-[1px] flex md:items-center md:justify-center border-[#000000]'>    
  <button className='w-[120px] h-[24px] font-[Roboto] text-[16px] text-[#000000]'>View All Courses</button>
</div>
 

    </div>
  )
}

export default Courses
