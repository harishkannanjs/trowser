import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SocialIcons from './SocialsIcons'

const footerLinks1 = [
  {
    name: 'Home',
    href: '/#hero'
  },
  {
    name: 'Features',
    href: '/#features'
  },
  {
    name: 'Testimonials',
    href: '/#testimonials'
  },
  {
    name: 'Get Started',
    href: '/#getstarted'
  }
]

const footerLinks2 = [
  {
    name: 'Help Center',
    href: '/'
  },
  {
    name: 'FAQs',
    href: '/#faqs'
  },
  {
    name: 'Privary Policy',
    href: '/'
  },
  {
    name: 'Terms & Conditions',
    href: '/'
  }
]

function Footer() {
  return (
    <footer className='px-8 py-4'>
      <div className='flex flex-col md:flex-row justify-between'>
        <div>
          <div className='flex items-center'>
            <Image
              src={'/Trowser_Logo.webp'}
              height={200}
              width={200}
              alt='Logo'
            />
          </div>
        <h2 className='top-10 -mt-1 md:ml-8 text-balance md:max-w-lg max-md:text-center'>The next-generation browser engineered for speed, privacy, and precision — without the clutter.</h2>
        </div>
        <div className='mt-8 md:mt-12 mx-12 flex justify-center gap-24'>
          <ul>
            {
              footerLinks1.map((l, i) => (
                <li key={i} className='my-2 w-max rounded-full'>
                  <Link href={l.href} className='peer'>{l.name}</Link>
                  <div className='h-0.5 rounded-4xl w-0 bg-white peer-hover:w-full transition-all' />
                </li>
              ))
            }
          </ul>

          <ul>
            {
              footerLinks2.map((l, i) => (
                <li key={i} className='my-2 w-max rounded-full'>
                  <Link href={l.href} className='peer'>{l.name}</Link>
                  <div className='h-0.5 rounded-4xl w-0 bg-white peer-hover:w-full transition-all' />
                </li>
              ))
            }
          </ul>
        </div>
      </div>
      <div className='flex flex-col-reverse md:flex-row items-center md:justify-between md:mx-8 mt-8 md:mt-36'>
        <p className='text-nowrap'>Copyright &copy; {new Date().getFullYear()} Trowser. All rights are reserved.</p>
        <SocialIcons iconSize='28' />
      </div>
    </footer>
  )
}

export default Footer
