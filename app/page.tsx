import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='w-full min-h-[calc(100vh-72px)] flex flex-col items-center justify-start '>
      <div className='relative  '>
        <Image
          src='/images/rectangle2.png'
          width={1440}
          height={663}
          alt='rectangle'
        />
        <div className='absolute top-0 left-0 w-1/2 px-8 pt-24 flex flex-col items-start justify-start gap-6 text-black '>
          <h1 className='text-5xl font-bold '>
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p>
            Browse though our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style .
          </p>
          <Link
            href='/shop'
            className='text-white bg-black w-[210px] h-[52px] flex items-center justify-center gap-2 rounded-full'
          >
            Shop Now
          </Link>
          <div className='w-full flex items-center justify-between'>
            <div className='flex flex-col gap-2'>
              <div className='text-3xl font-bold'>200+</div>
              <p>International Brands</p>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='text-3xl font-bold'>2,000+</div>
              <p>High-Quality Products</p>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='text-3xl font-bold'>30,000+</div>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>
        <Image src='/images/vector1.png' alt='vector' width={104} height={104} className='absolute top-20 right-20 '  />
        <Image src='/images/vector.png' alt='vector' width={56} height={56} className='absolute top-80 right-140 ' />
      </div>
    </div>
  )
}
