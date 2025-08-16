'use client'

import { useIsMobile } from '@/hooks/use-mobile'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

function Hero() {
  const isMobile = useIsMobile();

  const parentVariant = {
    appear: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const childVariant = {
    initial: {
      y: 50,
      opacity: 0,
      filter: 'blur(10px)'
    },
    appear: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.4,
        ease: 'easeInOut'
      }
    }
  }

  return (
    <motion.div
      variants={parentVariant}
      initial={'initial'}
      animate={'appear'}
      className='mt-30 md:mt-34 mb-12 md:mb-20 flex flex-col items-center justify-center gap-4 md:h-[35rem]'
    >
      <motion.h2 variants={childVariant} className="mt-15 bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-600 to-white text-4xl md:text-7xl font-sans relative z-20 font-bold tracking-tight">
        Browse Beyond.<br /> Faster. Smarter. Simpler.
      </motion.h2>
      <motion.p variants={childVariant} className='text-neutral-300 text-center mx-4'>The next-generation browser engineered for speed, privacy, and precision — without the clutter.</motion.p>

      <motion.div variants={childVariant} className='md:mt-16 mt-8 relative flex justify-center items-center'>
        <div className='overflow-hidden border-2 border-white rounded-lg'>
          <Image src={'/hero.webp'} height={555} width={!isMobile ? 1080 : 350} alt='Dashboard Image' className='h-auto w-auto' />
          <div className="absolute inset-0 bg-gradient-to-b from-10% to-90% from-transparent to-black/80" />
        </div>
        <div className='bg-purple-500/50 h-[13rem] md:h-[33rem] md:w-[63rem] w-full absolute -z-1 blur-2xl' />
      </motion.div>
      <div className='w-full h-20 -mt-16 blur-xl relative -z-10 bg-purple-500/70' />
    </motion.div>
  )
}

export default Hero
