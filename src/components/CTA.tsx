import Image from 'next/image'
import React from 'react'
import AnimatedButton from './AnimatedButton'
import Link from 'next/link'

function CTA() {
  return (
    <section id='getstarted' className='relative flex justify-center items-center h-80 md:my-8'>
      <div className='flex flex-col justify-center items-center'>
        <h2 className='bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-600 to-white text-4xl md:text-7xl font-sans relative z-20 font-bold tracking-tight'>The tab is not the task. <br />Trowser knows the difference.</h2>
        <Link href={'https://tally.so/r/w4Yber'} className='my-4'>
          <AnimatedButton />
        </Link>
      </div>

      <div className='h-80 mx-4 md:mx-8 rounded-lg overflow-hidden flex items-end absolute inset-0 -z-1'>
        <Image
          src={'https://framerusercontent.com/images/BbtI6X8jCcic6jyWif0eo6fnc9s.png'}
          height={200}
          width={1000}
          alt='Gradient'
          className='h-full w-full object-cover'
        />
      </div>
    </section>
  )
}

export default CTA
