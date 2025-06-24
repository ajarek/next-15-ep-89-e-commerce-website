'use client'
import React from 'react'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Check } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

interface SearchProps {
  query: string
}
const check = <Check />

const SelectColor = ({ query }: SearchProps) => {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const pathname = usePathname()
  const [color, setColor] = React.useState<string | null>('')

  React.useEffect(() => {
    setColor(searchParams.get(query) || null)
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
    setColor(term)
  }

  return (
    <div className='flex flex-col items-start justify-start gap-2'>
      <h1>Select Color</h1>
      <div className='flex items-center gap-4'>
        <Label
          htmlFor='red'
          className='relative text-xl'
        >
          <span className=' w-8 h-8 bg-red-500 rounded-full'></span>
          <span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 '>
            {color === 'red' ? check : ''}
          </span>

          <Input
            type='radio'
            name='color'
            id='red'
            className='hidden'
            value='red'
            onChange={() => setColor('red')}
            onClick={() => handleSearch('red')}
          />
        </Label>
        <Label
          htmlFor='blue'
          className='relative text-xl'
        >
          <span className=' w-8 h-8 bg-blue-500 rounded-full'></span>
          <span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 '>
            {color === 'blue' ? check : ''}
          </span>

          <Input
            type='radio'
            name='color'
            id='blue'
            className='hidden'
            value='blue'
            onChange={() => setColor('blue')}
            onClick={() => handleSearch('blue')}
          />
        </Label>

        <Label
          htmlFor='green'
          className='relative text-xl'
        >
          <span className=' w-8 h-8 bg-green-500 rounded-full'></span>
          <span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 '>
            {color === 'green' ? check : ''}
          </span>

          <Input
            type='radio'
            name='color'
            id='green'
            className='hidden'
            value='green'
            onChange={() => setColor('green')}
            onClick={() => handleSearch('green')}
          />
        </Label>
      </div>
    </div>
  )
}

export default SelectColor
