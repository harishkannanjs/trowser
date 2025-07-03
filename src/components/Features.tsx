import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'

const items = [
  {
    title: 'Privacy by Default',
    description: 'Auto-destroy ads/trackers, encrypted DNS, and zero data logging. You are digitally invisible.',
    className: 'md:col-span-2'
  },
  {
    title: 'Smart Tab Navigation',
    description: 'Intuitive AI declutters your workspace, automatically.', 
    className: 'md:col-span-1',
    upcoming: true
  },
  {
    title: 'Minimal Interface',
    description: 'Designed to disappear, so you can focus on what matters.', 
    className: 'md:col-span-1'
  },
  {
    title: 'Featherlight Build',
    description: 'Loads pages in 1.2s, uses 50% less RAM, runs smooth on decade-old hardware.', 
    className: 'md:col-span-2',
    upcoming: true
  }
];

function Features() {
  return (
    <section id='features' className='bg-black -mt-16 p-16 relative z-50 w-full'>
      <h2 className='md:text-6xl text-3xl font-sans font-semibold tracking-tight text-center md:text-nowrap my-4'>Features</h2>
      <BentoGrid className="max-w-5xl mx-auto md:auto-rows-[10rem] my-8">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            upcoming={item?.upcoming}
          />
        ))}
      </BentoGrid>
    </section>
  )
}

export default Features
