import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Mail } from 'lucide-react'
const Offer = () => {
  return (
    <div className='w-full flex justify-center px-16'>
      <div className='w-full grid grid-cols-[2fr_1fr] max-lg:grid-cols-1 gap-4 bg-foreground text-background  p-12  rounded-2xl'>
        <h1 className='   text-4xl font-extrabold uppercase'>
          Stay upto date about <br/> our latest offers
        </h1>
        <form action=''>
          <div className='relative flex flex-col items-center  '>
            <Input
              type='email'
              placeholder='Enter your email address'
              className=' rounded-full pl-12 bg-white text-black border border-gray-600'
            />
            <Mail
              className='absolute left-4 top-1/2 -translate-y-1/2 '
              size={24}
              color='gray'
            />
          </div>
          <Button
            type='submit'
            className='w-full text-foreground bg-background rounded-full mt-4 hover:bg-background/80 transition-all duration-200 cursor-pointer'
          >
            Subscribe to Newsletter
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Offer
