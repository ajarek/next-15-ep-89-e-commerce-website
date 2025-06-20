import React, {use} from 'react' // eslint-disable-line no-unused-vars
import dataNewArrivals from '@/data/newArrivals.json'
import dataTopSelling from '@/data/topSelling.json'
import Image from 'next/image'
import SelectColor from '@/components/SelectColor'
import SelectSize from '@/components/SelectSize'
import SelectQuantity from '@/components/SelectQuantity'
import ButtonAddCart from '@/components/ButtonAddCart'
import type {Product} from '@/store/cartStore'

const ProductDetail = ({searchParams}: {searchParams: Promise<{ id: string,  }>}) => {
  const { id } = use(searchParams)
  const allProducts = [...dataNewArrivals, ...dataTopSelling]
  const product = allProducts.find((item) => item.id === Number(id)
  ) as Product
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-start py-4 gap-4 px-16  '>
      <div className='grid grid-cols-2 max-lg:grid-cols-1 gap-4'>
        <div className='relative flex items-center justify-center rounded-lg overflow-hidden'>
          <Image
            src={product?.image ||''}
            alt={product?.name || ''}
            width={590}
            height={596}
          />
        </div>
        <div className='flex flex-col items-start justify-start gap-6 p-4'>
          <h1 className='text-2xl font-bold uppercase'>
            ProductDetail {product?.name}
          </h1>
          <p>{product?.ranking}</p>
          <div className='flex items-center gap-4 text-2xl '>
            <p className=' font-bold'>${product?.discount}</p>
            <p className='line-through'>${product?.price}</p>
            <p className='text-lg text-red-500 px-4 py-0 bg-red-200 rounded-full'>-{(100-(Number(product?.discount)/Number(product?.price))*100).toFixed(0)}%</p>
            
          </div>
          <p>Category: {product?.category}</p>
        <SelectColor/>
        <SelectSize/>
        <div className='w-full flex items-center gap-4'>
        <SelectQuantity  query='quantity'/>
        <ButtonAddCart
            product={product}
            quantity={1}
            label='Add to cart'
            className='w-full bg-primary text-background hover:bg-primary/80 transition-all duration-200  h-9 flex items-center justify-center gap-2 rounded-full'
            color={'red'}
            size={'Medium'}
          />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
