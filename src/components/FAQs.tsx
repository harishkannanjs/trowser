import Image from 'next/image'
import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'

const faqs = [
  {
    trigger: 'How does Miraweb make browsing faster?  ',
    content: 'Miraweb is designed for speed, with optimizations that reduce page load times and keep your browsing smooth, even with multiple tabs open.   '
  },
  {
    trigger: 'Can I personalize how Miraweb looks and works?  ',
    content: 'Yes, Miraweb adapts to your style with customizable themes, layouts, and shortcuts, so your browser feels uniquely yours.    '
  },
  {
    trigger: 'What makes Miraweb more private than other browsers?',
    content: 'We block invasive trackers by default and never collect your browsing history, ensuring your data stays private and secure.  '
  },
  {
    trigger: 'How does the AI in Miraweb help me?  ',
    content: 'Miraweb’s AI simplifies tasks—like finding information or organizing tabs—by learning your habits and anticipating what you need.   '
  },
  {
    trigger: 'Is Miraweb good for gaming or streaming?  ',
    content: 'Absolutely. Miraweb enhances gaming and video streaming with smoother performance and fewer interruptions.    '
  },
  {
    trigger: "How often does Miraweb update?  ",
    content: "We regularly improve Miraweb with new features and security updates, keeping your browsing experience fresh and protected.  "
  }
]

function FAQs() {
  return (
    <div className='bg-black'>
      <div className='max-w-7xl mx-auto px-8 py-16'>
        <div className='flex items-start flex-col md:flex-row md:gap-24 gap-8'>
          <div className='md:w-1/2'>
            <h1 className='bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-white md:text-6xl text-3xl font-sans font-semibold tracking-tight mb-6'>Why Mirweb?</h1>
            <p className='text-lg text-neutral-300'>Your data isn't for sale — it's your kingdom. Miraweb keeps it that way.</p>
          </div>

          <div className='md:w-1/2'>
            <Accordion type='single' collapsible className='w-full'>
              {
                faqs.map((f, i) => (
                  <AccordionItem value={`item-${i}`} key={i}>
                    <AccordionTrigger>{f.trigger}</AccordionTrigger>
                    <AccordionContent>{f.content}</AccordionContent>
                  </AccordionItem>
                ))
              }
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQs