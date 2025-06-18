import { Twitter,Facebook,Instagram,Github } from 'lucide-react'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='w-full flex flex-col items-center justify-start px-16 border-t'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-8'>
          {/* Shop Info */}
          <div className='space-y-4'>
            <h3 className='text-lg font-bold'>SHOP.CO</h3>
            <p className='text-sm text-gray-600 dark:text-gray-400'>
              We have clothes that suits your style and which you&apos;re proud
              to wear. From women to men.
            </p>
            <div className='flex items-center gap-4' >
              <Link
                href='https://x.com'
                className=''
                 target='_blank'
              >
                <Twitter />
              </Link> 
              <Link
                href='https://www.facebook.com'
                className=''
                 target='_blank'
              >
                <Facebook />
              </Link> 
              <Link
                href='https://www.instagram.com/'
                className=''
                 target='_blank'
              >
                <Instagram />
              </Link> 
              <Link
                href='https://github.com/'
                className=''
                target='_blank'
              >
                <Github />
              </Link> 
            </div>
          </div>

          {/* Company */}
          <div className='space-y-4'>
            <h3 className='text-lg font-bold'>COMPANY</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='#'
                  className='text-sm text-gray-600 dark:text-gray-400 hover:underline'
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-sm text-gray-600 dark:text-gray-400 hover:underline'
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-sm text-gray-600 dark:text-gray-400 hover:underline'
                >
                  Works
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-sm text-gray-600 dark:text-gray-400 hover:underline'
                >
                  Career
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div className='space-y-4'>
            <h3 className='text-lg font-bold'>HELP</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='#'
                  className='text-sm text-gray-600 dark:text-gray-400 hover:underline'
                >
                  Customer Support
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-sm text-gray-600 dark:text-gray-400 hover:underline'
                >
                  Delivery Details
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-sm text-gray-600 dark:text-gray-400 hover:underline'
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-sm text-gray-600 dark:text-gray-400 hover:underline'
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* FAQ */}
          <div className='space-y-4'>
            <h3 className='text-lg font-bold'>FAQ</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='#'
                  className='text-sm text-gray-600 dark:text-gray-400 hover:underline'
                >
                  Account
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-sm text-gray-600 dark:text-gray-400 hover:underline'
                >
                  Manage Deliveries
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-sm text-gray-600 dark:text-gray-400 hover:underline'
                >
                  Orders
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-sm text-gray-600 dark:text-gray-400 hover:underline'
                >
                  Payments
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className='my-6' />

        <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-sm text-gray-600 dark:text-gray-400'>
            Shop.co © 2025, All Rights Reserved
          </p>

          <div className='flex items-center gap-4'>
            <Link href='#'>
              <Image
                src={'/images/visa.png'}
                alt={'visa'}
                width={50}
                height={50}
              />
            </Link>
            <Link href='#'>
               <Image
                src={'/images/mastercard.png'}
                alt={'mastercard'}
                width={50}
                height={50}
              />
            </Link>
            <Link href='#'>
               <Image
                src={'/images/paypal.png'}
                alt={'paypal'}
                width={50}
                height={50}
              />
            </Link>
            <Link href='#'>
             <Image
                src={'/images/pay.png'}
                alt={'pay'}
                width={50}
                height={50}
              />
            </Link>
            <Link href='#'>
             <Image
                src={'/images/google-pay.png'}
                alt={'google-pay'}
                width={50}
                height={50}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
