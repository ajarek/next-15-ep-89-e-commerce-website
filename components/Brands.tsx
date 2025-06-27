'use client'

import React from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Link from 'next/link'
import brandsData from '@/data/brandsData.json'

const Brands = () => {
  const categories = [
    'All',
    'Luxury',
    'Fast Fashion',
    'Sportswear',
    'Designer',
    'Casual Wear',
  ]
  const [selectedCategory, setSelectedCategory] = React.useState('All')

  const filteredBrands =
    selectedCategory === 'All'
      ? brandsData
      : brandsData.filter((brand) => brand.category === selectedCategory)

  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-start gap-8 py-12'>
      {/* Hero Section */}
      <div className='w-full text-center space-y-4 px-4'>
        <h1 className='text-5xl max-lg:text-4xl font-bold uppercase bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent'>
          Premium Brands
        </h1>
        <p className='text-xl max-lg:text-lg text-muted-foreground max-w-2xl mx-auto'>
          Discover the world&apos;s most iconic fashion brands, from luxury
          haute couture to everyday essentials
        </p>
      </div>

      {/* Category Filter */}
      <div className='flex flex-wrap justify-center gap-3 px-4'>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full transition-all duration-300 font-medium ${
              selectedCategory === category
                ? 'bg-primary text-primary-foreground shadow-lg'
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Brands Grid */}
      <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-8 max-lg:px-4'>
        {filteredBrands.map((brand) => (
          <Card
            key={brand.id}
            className='group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border-2 bg-gradient-to-br from-card to-card/50 '
          >
            <CardHeader
              className={`bg-gradient-to-br ${brand.color} p-0 relative overflow-hidden `}
            >
              <div className='absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300' />
              <div className='relative p-8 flex flex-col items-center justify-center min-h-[200px]'>
                {/* Brand Logo Placeholder */}
                <div className='w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <span
                    className={`text-2xl font-bold ${
                      brand.textColor.includes('white')
                        ? 'text-white'
                        : brand.textColor
                    }`}
                  >
                    {brand.name.charAt(0)}
                  </span>
                </div>
                <h3
                  className={`text-2xl font-bold ${brand.textColor} text-center`}
                >
                  {brand.name}
                </h3>
                <p
                  className={`text-sm ${brand.textColor} opacity-90 text-center mt-2`}
                >
                  {brand.description}
                </p>
              </div>
            </CardHeader>

            <CardContent className='p-6 space-y-4'>
              <div className='flex justify-between items-center'>
                <span className='text-sm font-medium text-muted-foreground'>
                  Category
                </span>
                <span className='text-sm font-bold text-primary'>
                  {brand.category}
                </span>
              </div>

              <div className='flex justify-between items-center'>
                <span className='text-sm font-medium text-muted-foreground'>
                  Founded
                </span>
                <span className='text-sm font-bold'>{brand.founded}</span>
              </div>

              <div className='space-y-2'>
                <span className='text-sm font-medium text-muted-foreground'>
                  Specialty
                </span>
                <p className='text-sm text-foreground'>{brand.specialty}</p>
              </div>

              <Link
                href={`/shop?brand=${brand.name.toLowerCase()}`}
                className='w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center group-hover:shadow-lg'
              >
                Shop {brand.name}
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Call to Action */}
      <div className='w-full max-w-4xl mx-auto text-center space-y-6 px-4 py-12'>
        <h2 className='text-3xl font-bold'>
          Can&apos;t Find Your Favorite Brand?
        </h2>
        <p className='text-lg text-muted-foreground'>
          We&apos;re constantly adding new brands to our collection. Check back
          regularly or contact us for special requests.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <Link
            href='/shop'
            className='bg-primary hover:bg-primary/90 text-primary-foreground py-3 px-8 rounded-full font-medium transition-all duration-200'
          >
            Browse All Products
          </Link>
          <Link
            href='/'
            className='bg-secondary hover:bg-secondary/80 text-secondary-foreground py-3 px-8 rounded-full font-medium transition-all duration-200'
          >
            Request a Brand
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Brands
