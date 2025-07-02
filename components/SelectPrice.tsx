'use client'
import React from 'react'
import { Input } from './ui/input'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

interface SearchProps {
  query: string
}

const SelectPrice = ({ query }: SearchProps) => {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const pathname = usePathname()
  const [price, setPrice] = React.useState<string>('50')

  React.useEffect(() => {
    setPrice(searchParams.get(query) || '50')
  }, [searchParams, query])

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams)

    if (term) {
      params.set(`${query}`, term)
    } else {
      params.delete(`${query}`)
    }
    try {
      replace(`${pathname}?${params.toString()}`)
    } catch (error) {
      console.error('Failed to replace URL parameters:', error)
    }
    setPrice(term)
  }

  return (
    <div className='flex flex-col items-start justify-start gap-2'>
      <div className='w-full flex items-center gap-4'>
        <Input
          type='range'
          min={50}
          max={200}
          step={10}
          onChange={(e) => handleSearch(e.target.value)}
          className='w-full'
        />
      </div>
      <p>${price}</p>
    </div>
  )
}

export default SelectPrice
