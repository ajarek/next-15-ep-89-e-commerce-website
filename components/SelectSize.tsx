'use client'
import React from 'react'
import { Input } from './ui/input'
import { Label } from './ui/label'

const SelectSize = () => {
  const [size, setSize] = React.useState('')

  return (
    <div className='flex flex-col items-start justify-start gap-2'>
      <h1>Choose Size</h1>
      <div className='flex items-center gap-4'>
        <Label
          htmlFor='small'
          className=''
        >
          <span
            className={` w-20 h-8 flex items-center justify-center  text-center rounded-full ${
              size === 'Small'
                ? 'bg-primary text-background'
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
          />
        </Label>
        <Label
          htmlFor='medium'
          className=''
        >
          <span
            className={` w-20 h-8 flex items-center justify-center  text-center rounded-full ${
              size === 'Medium'
                ? 'bg-primary text-background'
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
          />
        </Label>
        <Label
          htmlFor='large'
          className=''
        >
          <span
            className={` w-20 h-8 flex items-center justify-center  text-center rounded-full ${
              size === 'Large'
                ? 'bg-primary text-background'
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
          />
        </Label>
        <Label
          htmlFor='x-large'
          className=''
        >
          <span
            className={` w-20 h-8 flex items-center justify-center  text-center rounded-full ${
              size === 'X-Large'
                ? 'bg-primary text-background'
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
          />
        </Label>
      </div>
    </div>
  )
}

export default SelectSize
