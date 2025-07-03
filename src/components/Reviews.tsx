'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState } from 'react'

type Review = {
  content: string,
  user: string
}

const reviews: Review[] = [
  {
    content: "Modern browsers feel like operating systems. Trowser feels like a tool — and that’s the point.",
    user: "Morgan Wallen, Performance Lead"
  },
  {
    content: "Our beta testers told us it feels like reading in a quiet room. That’s exactly what we hoped for.",
    user: "Sibhi .B, Privacy & Security Engineer"
  },
  {
    content: "We didn’t want to build just another browser. We wanted to build less — so you could do more.",
    user: "Krishna Prasath R., Lead Systems Architect"
  },
  {
    content: "Trowser is designed like an instrument, not a product — simple, precise, and ready to get out of your way.",
    user: "Harish Kannan J.S., UX Engineer"
  },
]

const ReviewCard = ({ review, idx }: { review: Review, idx: number }) => {
  return (
    <div key={idx} className='h-[23em] min-w-[14em] bg-neutral-950 rounded-lg border border-white/[0.2] p-8 flex flex-col gap-4 justify-center items-center'>
      <p>{review.content}</p>
      <p className='ml-auto text-right'>— {review.user}</p>
    </div>
  )
}

const Reviews = () => {
  const [offset, setOffset] = useState(0);

  const incOffset = () => setOffset(offset => {
    if(offset > 8) return offset;
    return offset+1
  });

  const decOffset = () => setOffset(offset => {
    if(offset <= 0) return offset;

    return offset-1
  });

  return (
    <section id='testimonials'className='md:mt-44 md:mb-24 my-16 md:mx-20 mx-8 flex flex-col md:flex-row md:gap-24 gap-8'>
      <div className='text-nowrap'>
        <h1 className='md:text-6xl text-3xl font-sans font-semibold tracking-tight text-wrap max-md:text-center max-w-sm'>Hear from Our Developers</h1>
        <p className='my-4 text-gray-300 text-wrap max-md:text-center'>The future of browsing, built by those who dream beyond the tab.</p>
        <div className='hidden md:flex gap-4 ml-4 mt-8'>
          <div onClick={decOffset} className='border-white/[0.2] rounded-lg p-1 border cursor-pointer'><ChevronLeft /></div>
          <div onClick={incOffset} className='border-white/[0.2] rounded-lg p-1 border cursor-pointer'><ChevronRight /></div>
        </div>
      </div>
      <div className='md:w-[70vw] overflow-hidden relative'>
        <div className='flex gap-8 transition-transform duration-300 ease-in-out' style={{ transform: `translateX(-${offset * 20}%)` }}>
          {
            reviews.map((r, i) => (
              <ReviewCard review={r} key={i} idx={i} />
            ))
          }
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-60% to-100% from-transparent to-black/80" />
        <p className='text-muted-foreground text-sm mt-8'>*These early insights come straight from the creators behind Trowser. User reviews will be published following the public launch.</p>
        <div className='md:hidden flex justify-center gap-4 mt-12 relative z-50'>
          <div onClick={decOffset} className='border-white/[0.2] rounded-lg p-2 border flex justify-center items-center'><ChevronLeft size={28} /></div>
          <div onClick={incOffset} className='border-white/[0.2] rounded-lg p-2 border flex justify-center items-center'><ChevronRight size={28} /></div>
        </div>
      </div>
    </section>

  )
}

export default Reviews
