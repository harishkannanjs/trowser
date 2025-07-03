'use client'

import React, { useState } from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useIsMobile } from '@/hooks/use-mobile'
import { AnimatePresence, motion } from 'motion/react'
import Image from 'next/image'

const navLinks = [
  {
    name: 'Home',
    href: '#home'
  },
  {
    name: 'Features',
    href: '#features'
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

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const childVariant = {
    open: {
      opacity: 1,
      y: 0
    },
    closed: {
      opacity: 0,
      y: -15
    }
  }

  const parentVariant = {
    open: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2
      }
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  }

  return (
    <motion.div
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      exit={'closed'}
      transition={{
        duration: 0.3
      }}
    >
      <motion.div
        initial={{
          y: -20,
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut'
        }}
        className='flex justify-between items-center px-4 md:px-24'
      >
        <div className='flex items-center gap-16 text-neutral-400'>
          <div className='flex items-center'>
           <div className='h-24 w-24 rounded-full'>
              <Image
                src={'/Trouser_logo.webp'}
                height={96}
                width={96}
                alt='Logo'
                className='h-full w-full object-cover'
              />
            </div>
          </div>
          <ul className='hidden md:flex gap-6 mr-24'>
            {
              navLinks.map((l, i) => (
                <li key={i}>
                  <Link href={l.href} className='peer'>{l.name}</Link>
                  <div className='h-0.5 rounded-4xl w-0 bg-white peer-hover:w-full transition-all'></div>
                </li>
              ))
            }
          </ul>
        </div>
        {
          isMobile && (
            <div>
              <div className='mr-8'>
                <Menu size={28} className={`${isOpen ? 'hidden' : ''}`} onClick={() => setIsOpen(true)} />
                <X size={28} className={`${!isOpen ? 'hidden' : ''}`} onClick={() => setIsOpen(false)} />
              </div>
            </div>
          )
        }
        <Link href={'/#'} className='hidden md:block'>
          <Button variant={'outline'}>
            Join Waitlist →
          </Button>
        </Link>
      </motion.div>
      <AnimatePresence>
        {
          isOpen && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0
              }}

              animate={{
                opacity: 1,
                height: [0, '10%', 'auto']
              }}

              transition={{
                duration: 0.3,
                ease: 'easeInOut'
              }}

              exit={{
                opacity: 0,
                height: 0
              }}
              className='bg-zinc-900 w-[95%] py-4 rounded-lg left-1/2 -translate-x-1/2 absolute z-50'
            >
              <motion.ul variants={parentVariant} className='flex flex-col justify-center items-center gap-4 p-6 text-lg'>
                {
                  navLinks.map((l, i) => (
                    <motion.li variants={childVariant} key={i}>
                      <Link href={l.href} className='peer'>{l.name}</Link>
                      <div className='h-0.5 rounded-4xl w-0 bg-white peer-hover:w-full transition-all'></div>
                    </motion.li>
                  ))
                }
              </motion.ul>
            </motion.div>
          )
        }
      </AnimatePresence>
    </motion.div>
  )
}

export default Navbar
