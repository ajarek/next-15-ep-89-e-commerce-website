'use client'
import Image from 'next/image'
import React from 'react'
import { Input } from './ui/input'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import { Button } from './ui/button'
import { Fingerprint } from 'lucide-react'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const signInSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

type SignInFormValues = z.infer<typeof signInSchema>

const SignIn = () => {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
  })
  const onSubmit = async (data: SignInFormValues) => {
    try {
      const result = await signIn('credentials', {
        email: data.email,
        password: data.password,
        callbackUrl: '/dashboard',
      })
      if (result?.error) {
        console.error('Error:', result?.error)
      }
      if (result?.ok) {
        router.push('/dashboard') // Redirect to the dashboard page
      }
    } catch (error) {
      console.error('Error:', error)
    }
    reset()
  }
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
        onSubmit={handleSubmit(onSubmit)}
        className='w-full flex flex-col gap-6'
      >
        <div>
          <Input
            type='email'
            id='email'
            placeholder='Email'
            {...register('email')}
          />
          {errors.email && (
            <p className='text-red-500 text-sm'>{errors.email.message}</p>
          )}
        </div>
        <div>
          <Input
            type='password'
            id='password'
            placeholder='Password'
            {...register('password')}
          />
          {errors.password && (
            <p className='text-red-500 text-sm'>{errors.password.message}</p>
          )}
        </div>
        <Link
          href='/forgot-password'
          className='self-end'
        >
          Forgot your password ?
        </Link>
        <Button type='submit'>Sign in</Button>
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
