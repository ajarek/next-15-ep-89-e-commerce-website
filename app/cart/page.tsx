'use client'
import React from 'react'
import { useCartStore } from '@/store/cartStore'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { Minus, Plus, Trash2, ArrowRight } from 'lucide-react'
import PromoCode from '@/components/PromoCode'
import Link from 'next/link'

const Cart = () => {
  const { items, increment, decrement, removeItemFromCart, total, removeAll } =
    useCartStore()
  const router = useRouter()

  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-start py-4 gap-4 px-16 max-lg:px-4   '>
      <h1 className='w-full  text-3xl font-bold uppercase'>Your Cart</h1>
      {items.length>0 ?
      <div className='w-full grid grid-cols-2 max-lg:grid-cols-1 gap-6 '>
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
                <div className=''>
                  <p className='font-bold '>{item.name}</p>
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
        <div>
          <div className='flex flex-col items-start justify-start gap-4'>
            <h1 className='text-2xl font-semibold'>Order Summary</h1>
            <div className='flex items-center justify-between w-full text-xl'>
              <p>Subtotal</p>
              <p>${total().toFixed(2)}</p>
            </div>
            <div className='flex items-center justify-between w-full text-xl'>
              <p>Discount (-20%)</p>
              <p className='text-red-500'>-${(total() * 0.2).toFixed(2)}</p>
            </div>
            <div className='flex items-center justify-between w-full text-xl'>
              <p>Delivery Fee</p>
              <p className=''>$15.00</p>
            </div>
            <div className='flex items-center justify-between w-full text-2xl'>
              <p className='font-bold'>Total</p>
              <p className='font-bold'>${(total() * 0.8 + 15).toFixed(2)}</p>
            </div>
            <PromoCode/>
            <Button
              onClick={() => router.push('/checkout')}
              aria-label='checkout'
              className='w-full  hover:bg-primary/80 h-12 rounded-full mt-4'
            >
              Go to Checkout <ArrowRight size={28} />
            </Button>
           
          </div>
        </div>
      </div>
       :(
        <>
       <div className='text-red-500 text-2xl font-semibold'>Your cart is empty</div>
       <Link  href='/' className='bg-primary text-background hover:bg-primary/80 transition-all duration-200 py-2 px-6 rounded-full'>Go to shop</Link>
       </>
       )}
    </div>
  )
}

export default Cart
