'use client'
import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { toast } from 'sonner'

const PromoCode = () => {
  const handleApply = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const target=(e.target as HTMLFormElement).elements[0] as HTMLInputElement
    toast.success(`Promo code: ${target.value} applied!`)
    target.value=''
  }
  return (
    <form onSubmit={handleApply} className='w-full flex flex-row items-center gap-4 mt-4'>
      <Input type='text' placeholder='Add promo code ' className=' rounded-full px-6' required />
      <Button type='submit' className='rounded-full px-8'>Apply</Button>
    </form>
  )
}

export default PromoCode