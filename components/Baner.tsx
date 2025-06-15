import Image from 'next/image'
import Link from 'next/link'


const Baner = () => { 
  return (
     <div className='w-full grid grid-cols-2 max-lg:grid-cols-1 gap-0 px-16 max-lg:px-0 '>
        <div className='  px-8 pt-12 flex flex-col items-start  justify-start gap-6  '>
          <h1 className='w-full text-5xl max-lg:text-3xl  font-bold '>
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p>
            Browse though our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style .
          </p>
          <Link
            href='/shop'
            className='text-background   bg-primary hover:bg-primary/80 transition-all duration-200  w-[210px] max-lg:w-full h-[52px] flex items-center justify-center gap-2 rounded-full'
          >
            Shop Now
          </Link>
          <div className='w-full flex flex-wrap items-center justify-between gap-8 max-lg:justify-center'>
            <div className='flex flex-col gap-2'>
              <div className='text-3xl max-lg:text-2xl font-bold'>200+</div>
              <p>International Brands</p>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='text-3xl max-lg:text-2xl font-bold'>2,000+</div>
              <p>High-Quality Products</p>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='text-3xl max-lg:text-2xl font-bold'>30,000+</div>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>

        <div className='relative'>
          <Image
            src='/images/rectangle2.png'
            width={772}
            height={663}
            alt='rectangle'
          />

          <Image
            src='/images/vector1.png'
            alt='vector'
            width={104}
            height={104}
            className='absolute top-10 right-10 '
          />
          <Image
            src='/images/vector.png'
            alt='vector'
            width={56}
            height={56}
            className='absolute top-40 right-115 max-lg:right-100 '
          />
        </div>
      </div>
  )
}

export default Baner