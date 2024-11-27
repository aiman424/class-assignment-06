import React from 'react'
import Image from 'next/image'



const Testimonials = () => {
  return (
    <div className='md:w-[1350px] md:h-[830.89px] w-[428px] h-[681.89px] md:px-[85px] md:py-[112px] px-[24px] py-[48px] bg-[#F7F7F7]'>
      <div className='md:w-[560px] md:h-[109px] w-[361px] h-[120px]'>
        <h1 className='font-[Roboto] font-bold md:text-[38px] text-[32px] text-[#000000]'>Customer testimonials</h1>
        <p className='font-[Roboto] text-[18px] md:mt-[28px] mt-[20px] text-[#000000]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>


    <div className='md:grid md:grid-cols-3 md:w-[1186px] md:h-[427px] w-[380px] h-[417.89px] mt-[50px]'>
      <div className='w-[1186px] h-[321px]'>
        <div className='w-[362px] h-[321px] border-[1px] p-[30px] border-[#000000]'>
          <div className=' flex gap-[4px]'>
            
         <Image
         src={'/shape.svg'}
         alt='star'
         width={23}
         height={23} 
         />

         <Image
         src={'/shape.svg'}
         alt='star'
         width={23}
         height={23} 
         />

        <Image
         src={'/shape.svg'}
         alt='star'
         width={23}
         height={23} 
         />

         <Image
         src={'/shape.svg'}
         alt='star'
         width={23}
         height={23} 
         />

        <Image
         src={'/shape.svg'}
         alt='star'
         width={23}
         height={23} 
         />

          </div>
          
          <div className='w-[300.67px] h-[215px] mt-[20px]'>
          <p className='h-[108px] font-[Roboto] text-[19px] pl-[4px] leading-[27px] text-[#000000]'>&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.&quot;</p>


          <div className='flex w-[254px] h-[56px] mt-[36px]'>
            <div>
                <Image
                 src={'/woman.svg'}
                 alt='man'
                 width={56}
                 height={56}
                />
            </div>

           <div className='w-[178px] h-[48px]'>
            <h1 className='font-[Roboto] pl-[15px] text-[16px] font-semibold text-[#000000]'>James Nduku</h1>
            <p className='font-[Roboto] pl-[15px] text-[16px] '>Software Developer</p>
           </div>


          </div>

          </div>

        </div>
    </div>
        

      {/*card 2*/}
    <div className='h-[321px] hidden md:block'>
        <div className='w-[362px] h-[321px] border-[1px] p-[30px] border-[#000000]'>
          <div className=' flex gap-[4px]'>
            
         <Image
         src={'/shape.svg'}
         alt='star'
         width={23}
         height={23} 
         />

         <Image
         src={'/shape.svg'}
         alt='star'
         width={23}
         height={23} 
         />

        <Image
         src={'/shape.svg'}
         alt='star'
         width={23}
         height={23} 
         />

         <Image
         src={'/shape.svg'}
         alt='star'
         width={23}
         height={23} 
         />

        <Image
         src={'/shape.svg'}
         alt='star'
         width={23}
         height={23} 
         />

          </div>
          
          <div className='w-[300.67px] h-[215px] mt-[20px]'>
          <p className='h-[108px] font-[Roboto] text-[19px] pl-[4px] leading-[27px] text-[#000000]'>&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.&quot;</p>


          <div className='flex w-[254px] h-[56px] mt-[36px]'>
            <div>
                <Image
                 src={'/man1.svg'}
                 alt='man'
                 width={56}
                 height={56}
                />
            </div>

           <div className='w-[178px] h-[48px]'>
            <h1 className='font-[Roboto] pl-[15px] text-[16px] font-semibold text-[#000000]'>Erick Kipkemboi</h1>
            <p className='font-[Roboto] pl-[15px] text-[16px] '>Scrum Master</p>
           </div>


          </div>

          </div>

        </div>
    </div>

    {/*card 3*/}
    <div className='h-[321px] hidden md:block'>
        <div className='w-[362px] h-[321px] border-[1px] p-[30px] border-[#000000]'>
          <div className=' flex gap-[4px]'>
            
         <Image
         src={'/shape.svg'}
         alt='star'
         width={23}
         height={23} 
         />

         <Image
         src={'/shape.svg'}
         alt='star'
         width={23}
         height={23} 
         />

        <Image
         src={'/shape.svg'}
         alt='star'
         width={23}
         height={23} 
         />

         <Image
         src={'/shape.svg'}
         alt='star'
         width={23}
         height={23} 
         />

        <Image
         src={'/shape.svg'}
         alt='star'
         width={23}
         height={23} 
         />

          </div>
          
          <div className='w-[300.67px] h-[215px] mt-[20px]'>
          <p className='h-[108px] font-[Roboto] text-[19px] pl-[4px] leading-[27px] text-[#000000]'>&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.&quot;</p>


          <div className='flex w-[254px] h-[56px] mt-[36px]'>
            <div>
                <Image
                 src={'/woman2.svg'}
                 alt='woman'
                 width={56}
                 height={56}
                />
            </div>

           <div className='w-[178px] h-[48px]'>
            <h1 className='font-[Roboto] pl-[15px] text-[16px] font-semibold text-[#000000]'>Stephen Kerubo</h1>
            <p className='font-[Roboto] pl-[15px] text-[16px] '>UI/UX Designer</p>
           </div>


          </div>

          </div>

        </div>
    </div>

    <div className='w-[380px] h-[48px] mt-[40px] md:hidden'>
        <Image
        src={'testinmonials.svg'}
        alt='arrow'
        width={380}
        height={40}
        />

      </div>
 


</div>

      



    </div>
  )
}

export default Testimonials
