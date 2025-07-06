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
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const childVariant = {
    initial: {
      y: 50,
      opacity: 0
    },
    appear: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: 'easeInOut'
      }
    }
  }

  return (
    <section id="hero">
    <motion.div
      variants={parentVariant}
      initial={'initial'}
      animate={'appear'}
      className='mt-44 flex flex-col items-center justify-center gap-4 md:h-[50rem]'
    >
      <motion.h2 variants={childVariant} className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-600 to-white text-4xl md:text-7xl font-sans relative z-20 font-bold tracking-tight">
        Rewriting the Rules of Browsing.
      </motion.h2>
      <motion.p variants={childVariant} className='text-neutral-300 text-center mx-4'>The browser that vanishes trackers, thinks with AI, and molds to your style — all while sipping battery. Reclaim your web. </motion.p>

      <motion.div variants={childVariant} className='md:mt-16 mt-8 relative flex justify-center items-center'>
        <div className='overflow-hidden border-2 border-white rounded-lg'>
          <Image 
            src={'/hero.webp'} 
            height={!isMobile ? 555 : 350}
            width={!isMobile ? 1080 : 350} 
            alt='Dashboard Image' 
            className='h-auto w-auto' 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-10% to-90% from-transparent to-black/80" />
        </div>
        <div className='bg-purple-500/50 h-[13rem] md:h-[33rem] md:w-[63rem] w-full absolute -z-1 blur-2xl' />
      </motion.div>
      <div className='w-full h-20 -mt-16 blur-xl relative -z-10 bg-purple-500/70' />
    </motion.div>
    </section>
  )
}

export default Hero