import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div>
    <div className='w-[1358px] h-[47px] pr-[640px] pl-[62px] text-[#000000] flex items-center leading-[47px] bg-[#F7F7F7] md:gap-2 '>
     Phone Number: 956 742 455 678 │ Email: Info@gmail.com 
     <div className=' flex pr-[62px] md:gap-1 md:flex-row'>

        <Image
        src={'/facebook-logo-24.png'}
        alt='facebook'
        width={24}
        height={24}
        className='w-[20]'/>

        <Image
        src={'/instagram-logo-24.png'}
        alt='instagram'
        width={24}
        height={24}
        className='w-[20]'/>

        <Image
        src={'/linkedin-square-logo-24.png'}
        alt='instagram'
        width={24}
        height={24}
        className='w-[20]'/>

        <Image
        src={'/twitter-logo-24.png'}
        alt='twitter'
        width={24}
        height={24}
        className='w-[20]'/>
       </div>
     </div>
    
    </div>
  )
}

export default Header
