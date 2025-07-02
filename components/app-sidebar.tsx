import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from '@/components/ui/sidebar'
import { ChevronRight, ChevronUp, SlidersVertical } from 'lucide-react'
import Link from 'next/link'
import SelectPrice from './SelectPrice'
import SelectColor from './SelectColor'
import SelectSize from './SelectSize'

export function AppSidebar() {
  return (
    <Sidebar className=''>
      <SidebarHeader className='h-18 flex items-center justify-center '>
        <Link
          href='/'
          aria-label='Logo'
        >
          <h1 className='text-[22px] font-bold'>SHOP.CO</h1>
        </Link>
      </SidebarHeader>
      <SidebarContent className='px-4'>
        <div className='flex items-center justify-between '>
          <h2 className='text-xl font-semibold'>Filters</h2>
          <SlidersVertical />
        </div>
        <SidebarGroup className='flex flex-col gap-4'>
          <div className='flex items-center justify-between'>
            <Link
              href='/shop?category=t-shirts'
              aria-label='T-shirts'
            >
              T-shirts
            </Link>
            <ChevronRight />
          </div>
          <div className='flex items-center justify-between'>
            <Link
              href='/shop?category=shorts'
              aria-label='Shorts'
            >
              Shorts
            </Link>
            <ChevronRight />
          </div>
          <div className='flex items-center justify-between'>
            <Link
              href='/shop?category=shirts'
              aria-label='Shirts'
            >
              Shirts
            </Link>
            <ChevronRight />
          </div>
          <div className='flex items-center justify-between'>
            <Link
              href='/shop?category=hoodie'
              aria-label='Hoodie'
            >
              Hoodie
            </Link>
            <ChevronRight />
          </div>
          <div className='flex items-center justify-between'>
            <Link
              href='/shop?category=jeans'
              aria-label='Jeans'
            >
              Jeans
            </Link>
            <ChevronRight />
          </div>
          <div className='flex items-center justify-between'>
            <Link
              href='/shop'
              aria-label='All'
            >
              All
            </Link>
            <ChevronRight />
          </div>
        </SidebarGroup>
        <SidebarGroup>
          <div className='flex items-center justify-between'>
            <h2 className='text-xl font-semibold'>Price</h2>
            <ChevronUp />
          </div>
          <SelectPrice query={'price'} />
          <SelectColor query={'color'} />
          <SelectSize query={'size'} />
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}
