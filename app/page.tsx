import Baner from '@/components/Baner'
import BrowseStyle from '@/components/BrowseStyle'
import Mark from '@/components/Mark'
import NewArrivals from '@/components/NewArrivals'
import TopSelling from '@/components/TopSelling'
import Customers from '@/components/Customers'

export default function Home() {
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-start pb-4 gap-4 '>
      <Baner />
      <Mark />
      <NewArrivals />
      <TopSelling />
      <BrowseStyle />
      <Customers />
    </div>
  )
}
