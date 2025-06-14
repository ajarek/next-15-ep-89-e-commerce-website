import * as React from 'react'
import Link from 'next/link'
import { Input } from './ui/input'
import { Search, ShoppingCart, User } from 'lucide-react'
import MobileNav from './MobileNav'
import { ModeToggle } from './ModeToggle'

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

const Navbar = () => {
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

        <div className='relative'>
          <Input
            type='search'
            className='h-[48px] w-full rounded-full bg-secondary px-12'
          />
          <Search
            className='absolute left-4 top-1/2 -translate-y-1/2 '
            size={24}
          />
        </div>

        <div className='flex flex-row items-center gap-4'>
          <Link
            aria-label='Koszyk'
            href='/cart'
            className='relative w-fit flex items-center justify-center text-red-500`'
          >
            <ShoppingCart size={24} />
            <span className='absolute -top-1 -right-1  text-xs bg-red-600 text-white rounded-full w-4 h-4 flex items-center justify-center'>
              0
            </span>
          </Link>
          <Link href='/register'>
            <User size={24} />
          </Link>
          
        </div>

        <div className=' lg:hidden'>
          <MobileNav />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
