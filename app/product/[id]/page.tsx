import React from 'react'
import dataNewArrivals from '@/data/newArrivals.json'
import dataTopSelling from '@/data/topSelling.json'
import Image from 'next/image'
import SelectColor from '@/components/SelectColor'

type Product = (typeof dataNewArrivals)[0]

const ProductDetail = ({ params }: { params: { id: string } }) => {
  const allProducts = [...dataNewArrivals, ...dataTopSelling]
  const product = allProducts.find(
    (item) => item.id === Number(params.id)
  ) as Product
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-start py-4 gap-4 px-16  '>
      <div className='grid grid-cols-2 max-lg:grid-cols-1 gap-4'>
        <div className='relative flex items-center justify-center rounded-lg overflow-hidden'>
          <Image
            src={product.image}
            alt={product.name}
            width={590}
            height={596}
          />
        </div>
        <div className='flex flex-col items-start justify-start gap-4 p-4'>
          <h1 className='text-2xl font-bold uppercase'>
            ProductDetail {product.name}
          </h1>
          <p>{product.ranking}</p>
          <div className='flex items-center gap-4 text-2xl '>
            <p className=' font-bold'>${product.discount}</p>
            <p className='line-through'>${product.price}</p>
            <p className='text-xl text-red-500 px-4 py-1 bg-red-200 rounded-full'>-{(100-(+product.discount/+product.price)*100).toFixed(0)}%</p>
            
          </div>
          <p>Category: {product.category}</p>
        <SelectColor/>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
