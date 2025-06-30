import * as React from 'react'
import Link from 'next/link'
import {  ShoppingCart, User } from 'lucide-react'
import MobileNav from './MobileNav'
import { ModeToggle } from './ModeToggle'
import LengthCart from './LengthCart'
import SelectName from './SelectName'
import { auth } from '@/app/api/auth/auth'
import LogoutBtn from './LogoutBtn'
const components: { title: string; href: string }[] = [
  {
    title: 'Shop',
    href: '/shop',
  },
  {
    title: 'On Sale',
    href: '/on-sale',
  },
  {
    title: 'New Arrivals',
    href: '/new-arrivals',
  },
  {
    title: 'Brands',
    href: '/brands',
  },
]

const Navbar = async () => {
   const session = await auth()
   console.log(session)
  return (
    <header className=' h-18 flex items-center  px-25 max-lg:px-4 border-b bg-background  lg:border-none  '>
      <nav className='w-full flex  items-center justify-between gap-4 '>
        <Link href='/'>
          <h1 className='text-[22px] font-bold'>SHOP.CO</h1>
        </Link>

        <div className='flex flex-row items-center text-xl  gap-4 max-lg:hidden'>
          {components.map((component) => (
            <Link
              key={component.title}
              href={component.href}
               className='hover:underline underline-offset-4 transition-all duration-300  '

            >
              {component.title}
            </Link>
          ))}
          <ModeToggle />
        </div>
          <SelectName query={'name'} />
        

        <div className='flex flex-row items-center gap-4'>
          <Link
            aria-label='Koszyk'
            href='/cart'
            className='relative w-fit flex items-center justify-center text-red-500`'
          >
           <div className='relative  '>
                  <ShoppingCart
                    size={26}
                    strokeWidth={1}
                    aria-label='Cart'
                  />
                  <LengthCart />
                </div>
          </Link>
          {session ? (
            <LogoutBtn />
          ) : (
            <Link
              href='/sign-in'
              className='bg-primary text-background hover:bg-primary/80 transition-all duration-200 p-1 rounded-full'
            >
               <User size={24} />
            </Link>
          )}
         
          
        </div>

        <div className=' lg:hidden'>
          <MobileNav />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
