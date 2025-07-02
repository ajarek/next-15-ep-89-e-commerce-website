'use client'
import React from 'react'
import { useCartStore } from '@/store/cartStore'
import { useRouter } from 'next/navigation'
import type { Product } from '@/store/cartStore'
import { toast } from 'sonner'

const ButtonAddCart = ({
  product,
  quantity,
  label,
  className,
  color,
  size,
}: {
  product: Product
  quantity: number
  label: string
  className: string
  color: string
  size: string
}) => {
  const router = useRouter()
  const { addItemToCart, items } = useCartStore()
  return (
    <button
      onClick={() => {
        if (items.some((i) => i.id === product?.id)) {
          toast('This item is already in your cart')
          router.push('/shop')
          return
        }
        addItemToCart({
          id: Number(product?.id),
          name: product?.name || '',
          image: product?.image || '',
          size: size || 'Medium',
          color: color || 'blue',
          price: Number(product?.discount),
          quantity: Number(quantity) || 1,
        })
        toast.success('Product added to cart')
        router.push('/shop')
      }}
      aria-label='Add to cart'
      className={className}
    >
      {label}
    </button>
  )
}

export default ButtonAddCart
