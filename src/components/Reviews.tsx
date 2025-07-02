'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState } from 'react'

type Review = {
  content: string,
  user: string
}

const reviews: Review[] = [
  {
    content: "I switched to Miraweb after realizing how much of my family's data was being harvested. Now I can browse without feeling like someone's peeking over my shoulder. Finally, peace of mind!",
    user: "Sarah K., Freelance Writer"
  },
  {
    content: "Ads were ruining my workflow—constant interruptions when researching samples. Miraweb blocks them all by default. It’s like someone finally hit mute on the internet.",
    user: "Javier M., Music Producer"
  },
  {
    content: "Slow browsers + sketchy hotel Wi-Fi = nightmare. Miraweb loads pages instantly, even on weak connections. Now I can actually get work done from the beach.",
    user: "Priya T., Digital Nomad"
  },
  {
    content: "My MacBook used to die in 3 hours. Switched to Miraweb and now I survive back-to-back lectures without hunting for outlets. Lifesaver!  .",
    user: "Marcus L., College Senior"
  },
  {
    content: "I literally have 70+ tabs open right now, and my laptop isn’t screaming in protest. Miraweb handles my chaos like a champ. Where has this been all my life?",
    user: "Nina R., Marketing Director"
  },
  {
    content: "Most browsers feel like a cluttered toolbox. Miraweb is clean, intuitive, and just… pleasant. It’s the Apple of browsers—minimal but powerful.",
    user: "Oliver W., UI/UX Designer"
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
        <h1 className='md:text-6xl text-3xl font-sans font-semibold tracking-tight text-wrap max-md:text-center max-w-sm'>Hear from our Users</h1>
        <p className='my-4 text-gray-300 text-wrap max-md:text-center'>See how Miraweb is changing the way how people use their browsing.</p>
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
        <p className='text-muted-foreground text-sm mt-8'>* These testimonials are based on intended use. Real user feedback coming soon!</p>
        <div className='md:hidden flex justify-center gap-4 mt-12 relative z-50'>
          <div onClick={decOffset} className='border-white/[0.2] rounded-lg p-2 border flex justify-center items-center'><ChevronLeft size={28} /></div>
          <div onClick={incOffset} className='border-white/[0.2] rounded-lg p-2 border flex justify-center items-center'><ChevronRight size={28} /></div>
        </div>
      </div>
    </section>

  )
}

export default Reviews
