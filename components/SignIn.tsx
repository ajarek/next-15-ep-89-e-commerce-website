import { signIn } from '@/app/api/auth/auth'
import { Input } from './ui/input'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import { Fingerprint } from 'lucide-react'

const SignIn=()=> {
  return (
    <div className='w-full flex flex-col items-center justify-center gap-6 p-6'>
      <div className='w-full flex flex-col items-start'>
        <h1 className='text-3xl font-bold text-primary'>Welcome Back</h1>
        <p>Hello there, sign in to continue</p>
      </div>
      <div>
        <Image
          src='/images/Illustration.png'
          alt='Illustration'
          width={213}
          height={165}
        />
      </div>
      <form
        action={async (formData) => {
          'use server'
          const email = formData.get('email') as string
          const password = formData.get('password') as string
          try {
            await signIn('credentials', {
              redirect: false,
              email,
              password,
            })
          } catch (error) {
            console.error(error)
          } finally {
            redirect('/shop')
          }
        }}
        className='w-full flex flex-col gap-6'
      >
        <Input
          name='email'
          type='email'
          className='mt-2'
          required
          placeholder='Email'
        />

        <Input
          name='password'
          type='password'
          className='mt-2'
          required
          placeholder='Password'
        />

        <Button
          type='submit'
          className='w-full mt-4'
          aria-label='Submit'
        >
          Login
        </Button>
      </form>
      <div className='w-full flex flex-col items-center gap-2'>
        <Fingerprint
          size={48}
          color='#281c9d'
          className=''
        />
        <p>
          Don&apos;t have an account?{' '}
          <Link
            className='text-primary font-semibold'
            href='/sign-up'
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignIn
