'use client'
import React from 'react'
import { useCartStore } from '@/store/cartStore'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { Minus, Plus, Trash2 } from 'lucide-react'

const Cart = () => {
  const { items, increment, decrement, removeItemFromCart, total, removeAll } =
    useCartStore()
  const router = useRouter()

  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-start py-4 gap-4 px-16 max-lg:px-4   '>
      <h1 className='w-full  text-3xl font-bold uppercase'>Your Cart</h1>
      <div className='w-full grid grid-cols-2 max-lg:grid-cols-1 gap-4 '>
        <div className='flex flex-col items-start justify-start gap-4'>
          {items.map((item) => (
            <div
              key={item.id}
              className='w-full flex items-center justify-between gap-4 p-2 rounded-lg border border-gray-200'
            >
              <div className=' flex items-center gap-4'>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                />
                <div>
                  <p className='font-bold'>{item.name}</p>
                  <p>Size: {item.size}</p>
                  <p>Color: {item.color}</p>
                  <p className='font-bold'>${item.price}</p>
                </div>
              </div>
              <div className='h-full flex flex-col items-end justify-between '>
                <button
                  onClick={() => removeItemFromCart(item.id)}
                  aria-label='remove item'
                >
                  <Trash2 color='red' />
                </button>
                <div className='flex items-center gap-1 bg-gray-200 text-black py-1 px-4 rounded-full'>
                  <button
                    onClick={() => decrement(item.id)}
                    aria-label='decrement'
                  >
                    <Minus />
                  </button>
                  <div className='flex items-center justify-center  w-[30px] h-[30px] '>
                    {item.quantity}
                  </div>
                  <button
                    onClick={() => increment(item.id)}
                    aria-label='increment'
                  >
                    <Plus />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Cart
