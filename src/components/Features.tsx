import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'

const items = [
  {
    title: 'Invisible Shield™',
    description: 'Auto-destroy ads/trackers, encrypted DNS, and zero data logging. You are digitally invisible.',
    className: 'md:col-span-2'
  },
  {
    title: 'Feather Engine®',
    description: 'Loads pages in 1.2s, uses 50% less RAM, runs smooth on decade-old hardware.', 
    className: 'md:col-span-1',
    upcoming: true
  },
  {
    title: 'AI Co-Pilot',
    description: 'Log and categorize expenses with amount, date, and notes to monitor and analyze your spending habits.', 
    className: 'md:col-span-1'
  },
  {
    title: 'Smart Income & Expense Analytics',
    description: 'Monitor, analyze and optimize your income and expense with real-time data.', 
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
