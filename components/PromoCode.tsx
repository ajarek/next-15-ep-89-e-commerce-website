import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

const PromoCode = () => {
  return (
    <form className='w-full flex flex-row items-center gap-4 mt-4'>
      <Input type='text' placeholder='Add promo code ' className=' rounded-full px-4'/>
      <Button className='rounded-full px-8'>Apply</Button>
    </form>
  )
}

export default PromoCode