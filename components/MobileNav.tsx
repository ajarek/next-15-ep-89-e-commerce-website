'use client'

import { Menu } from 'lucide-react'
import Link from 'next/link'
import { ModeToggle } from './ModeToggle'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet'
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
const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu size={36} />
      </SheetTrigger>
      <SheetClose asChild>
        <SheetContent
          side='left'
          className='border-none bg-background text-foreground  shadow-none lg:hidden p-4 w-1/2 '
          aria-describedby='mobile-nav'
        >
          <SheetTitle className='text-xl font-semibold uppercase italic '>
            <Link
              href='/'
              aria-label='Stron Główna'
            >
              SHOP.CO
            </Link>
          </SheetTitle>
          <div className='flex flex-col gap-4 text-xl mt-4 '>
            {components.map((component) => (
              <Link
                key={component.title}
                href={component.href}
                className='hover:underline underline-offset-4 transition-all duration-300  '
                aria-label={component.title}
              >
                {component.title}
              </Link>
            ))}
            <ModeToggle />
          </div>
          <SheetDescription></SheetDescription>
        </SheetContent>
      </SheetClose>
    </Sheet>
  )
}

export default MobileNav
