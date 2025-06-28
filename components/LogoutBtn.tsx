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
      className='bg-red-500 w-6 h-6 rounded-sm flex justify-center items-center secondary-foreground  transition-all delay-200    text-white'
      aria-label='Wyloguj'
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            {' '}
            <LogOut
              size={18}
              strokeWidth={1}
              aria-label='Wyloguj'
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
