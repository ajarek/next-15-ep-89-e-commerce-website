import Image from 'next/image'
import React from 'react'
import { Input } from './ui/input'
import Link from 'next/link'
import { Button } from './ui/button'

const SignUpForm = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center gap-6 p-6'>
      <div className='w-full flex flex-col items-start'>
        <h1 className='text-3xl font-bold text-primary'>Welcome to us,</h1>
        <p>Hello there, create New account</p>
      </div>
      <div>
        <Image
          src='/images/vector.png'
          alt='star'
          width={213}
          height={165}
        />
      </div>
      <form
        action=''
        className='w-full flex flex-col gap-6'
      >
        <Input
          type='name'
          name='name'
          id='name'
          placeholder='name'
        />
        <Input
          type='email'
          name='email'
          id='email'
          placeholder='Email'
        />
        <Input
          type='password'
          name='password'
          id='password'
          placeholder='Password'
        />
        <div className='w-full flex items-center justify-start gap-2'>
          <input
            type='checkbox'
            name='checkbox'
            id='checkbox'
            className='transform scale-150 '
          />
          <p>
            By creating an account you agree to our{' '}
            <span className='text-primary font-semibold'>
              Term and Conditions
            </span>{' '}
          </p>
        </div>
        <Button type='submit'>Sign up</Button>
      </form>
      <div className='w-full flex flex-col items-center '>
        <p>
          Have an account?{' '}
          <Link
            className='text-primary font-semibold'
            href='/'
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignUpForm
