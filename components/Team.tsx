import React from 'react'
import Image from 'next/image'


const Team = () => {
  return (
    <div className='md:w-[1350px] md:h-[895px] w-[428px] h-[1075px] md:px-[40px] md:py-[112px] px-[24px] py-[48px] md:mt-[50px] mt-[80px] bg-[#F7F7F7]'>
      <div className='md:w-[768px] md:h-[109px] w-[363px] h-[120px] md:ml-[260px]'>
        <div className='md:w-[768px] md:h-[58px] w-[363px] h-[42px]'>
            <h1 className='font-[Roboto] md:text-[48px] text-[32px] font-bold text-center text-[#000000]'>Our Team</h1>
            <p className='Font-[Roboto] mt-[10px] text-[18px] text-center text-[#000000]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
      </div>


      <div className='md:w-[1260px] mt-[50px] md:h-[600px] w-[380px] h-[723px]'>
        <div className='md:grid md:grid-cols-3 grid-cols-1 w-[1260px] h-[270px]'>
            <div className='md:w-[400px] md:h-[270] w-[394.30px] h-[260px]'>
                  
             <div className='flex justify-center items-center'>
                <Image
                src={'/man1.svg'}
                alt='man1'
                width={80}
                height={80}
                />
             </div>

             <div className='md:w-[400px] w-[394.30px] h-[110px] mt-[10px]'>
              <div className='w-[400px] h-[57px]'>
                <h1 className='font-[Roboto] text-[20px] text-center font-semibold text-[#000000]'>James Nduku</h1>
                <p className='font-[Roboto] mt-[4px] text-[18px] text-center text-[#000000]'>Marketing Coordinator</p>
              </div>
             </div>
             
              <div className='md:w-[400px] w-[394.30px] h-[24px]'>
               <div className='flex justify-center items-center gap-[3px]'>
                <Image
                src={'/Linkedin.svg'}
                alt='linkedin'
                height={24}
                width={24}
                />

                <Image
                src={'/Twitter.svg'}
                alt='twitter'
                width={24}     
                height={24}      
                />

                <Image
                src={'/Dribble.svg'}
                alt='dribble'
                width={24}
                height={24}
                />   


               </div>
              </div>

            </div>

            {/*card 2*/}
            <div className='md:w-[400px] w-[394.30px] h-[270]'>
                  
             <div className='flex justify-center items-center'>
                <Image
                src={'/woman1.svg'}
                alt='woman1'
                width={80}
                height={80}
                />
             </div>

             <div className='md:w-[400px] w-[394.30px] h-[110px] mt-[10px]'>
              <div className='w-[400px] h-[57px]'>
                <h1 className='font-[Roboto] text-[20px] text-center font-semibold text-[#000000]'>Joseph Munyambu</h1>
                <p className='font-[Roboto] mt-[4px] text-[18px] text-center text-[#000000]'>Nursing Assistant</p>
              </div>
             </div>
             
              <div className='md:w-[400px] w-[394.30px] h-[24px]'>
               <div className='flex justify-center items-center gap-[3px]'>
                <Image
                src={'/Linkedin.svg'}
                alt='linkedin'
                height={24}
                width={24}
                />

                <Image
                src={'/Twitter.svg'}
                alt='twitter'
                width={24}     
                height={24}      
                />

                <Image
                src={'/Dribble.svg'}
                alt='dribble'
                width={24}
                height={24}
                />   

               </div>
              </div>

            </div>

            {/*card 3*/}
            <div className='md:w-[400px] w-[394.30px] h-[270]'>
                  
             <div className='flex justify-center items-center'>
                <Image
                src={'/woman.svg'}
                alt='woman'
                width={80}
                height={80}
                />
             </div>

             <div className='md:w-[400px] w-[394.30px] h-[110px] mt-[10px]'>
              <div className='w-[400px] h-[57px]'>
                <h1 className='font-[Roboto] text-[20px] text-center font-semibold text-[#000000]'>Joseph Ngumbau</h1>
                <p className='font-[Roboto] mt-[4px] text-[18px] text-center text-[#000000]'>Medical Assistant</p>
              </div>
             </div>
             
              <div className='md:w-[400px] w-[394.30px] h-[24px]'>
               <div className='flex justify-center items-center gap-[3px]'>
                <Image
                src={'/Linkedin.svg'}
                alt='linkedin'
                height={24}
                width={24}
                />

                <Image
                src={'/Twitter.svg'}
                alt='twitter'
                width={24}     
                height={24}      
                />

                <Image
                src={'/Dribble.svg'}
                alt='dribble'
                width={24}
                height={24}
                />   


               </div>
              </div>

            </div>

            {/*card 4*/}
            <div className='w-[400px] h-[270] mt-[20px] hidden md:block'>
                  
             <div className='flex justify-center items-center'>
                <Image
                src={'/man3.svg'}
                alt='man3'
                width={80}
                height={80}
                />
             </div>

             <div className='w-[400px] h-[110px] mt-[10px]'>
              <div className='w-[400px] h-[57px]'>
                <h1 className='font-[Roboto] text-[20px] text-center font-semibold text-[#000000]'>Erick Kipkemboi</h1>
                <p className='font-[Roboto] mt-[4px] text-[18px] text-center text-[#000000]'>Web Designer</p>
              </div>
             </div>
             
              <div className='w-[400px] h-[24px]'>
               <div className='flex justify-center items-center gap-[3px]'>
                <Image
                src={'/Linkedin.svg'}
                alt='linkedin'
                height={24}
                width={24}
                />

                <Image
                src={'/Twitter.svg'}
                alt='twitter'
                width={24}     
                height={24}      
                />

                <Image
                src={'/Dribble.svg'}
                alt='dribble'
                width={24}
                height={24}
                />   


               </div>
              </div>

            </div>

            {/*card 5*/}
            <div className='w-[400px] h-[270] mt-[20px] hidden md:block'>
                  
             <div className='flex justify-center items-center'>
                <Image
                src={'/man4.svg'}
                alt='man4'
                width={80}
                height={80}
                />
             </div>

             <div className='w-[400px] h-[110px] mt-[10px]'>
              <div className='w-[400px] h-[57px]'>
                <h1 className='font-[Roboto] text-[20px] text-center font-semibold text-[#000000]'>Stephen Kerubo</h1>
                <p className='font-[Roboto] mt-[4px] text-[18px] text-center text-[#000000]'>President of Sales</p>
              </div>
             </div>
             
              <div className='w-[400px] h-[24px]'>
               <div className='flex justify-center items-center gap-[3px]'>
                <Image
                src={'/Linkedin.svg'}
                alt='linkedin'
                height={24}
                width={24}
                />

                <Image
                src={'/Twitter.svg'}
                alt='twitter'
                width={24}     
                height={24}      
                />

                <Image
                src={'/Dribble.svg'}
                alt='dribble'
                width={24}
                height={24}
                />   


               </div>
              </div>

            </div>

            {/*card 6*/}
            <div className='w-[400px] h-[270] mt-[20px] hidden md:block'>
                  
             <div className='flex justify-center items-center'>
                <Image
                src={'/woman2.svg'}
                alt='woman2'
                width={80}
                height={80}
                />
             </div>

             <div className='w-[400px] h-[110px] mt-[10px]'>
              <div className='w-[400px] h-[57px]'>
                <h1 className='font-[Roboto] text-[20px] text-center font-semibold text-[#000000]'>John Leboo</h1>
                <p className='font-[Roboto] mt-[4px] text-[18px] text-center text-[#000000]'>Dog Trrainer</p>
              </div>
             </div>
             
              <div className='w-[400px] h-[24px]'>
               <div className='flex justify-center items-center gap-[3px]'>
                <Image
                src={'/Linkedin.svg'}
                alt='linkedin'
                height={24}
                width={24}
                />

                <Image
                src={'/Twitter.svg'}
                alt='twitter'
                width={24}     
                height={24}      
                />

                <Image
                src={'/Dribble.svg'}
                alt='dribble'
                width={24}
                height={24}
                />   


               </div>
              </div>

            </div>

        </div>
                  
      </div>

      <div className='w-[100px] h-[100px] px-[150px] py-[90px] gap-[8px] md:hidden'>
        <button className='w-[100px] font-[Roboto] text-[16px] border-[1px] rounded-[5px] border-[#000000]'>View All</button>
       </div> 

    </div>
  )
}

export default Team
