import { LogOut } from 'lucide-react'
import Link from 'next/link'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

const LogoutBtn = () => {
  return (
    <Link
      href='/signout'
      className='bg-red-500 p-1 rounded-full flex justify-center items-center secondary-foreground  transition-all delay-200    text-white'
      aria-label='Logout'
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            {' '}
            <LogOut
              size={26}
              strokeWidth={1}
              aria-label='Logout'
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>Logout</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </Link>
  )
}
export default LogoutBtn
