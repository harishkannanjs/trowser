import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'

const faqs = [
  {
    trigger: "What makes Trowser different from other browsers?",
    content: "Trowser is built from the ground up to eliminate digital noise. It’s privacy-first, lightning-fast, and designed to stay out of your way — no bloated menus, no distractions, just pure focus and intelligent performance."
  },
  {
    trigger: "Is Trowser really faster?",
    content: "Yes. Trowser uses a streamlined rendering engine optimized for real-world speed — not just benchmarks. It preloads smartly, caches selectively, and stays light to keep things snappy."
  },
  {
    trigger: "How does Trowser protect my privacy?",
    content: "Privacy isn't an option — it's the foundation. Trowser comes with always-on zero-trace mode, automatic tracker blocking, and no hidden data harvesting. Your browsing is your business."
  },
  {
    trigger: "What is Trowser’s AI-powered tab system?",
    content: "Think of it as your second brain for browsing. Trowser intelligently prioritizes, organizes, and surfaces tabs based on your behavior — so you spend less time hunting, and more time doing."
  },
  {
    trigger: "Who is Trowser for?",
    content: "Trowser is for thinkers, builders, minimalists, and makers — anyone who values speed, clarity, and control in their digital environment."
  },
  {
    trigger: "Can I use Trowser now?",
    content: "Trowser is currently in private beta. We’re onboarding early users in waves. Join the waitlist to be among the first to try it."
  }
]

function FAQs() {
  return (
    <section id='faqs' className='p-16'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-12'>
          <h1 className='md:text-6xl text-3xl font-sans font-semibold tracking-tight'>Why Trowser?</h1>
          <p className='text-lg text-neutral-300 mt-4'>Explore what sets Trowser apart in a sea of sameness.</p>
        </div>
        
        <div className='flex justify-center'>
          <Accordion type='single' collapsible className='max-w-4xl w-full'>
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
    </section>
  )
}

export default FAQs
