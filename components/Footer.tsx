import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Footer = () => {
  return (
    <div className='w-[1350px] h-[684px] p-[80px] bg-[#FFFFFF]'>
      <div className='w-[1180px] h-[524px]'>
        <div className='flex justify-between w-[1180px] h-[82px]'>
          <div className='w-[500px] h-[51px]'>
            <h1 className='font-[Roboto] font-semibold text-[18px] text-[#000000]'>Subscribe to our newsletter</h1>
            <p className='font-[Roboto] text-[16px] text-[#000000]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
             
         <div className='w-[400px] h-[82px]'>
          <div className=' flex w-[400px] h-[48px]'>
            <div className='w-[264px] h-[48px] border-[1px] p-[12px] rounded text-[#000000] border-[#000000]'>
              <input type="email" name="email" id="email" placeholder='Enter your email' />
            </div>


            <div className='w-[119px] h-[48px] ml-[10px] rounded border-[1px] px-[23px] py-[12px] border-[#000000]'>
              <button className='font-[Roboto] text-[16px] text-[#000000]'>Subscribe</button>
            </div>

          </div>
          
          <div className='w-[400px] h-[18px]'>
          <p className='font-[Roboto] text-[13px] mt-[15px] underline'>By subscribing you agree to with our Privacy Policy</p>
          </div>
          
         </div>



        </div>

        <div className=' flex w-[1180px] mt-[90px] h-[225px]'>
          <div className='w-[250px] h-[40px]'>
            <div className='flex w-[130.6px] h-[40px]'>
              <Image
              src={'/Ddsgnr Library.png'}
              alt='logo'
              width={134.5}
              height={41}
              />
            </div>
          </div>

          <div className='w-[250px] h-[225px] ml-[90px]'>
            <div className='w-[250px] h-[24px]'>
              <h1 className='font-[Roboto] text-[16px] font-semibold text-[#000000]'>Courses</h1>
            </div>

              <div className='w-[250px] h-[185px]'>
                <div className='w-[250px] h-[37px] py-[8px]'>
                 <Link href={'/'}><h1 className='font-[Roboto] text-[14px] text-[#000000]'>Business</h1></Link> 
                </div>

                <div className='w-[250px] h-[37px] mt-[4px] py-[8px]'>
                 <Link href={'/'}><h1 className='font-[Roboto] text-[14px] text-[#000000]'>Business</h1></Link> 
                </div>


                <div className='w-[250px] h-[37px] mt-[4px] py-[8px]'>
                 <Link href={'/'}><h1 className='font-[Roboto] text-[14px] text-[#000000]'>Business</h1></Link> 
                </div>

                <div className='w-[250px] h-[37px] mt-[4px] py-[8px]'>
                 <Link href={'/'}><h1 className='font-[Roboto] text-[14px] text-[#000000]'>Business</h1></Link> 
                </div>

                <div className='w-[250px] h-[37px] mt-[4px] py-[8px]'>
                 <Link href={'/'}><h1 className='font-[Roboto] text-[14px] text-[#000000]'>Business</h1></Link> 
                </div>
              </div>
          </div>




          <div className='w-[250px] h-[225px] ml-[20px]'>
            <div className='w-[250px] h-[24px]'>
              <h1 className='font-[Roboto] text-[16px] font-semibold text-[#000000]'>Resources</h1>
            </div>

              <div className='w-[250px] h-[185px]'>
                <div className='w-[250px] h-[37px] py-[8px]'>
                 <Link href={'/'}><h1 className='font-[Roboto] text-[14px] text-[#000000]'>Career</h1></Link> 
                </div>

                <div className='w-[250px] h-[37px] mt-[4px] py-[8px]'>
                 <Link href={'/'}><h1 className='font-[Roboto] text-[14px] text-[#000000]'>Resume</h1></Link> 
                </div>


                <div className='w-[250px] h-[37px] mt-[4px] py-[8px]'>
                 <Link href={'/'}><h1 className='font-[Roboto] text-[14px] text-[#000000]'>Learning</h1></Link> 
                </div>

                <div className='w-[250px] h-[37px] mt-[4px] py-[8px]'>
                 <Link href={'/'}><h1 className='font-[Roboto] text-[14px] text-[#000000]'>Interview Preparation</h1></Link> 
                </div>

                <div className='w-[250px] h-[37px] mt-[4px] py-[8px]'>
                 <Link href={'/'}><h1 className='font-[Roboto] text-[14px] text-[#000000]'>Jobs</h1></Link> 
                </div>
              </div>
          </div>




          <div className='w-[250px] h-[225px] ml-[20px]'>
            <div className='w-[250px] h-[24px]'>
              <h1 className='font-[Roboto] text-[16px] font-semibold text-[#000000]'>About Us</h1>
            </div>

              <div className='w-[250px] h-[185px]'>
                <div className='w-[250px] h-[37px] py-[8px]'>
                 <Link href={'/'}><h1 className='font-[Roboto] text-[14px] text-[#000000]'>Contact</h1></Link> 
                </div>

                <div className='w-[250px] h-[37px] mt-[4px] py-[8px]'>
                 <Link href={'/'}><h1 className='font-[Roboto] text-[14px] text-[#000000]'>Help/Support</h1></Link> 
                </div>


                <div className='w-[250px] h-[37px] mt-[4px] py-[8px]'>
                 <Link href={'/'}><h1 className='font-[Roboto] text-[14px] text-[#000000]'>FAQ</h1></Link> 
                </div>

                <div className='w-[250px] h-[37px] mt-[4px] py-[8px]'>
                 <Link href={'/'}><h1 className='font-[Roboto] text-[14px] text-[#000000]'>Teams and Conditions</h1></Link> 
                </div>

                <div className='w-[250px] h-[37px] mt-[4px] py-[8px]'>
                 <Link href={'/'}><h1 className='font-[Roboto] text-[14px] text-[#000000]'>Partners</h1></Link> 
                </div>
              </div>
          </div>

         </div>
          
          <div className='w-[1180px] h-[57px] mt-[70px]'>
            <div>
              <Image
              src={'/Divider.svg'}
              alt='line'
              width={1181}
              height={2}
              />
            </div>

            <div className='flex justify-between w-[1180px] h-[25px] mt-[32px]'>
              <div className='flex w-[665px] h-[25px]'>
                <div className='w-[295px] h-[25px]'>
                  <h1 className='font-[Roboto] mt-[3px] text-[14px]'>2023 Ddsgnr. All right reserved.</h1>
                </div>   

                <div className='flex justify-between w-[390px] h-[25px]'>
                  
                  <Link href={'/'}><h1 className='ml-[5px] font-[Roboto] text-[14px] underline text-[#000000]'>Privacy Policy</h1></Link>
                   
                  <Link href={'/'}><h1 className='ml-[10px] font-[Roboto] text-[14px] underline text-[#000000]'>Terms Of services</h1></Link>

                  <Link href={'/'}><h1 className='ml-[5px] font-[Roboto] text-[14px] underline text-[#000000]'>Cookies Settings</h1></Link>

                </div>
              </div>
            
               <div className='flex w-[132px] h-[25px]'>
                <div className='flex gap-[10px]'>
               <Image
               src={'/facebook-logo-24.png'}
               alt='facebook'
               width={24}
               height={24}
               />

               <Image
               src={'/Instagram-logo-24.png'}
               alt='instagram'
               width={24}
               height={24}
               />
              
              <Image
               src={'/Twitter.svg'}
               alt='twitter'
               width={24}
               height={24}
               />
                
               <Image
               src={'/Linkedin.svg'}
               alt='linkedin'
               width={24}
               height={24}
               />

                </div>

               </div>

            </div>

          </div>

      </div>

    </div>
  )
}

export default Footer
