import * as React from 'react'
import Link from 'next/link'
import { Input } from './ui/input';
import { Search } from 'lucide-react';


const components: { title: string; href: string;  }[] = [
  {
    title: 'Shop',
    href: '/shop',
  },
  {
    title: 'On Sale',
    href: '/on-sale'
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
    <header className=' h-18 flex items-center  px-25 border-b '>
      <nav className='w-full flex  items-center justify-between  '>
      


        <Link href='/'>
          <h1 className='text-[22px] font-bold'>SHOP.CO</h1>
        </Link>

        

        <div className='flex flex-row items-center  gap-4   '>
          {components.map((component) => (
            <Link
              key={component.title}            
              href={component.href}
              className=''
            >
              {component.title}
            </Link>
          ))}
        </div>
        <div className='relative'>
          <Input type='search' className='h-[48px] w-[480px] rounded-full bg-secondary px-12'/>
          <Search className='absolute left-4 top-1/2 -translate-y-1/2 ' size={24} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
