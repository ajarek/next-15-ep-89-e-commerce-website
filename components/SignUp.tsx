import Image from 'next/image'
import React from 'react'
import { Input } from './ui/input'
import Link from 'next/link'
import { Button } from './ui/button'
import { addUser } from '@/lib/action'
import { redirect } from 'next/navigation'

const SignUpForm = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center gap-6 p-6'>
      <div className='w-full flex flex-col items-start'>
        <h1 className='text-3xl font-bold text-primary'>Welcome to us,</h1>
        <p>Hello there, create New account</p>
      </div>
      <div>
        <Image
          src='/images/IllustrationUp.png'
          alt='star'
          width={213}
          height={165}
        />
      </div>
      <form
        action={async (formData) => {
          'use server'

          try {
            const userData = {
              username: formData.get('username') as string,
              email: formData.get('email') as string,
              password: formData.get('password') as string,
              img:
                (formData.get('img') as string) ||
                'https://github.com/shadcn.png',
              isAdmin: false,
            }
            await addUser(userData)
          } catch (error) {
            console.error(error)
          } finally {
            redirect('/sign-in')
          }
        }}
        className='w-full flex flex-col gap-6'
      >
        <Input
          type='text'
          name='username'
          id='username'
          placeholder='Name'
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
        <Input
          type='text'
          name='img'
          id='img'
          placeholder='Image'
        />
        <Input
          type='hidden'
          name='isAdmin'
          id='isAdmin'
          value='false'
        />

        <Button
          type='submit'
          aria-label='Sign up'
        >
          Sign up
        </Button>
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
