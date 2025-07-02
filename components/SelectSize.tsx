'use client'
import React from 'react'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

interface SearchProps {
  query: string
}

const SelectSize = ({ query }: SearchProps) => {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const pathname = usePathname()
  const [size, setSize] = React.useState<string | null>('')

  React.useEffect(() => {
    setSize(searchParams.get(query) || null)
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
    setSize(term)
  }

  return (
    <div className='flex flex-col items-start justify-start gap-2'>
      <h1>Choose Size</h1>
      <div className='flex flex-wrap items-center gap-4'>
        <Label
          htmlFor='small'
          className=''
        >
          <span
            className={` w-20 h-8 flex items-center justify-center  text-center rounded-full cursor-pointer ${
              size === 'Small'
                ? 'bg-destructive text-background'
                : 'bg-gray-200 text-black'
            }`}
          >
            Small
          </span>

          <Input
            type='radio'
            name='size'
            id='small'
            className='hidden'
            value='Small'
            onChange={() => setSize('Small')}
            onClick={() => handleSearch('Small')}
          />
        </Label>
        <Label
          htmlFor='medium'
          className=''
        >
          <span
            className={` w-20 h-8 flex items-center justify-center  text-center rounded-full cursor-pointer ${
              size === 'Medium'
                ? 'bg-destructive text-background'
                : 'bg-gray-200 text-black'
            }`}
          >
            Medium
          </span>

          <Input
            type='radio'
            name='size'
            id='medium'
            className='hidden'
            value='Medium'
            onChange={() => setSize('Medium')}
            onClick={() => handleSearch('Medium')}
          />
        </Label>
        <Label
          htmlFor='large'
          className=''
        >
          <span
            className={` w-20 h-8 flex items-center justify-center  text-center rounded-full cursor-pointer ${
              size === 'Large'
                ? 'bg-destructive text-background'
                : 'bg-gray-200 text-black'
            }`}
          >
            Large
          </span>

          <Input
            type='radio'
            name='size'
            id='large'
            className='hidden'
            value='large'
            onChange={() => setSize('Large')}
            onClick={() => handleSearch('Large')}
          />
        </Label>
        <Label
          htmlFor='x-large'
          className=''
        >
          <span
            className={` w-20 h-8 flex items-center justify-center  text-center rounded-full cursor-pointer ${
              size === 'X-Large'
                ? 'bg-destructive text-background'
                : 'bg-gray-200 text-black'
            }`}
          >
            X-Large
          </span>

          <Input
            type='radio'
            name='size'
            id='x-large'
            className='hidden'
            value='x-large'
            onChange={() => setSize('X-Large')}
            onClick={() => handleSearch('X-Large')}
          />
        </Label>
      </div>
    </div>
  )
}

export default SelectSize
