import Checkout from '@/components/Checkout'
import { auth } from '@/app/api/auth/auth'
import { redirect } from 'next/navigation'

export default async function CheckoutPage() {
  const session = await auth()
  if (!session) {
    redirect('/sign-in')
  }
  return <Checkout />
}
