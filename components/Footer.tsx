import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Footer = () => {
  return (
    <div className='md:w-[1350px] md:h-[684px] md:p-[80px] px-[24px] py-[48px] w-[428px] h-[1411px] bg-[#FFFFFF]'>
      <div className='md:w-[1180px] md:h-[524px] w-[380px] h-[1315px]'>
        <div className='md:flex md:justify-between md:w-[1180px] md:h-[82px] w-[380px] h-[261px]'>
          <div className='md:w-[500px] md:h-[51px] ml-[20px] w-[287px] h-[91px]'>
            <h1 className='font-[Roboto] font-semibold text-[18px] pl-[60px] text-[#000000]'>Subscribe to our newsletter</h1>
            <p className='font-[Roboto] text-[16px] pl-[60px] mt-[10px] text-[#000000]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
             
         <div className='md:w-[400px] md:h-[82px] w-[380px] h-[146px]'>
          <div className='md:flex md:w-[400px] md:h-[48px] h-[112px]'>
            <div className='md:w-[264px] w-[380px] h-[48px] border-[1px] md:p-[12px] mt-[10px] rounded text-[#000000] border-[#000000]'>
              <input type="email" name="email" id="email" placeholder='Enter your email' />
            </div>


            <div className='md:w-[119px] w-[380px] h-[48px] md:ml-[10px] mt-[10px] text-center rounded border-[1px] md:px-[23px] py-[12px] border-[#000000]'>
              <button className='font-[Roboto] text-[16px] text-[#000000]'>Subscribe</button>
            </div>

          </div>
          
          <div className='w-[400px] h-[18px] text-center'>
          <p className='font-[Roboto] text-[13px] mt-[15px] underline'>By subscribing you agree to with our Privacy Policy</p>
          </div>
          
         </div>



        </div>

        <div className='md:flex md:w-[1180px] md:mt-[90px] md:h-[225px] w-[172px] h-[811px]'>
          <div className='items-center md:w-[250px] md:h-[40px] mt-[20px] md:mt-0 md:pl-0 pl-[90px] w-[172px] h-[40px]'>
            <div className='md:flex w-[130.6px] h-[40px]'>
              <Image
              src={'/Ddsgnr Library.png'}
              alt='logo'
              width={134.5}
              height={41}
              />
            </div>
          </div>

          <div className='w-[250px] h-[225px] md:ml-[90px] ml-[40px] md:mt-0 mt-[30-px]'>
            <div className='w-[250px] h-[24px] mt-[20px] md:mt-0 md:pl-0 pl-[100px]'>
              <h1 className='font-[Roboto] text-[16px] font-semibold text-[#000000]'>Courses</h1>
            </div>

              <div className='w-[250px] h-[185px]'>
                <div className='w-[250px] h-[37px] md:pl-0 pl-[100px] py-[8px] mt-[10px] md:mt-0'>
                 <Link href={'/'}><h1 className='font-[Roboto] text-[14px] text-[#000000]'>Business</h1></Link> 
                </div>

                <div className='w-[250px] h-[37px] mt-[4px] md:pl-0 pl-[100px] py-[8px]'>
                 <Link href={'/'}><h1 className='font-[Roboto] text-[14px] text-[#000000]'>Developnment</h1></Link> 
                </div>


                <div className='w-[250px] h-[37px] mt-[4px] md:pl-0 pl-[100px] py-[8px]'>
                 <Link href={'/'}><h1 className='font-[Roboto] text-[14px] text-[#000000]'>Technology</h1></Link> 
                </div>

                <div className='w-[250px] h-[37px] mt-[4px] md:pl-0 pl-[100px] py-[8px]'>
                 <Link href={'/'}><h1 className='font-[Roboto] text-[14px] text-[#000000]'>Design</h1></Link> 
                </div>

                <div className='w-[250px] h-[37px] mt-[4px] md:pl-0 pl-[100px] py-[8px]'>
                 <Link href={'/'}><h1 className='font-[Roboto] text-[14px] text-[#000000]'>Programming</h1></Link> 
                </div>
              </div>
          </div>




          <div className='w-[250px] h-[225px] ml-[40px] md:ml-[90px]'>
            <div className='w-[250px] h-[24px] mt-[20px] md:mt-0 md:pl-0 pl-[100px]'>
              <h1 className='font-[Roboto] text-[16px] font-semibold text-[#000000]'>Resources</h1>
            </div>

              <div className='w-[250px] h-[185px]'>
                <div className='w-[250px] h-[37px] md:pl-0 pl-[100px] py-[8px] mt-[10px] md:mt-0'>
                 <Link href={'/'}><h1 className='font-[Roboto] text-[14px] text-[#000000]'>Career</h1></Link> 
                </div>

                <div className='w-[250px] h-[37px] mt-[4px] md:pl-0 pl-[100px] py-[8px]'>
                 <Link href={'/'}><h1 className='font-[Roboto] text-[14px] text-[#000000]'>Resume</h1></Link> 
                </div>


                <div className='w-[250px] h-[37px] mt-[4px] md:pl-0 pl-[100px] py-[8px]'>
                 <Link href={'/'}><h1 className='font-[Roboto] text-[14px] text-[#000000]'>Learning</h1></Link> 
                </div>

                <div className='w-[250px] h-[37px] mt-[4px] md:pl-0 pl-[100px] py-[8px]'>
                 <Link href={'/'}><h1 className='font-[Roboto] text-[14px] text-[#000000]'>Interview Preparation</h1></Link> 
                </div>

                <div className='w-[250px] h-[37px] mt-[4px] md:pl-0 pl-[100px] py-[8px]'>
                 <Link href={'/'}><h1 className='font-[Roboto] text-[14px] text-[#000000]'>Jobs</h1></Link> 
                </div>
              </div>
          </div>




          <div className='w-[250px] h-[225px] ml-[40px] md:ml-[90px]'>
            <div className='w-[250px] h-[24px] mt-[20px] md:mt-0 md:pl-0 pl-[100px]'>
              <h1 className='font-[Roboto] text-[16px] font-semibold text-[#000000]'>About Us</h1>
            </div>

              <div className='w-[250px] h-[185px]'>
                <div className='w-[250px] h-[37px] md:pl-0 pl-[100px] py-[8px] mt-[10px] md:mt-0'>
                 <Link href={'/'}><h1 className='font-[Roboto] text-[14px] text-[#000000]'>Contact</h1></Link> 
                </div>

                <div className='w-[250px] h-[37px] mt-[4px] md:pl-0 pl-[100px] py-[8px]'>
                 <Link href={'/'}><h1 className='font-[Roboto] text-[14px] text-[#000000]'>Help/Support</h1></Link> 
                </div>


                <div className='w-[250px] h-[37px] mt-[4px] md:pl-0 pl-[100px] py-[8px]'>
                 <Link href={'/'}><h1 className='font-[Roboto] text-[14px] text-[#000000]'>FAQ</h1></Link> 
                </div>

                <div className='w-[250px] h-[37px] mt-[4px] md:pl-0 pl-[100px] py-[8px]'>
                 <Link href={'/'}><h1 className='font-[Roboto] text-[14px] text-[#000000]'>Teams and Conditions</h1></Link> 
                </div>

                <div className='w-[250px] h-[37px] mt-[4px] md:pl-0 pl-[100px] py-[8px]'>
                 <Link href={'/'}><h1 className='font-[Roboto] text-[14px] text-[#000000]'>Partners</h1></Link> 
                </div>
              </div>
          </div>

         </div>
          
          <div className='md:w-[1180px] md:h-[57px] w-[380px] h-[57px] mt-[70px]'>
            <div>
              <Image
              src={'/Divider.svg'}
              alt='line'
              width={1181}
              height={2}
              style={{
                border: '1px solid black',
                background: 'inline-black' // optional internal image border
              }}
              />
            </div>

            <div className='md:flex md:justify-between md:w-[1180px] md:h-[25px] w-[380px] h-[114px] mt-[32px]'>
              <div className='md:flex md:w-[665px] md:h-[25px] w-[345px] h-[66px] pl-[20px] md:pl-0'>
                <div className='md:w-[295px] md:h-[25px] w-[195px] h-[21px] ml-[60px] md:ml-0'>
                  <h1 className='font-[Roboto] mt-[3px] text-[14px]'>2023 Ddsgnr. All right reserved.</h1>
                </div>   

                <div className='flex md:justify-between w-[390px] h-[25px] mt-[20px] md:mt-0'>
                  
                  <Link href={'/'}><h1 className='md:ml-[5px] font-[Roboto] text-[14px] underline text-[#000000]'>Privacy Policy</h1></Link>
                   
                  <Link href={'/'}><h1 className='ml-[10px] font-[Roboto] text-[14px] underline text-[#000000]'>Terms Of services</h1></Link>

                  <Link href={'/'}><h1 className='md:ml-[5px] ml-[10px] font-[Roboto] text-[14px] underline text-[#000000]'>Cookies Settings</h1></Link>

                </div>
              </div>
            
               <div className='flex w-[132px] h-[25px] mt-[20px] ml-[100px] md:ml-0 md:mt-0 '>
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
