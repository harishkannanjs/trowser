import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'

const items = [
  {
    title: 'Invisible Shield™ ',
    description: 'Auto-destroy ads/trackers, encrypted DNS, and zero data logging. You are digitally invisible. ',
    className: 'md:col-span-2'
  },
  {
    title: ' Feather Engine®    ',
    description: 'Loads pages in 1.2s, uses 50% less RAM, runs smooth on decade-old hardware. ',
    className: 'md:col-span-1',
    upcoming: true
  },
  {
    title: 'AI Co-Pilot  ',
    description: 'Predicts searches, summarizes articles, and hunts deals—before you ask. ',
    className: 'md:col-span-1'
  },
  {
    title: 'Shape-Shifter UI  ',
    description: 'Drag modules anywhere, create custom shortcuts, and skin with 100+ themes. Your rules reign.  ',
    className: 'md:col-span-2',
    upcoming: true
  }
];

function Features() {
  return (
    <section id='features' className='bg-black -mt-16 p-16 relative z-50 w-full'>
      <h2 className='bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-600 to-white md:text-6xl text-3xl font-sans font-semibold tracking-tight md:text-nowrap my-4'> Features</h2>      <BentoGrid className="max-w-5xl mx-auto md:auto-rows-[10rem] my-8">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            image={item.image}
            className={item.className}
          />
        ))}
      </BentoGrid>
    </section>
  )
}

export default Features
