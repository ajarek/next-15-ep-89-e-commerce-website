import data from '@/data/customers.json'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import React from 'react'

const Customers = () => {
  return (
    <div className='w-full flex flex-col items-center justify-start gap-4 px-16'>
      <h1 className='w-full text-center text-3xl font-bold uppercase'>
        What our customers say
      </h1>
      <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-[960px]"
    >
      <CarouselContent>
        {data.map((item) => (
          <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col aspect-square items-start justify-start p-6 gap-4 select-none cursor-grab">
                  <span className="text-xl font-semibold">{item.rating}</span>
                  <span className="text-xl font-semibold">{item.name}</span>
                  <span className="text-xl ">{item.description}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
  )
}

export default Customers
