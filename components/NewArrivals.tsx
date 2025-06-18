import React from 'react'
import data from '@/data/newArrivals.json'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

const NewArrivals = () => {
  return (
    <div className='w-full flex flex-col items-center justify-start gap-4'>
      <h1 className='w-full text-center text-3xl font-bold uppercase'>
        New Arrivals
      </h1>
      <div
        className='w-full grid grid-cols-4 gap-4 px-16
       max-lg:grid-cols-2 max-lg:px-4'
      >
        {data.map((item) => (
          <Card key={item.id}>
            <Link href={`/product/${item.id}`}>
              <CardHeader className='flex justify-center'>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={295}
                  height={298}
                  className='rounded-2xl '
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
      <Link
        href='/shop'
        className='text-background   bg-primary hover:bg-primary/80 transition-all duration-200  w-[210px] max-lg:w-[150px] h-[52px] max-lg:h-[42px] flex items-center justify-center gap-2 rounded-full '
      >
        View All
      </Link>
    </div>
  )
}

export default NewArrivals
