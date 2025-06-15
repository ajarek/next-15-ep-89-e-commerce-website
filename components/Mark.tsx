import Image from 'next/image'
import React from 'react'

const Mark = () => {
  return (
    <div className='w-full flex items-center justify-center gap-8 flex-wrap bg-black p-4'>
      <Image src='/images/versace.png' alt='versace' width={166.48} height={33.16} className='max-lg:w-auto max-lg:h-[20px]' />
      <Image src='/images/zara.png' alt='zara' width={91} height={38} className='max-lg:w-auto max-lg:h-[20px]' />
      <Image src='/images/gucci.png' alt='gucci' width={156} height={36} className='max-lg:w-auto max-lg:h-[20px]' />
      <Image src='/images/prada.png' alt='prada' width={194} height={32} className='max-lg:w-auto max-lg:h-[20px]' />
      <Image src='/images/klein.png' alt='klein' width={206.79} height={33.35} className='max-lg:w-auto max-lg:h-[20px]' />

    </div>
  )
}

export default Mark
