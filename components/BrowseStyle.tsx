import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const BrowseStyle = () => {
  return (
    <div className='w-full flex flex-col items-center justify-start gap-4 px-16 max-lg:px-4'>
      <h1 className='w-full text-center text-3xl font-bold uppercase'>
        Browse by dress style
      </h1>
      <div className='w-full flex items-center gap-4'>
        <Link
          href='/shop'
          aria-label='Casual'
        >
          <Image
            src={'/images/casual.png'}
            alt={'casual'}
            width={407}
            height={289}
          />
        </Link>
        <Link
          href='/shop'
          aria-label='Formal'
        >
          <Image
            src={'/images/formal.png'}
            alt={'formal'}
            width={684}
            height={289}
          />
        </Link>
      </div>
      <div className='w-full flex items-center gap-4'>
        <Link
          href='/shop'
          aria-label='Party'
        >
          <Image
            src={'/images/party.png'}
            alt={'party'}
            width={684}
            height={289}
          />
        </Link>
        <Link
          href='/shop'
          aria-label='Gym'
        >
          <Image
            src={'/images/gym.png'}
            alt={'gym'}
            width={407}
            height={289}
          />
        </Link>
      </div>
    </div>
  )
}

export default BrowseStyle
