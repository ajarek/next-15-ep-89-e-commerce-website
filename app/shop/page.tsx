import React from 'react'
import dataNewArrivals from '@/data/newArrivals.json'
import dataTopSelling from '@/data/topSelling.json'
import dataOther from '@/data/other.json'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

const Shop = async ({
  searchParams,
}: {
  searchParams: Promise<{
    category: string
    price: string
    color: string
    size: string
    name: string
  }>
}) => {
  const allProducts = [...dataNewArrivals, ...dataTopSelling, ...dataOther]
  const { category, price, color, size, name } = (await searchParams) || {}
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-start py-4 gap-4 px-16 max-lg:px-4  '>
      <h1 className='w-full text-2xl text-links font-semibold'>Casual</h1>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-8 max-lg:px-4 '>
        {allProducts
          .filter((item) =>
            name ? item.name.toLowerCase().includes(name.toLowerCase()) : true
          )
          .filter((item) => (category ? item.category === category : true))
          .filter((item) =>
            price ? Number(item.price) <= Number(price) : true
          )
          .filter((item) => (color ? item.color === color : true))
          .filter((item) => (size ? item.size === size : true))
          .map((item) => (
            <Card key={item.id}>
              <Link
                href={`/product?id=${item.id}`}
                aria-label='Product detail'
              >
                <CardHeader className='flex justify-center mb-4'>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={295}
                    height={298}
                    className='rounded-2xl '
                    priority
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle>{item.name}</CardTitle>
                  <CardDescription>{item.ranking}</CardDescription>
                  <div className='flex items-center gap-4 text-xl '>
                    <p className='font-bold '>${item.discount}</p>
                    <p className='line-through'>${item.price}</p>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
      </div>
    </div>
  )
}

export default Shop
