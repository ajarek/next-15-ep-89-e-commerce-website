import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from '@/components/ui/sidebar'
import Link from 'next/link'

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className='h-18 flex items-center justify-center '>
        <Link href='/'>
          <h1 className='text-[22px] font-bold'>SHOP.CO</h1>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}
