'use client'
import { Twitter, Facebook, Instagram, Github } from 'lucide-react'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const Footer = () => {
  const pathname = usePathname()
  const hideOn = ['/shop']
  if (hideOn.includes(pathname)) {
    return null
  }
  return (
    <footer className='w-full flex flex-col items-center justify-start px-16 max-lg:px-4 border-t'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-8'>
          {/* Shop Info */}
          <div className='space-y-4'>
            <h3 className='text-lg font-bold'>SHOP.CO</h3>
            <p className='text-sm text-gray-600 dark:text-gray-400'>
              We have clothes that suits your style and which you&apos;re proud
              to wear. From women to men.
            </p>
            <div className='flex items-center gap-4'>
              <Link
                href='https://x.com'
                className=''
                target='_blank'
                aria-label='Twitter'
              >
                <Twitter />
              </Link>
              <Link
                href='https://www.facebook.com'
                className=''
                target='_blank'
                aria-label='Facebook'
              >
                <Facebook />
              </Link>
              <Link
                href='https://www.instagram.com/'
                className=''
                target='_blank'
                aria-label='Instagram'
              >
                <Instagram />
              </Link>
              <Link
                href='https://github.com/'
                className=''
                target='_blank'
                aria-label='Github'
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
                  aria-label='About'
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-sm text-gray-600 dark:text-gray-400 hover:underline'
                  aria-label='Features'
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-sm text-gray-600 dark:text-gray-400 hover:underline'
                  aria-label='Works'
                >
                  Works
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-sm text-gray-600 dark:text-gray-400 hover:underline'
                  aria-label='Career'
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
                  aria-label='Customer Support'
                >
                  Customer Support
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-sm text-gray-600 dark:text-gray-400 hover:underline'
                  aria-label='Delivery Details'
                >
                  Delivery Details
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-sm text-gray-600 dark:text-gray-400 hover:underline'
                  aria-label='Terms & Conditions'
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-sm text-gray-600 dark:text-gray-400 hover:underline'
                  aria-label='Privacy Policy'
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
                  aria-label='Account'
                >
                  Account
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-sm text-gray-600 dark:text-gray-400 hover:underline'
                  aria-label='Manage Deliveries'
                >
                  Manage Deliveries
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-sm text-gray-600 dark:text-gray-400 hover:underline'
                  aria-label='Orders'
                >
                  Orders
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-sm text-gray-600 dark:text-gray-400 hover:underline'
                  aria-label='Payments'
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
            <Link
              href='#'
              aria-label='Visa'
            >
              <Image
                src={'/images/visa.png'}
                alt={'visa'}
                width={50}
                height={50}
              />
            </Link>
            <Link
              href='#'
              aria-label='Mastercard'
            >
              <Image
                src={'/images/mastercard.png'}
                alt={'mastercard'}
                width={50}
                height={50}
              />
            </Link>
            <Link
              href='#'
              aria-label='Paypal'
            >
              <Image
                src={'/images/paypal.png'}
                alt={'paypal'}
                width={50}
                height={50}
              />
            </Link>
            <Link
              href='#'
              aria-label='Apple Pay'
            >
              <Image
                src={'/images/pay.png'}
                alt={'pay'}
                width={50}
                height={50}
              />
            </Link>
            <Link
              href='#'
              aria-label='Google Pay'
            >
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
