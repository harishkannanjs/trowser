import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SocialIcons from './SocialsIcons'

const footerLinks1 = [
  {
    name: 'Home',
    href: '/#home'
  },
  {
    name: 'Features',
    href: '/#features'
  },
  {
    name: 'Download',
    href: '/#download'
  },
  {
    name: 'Contact',
    href: '/#contact'
  }
]

function Footer() {
  return (
    <footer id='contact' className='bg-black px-8 py-4'>
      <div className='flex flex-col md:flex-row justify-between'>
        <div>
          <div className='flex items-center'>
            <Image
              src={'/logo1.webp'}
              height={200}
              width={200}
              alt='Logo'
            />
          </div>
        </div>
        <div className='mt-8 md:mt-12 flex justify-start md:mr-16'>
          <ul>
            {
              footerLinks1.map((l, i) => (
                <li key={i} className='font-medium my-8 w-max rounded-full'>
                  <Link href={l.href} className='peer'>{l.name}</Link>
                  <div className='h-0.5 rounded-4xl w-0 bg-white peer-hover:w-full transition-all' />
                </li>
              ))
            }
          </ul>
        </div>
      </div>
      <div className='flex flex-col-reverse md:flex-row items-center md:justify-between md:mx-8 mt-8 md:mt-40'>
        <p className='text-nowrap'>Copyright &copy; 2025 Miraweb. All rights are reserved.</p>
        <SocialIcons iconSize='28' github='#' twitter='#' />
      </div>
    </footer>
  )
}

export default Footer
