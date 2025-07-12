
'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react'

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Modern browsers feel like operating systems. Trowser feels like a tool — and that's the point.",
    name: "Morgan Wallen",
    designation: "Performance Lead"
  },
  {
    quote: "Our beta testers told us it feels like reading in a quiet room. That's exactly what we hoped for.",
    name: "Sibhi Balamurugan",
    designation: "Privacy & Security Engineer"
  },
  {
    quote: "We didn't want to build just another browser. We wanted to build less — so you could do more.",
    name: "Krishna Prasath R",
    designation: "Lead Systems Architect"
  },
  {
    quote: "Trowser is designed like an instrument, not a product — simple, precise, and ready to get out of your way.",
    name: "Harish Kannan J.S.",
    designation: "UX Engineer"
  },
];

const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const quoteRef = useRef<HTMLParagraphElement>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const animateWords = () => {
    if (!quoteRef.current) return;

    const words = quoteRef.current.querySelectorAll('.word');
    
    // Reset all words to initial state
    words.forEach((word) => {
      const wordElement = word as HTMLElement;
      wordElement.style.transition = 'none';
      wordElement.style.opacity = '0';
      wordElement.style.transform = 'translateY(20px)';
      wordElement.style.filter = 'blur(8px)';
    });

    // Animate words in sequence
    words.forEach((word, index) => {
      const wordElement = word as HTMLElement;
      
      setTimeout(() => {
        wordElement.style.transition = 'opacity 0.4s ease-out, transform 0.4s ease-out, filter 0.4s ease-out';
        wordElement.style.opacity = '1';
        wordElement.style.transform = 'translateY(0)';
        wordElement.style.filter = 'blur(0)';
      }, index * 30 + 100); // Added delay to ensure content change happens first
    });
  };

  const updateTestimonial = (direction: number) => {
    if (isAnimating) return;

    setIsAnimating(true);
    const newIndex = (activeIndex + direction + testimonials.length) % testimonials.length;
    setActiveIndex(newIndex);

    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  const handleNext = () => {
    updateTestimonial(1);
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  const handlePrev = () => {
    updateTestimonial(-1);
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  const formatQuote = (quote: string): React.JSX.Element => {
    return (
      <>
        {quote.split(' ').map((word, index) => (
          <span key={`${activeIndex}-${index}`} className="word inline-block mr-1">{word}</span>
        ))}
      </>
    );
  };

  useEffect(() => {
    // Small delay to ensure DOM has updated with new content
    const timer = setTimeout(() => {
      animateWords();
    }, 50);

    return () => clearTimeout(timer);
  }, [activeIndex]);

  useEffect(() => {
    // Autoplay functionality
    autoplayRef.current = setInterval(() => {
      if (!isAnimating) {
        setActiveIndex(prev => (prev + 1) % testimonials.length);
      }
    }, 5000);

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [isAnimating]);

  return (
    <section id='testimonials' className='mt-4 mb-4 md:mt-6 md:mb-6 md:mx-6 mx-4 flex flex-col items-center'>
      {/* Main Split Layout Container */}
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[600px]'>
          
          {/* Left Side - Title, Description, Navigation & Dots */}
          <div className='flex flex-col justify-center space-y-8'>
            {/* Title and Description */}
            <div className='text-left'>
              <h1 className='md:text-6xl text-3xl font-sans font-semibold tracking-tight text-white mb-4'>
                Hear from Our Developers
              </h1>
              <p className='text-gray-300 text-lg leading-relaxed'>
                The future of browsing, built by those who dream beyond the tab.
              </p>
            </div>

            {/* Navigation buttons */}
            <div className='flex gap-4 justify-start'>
              <button
                onClick={handlePrev}
                disabled={isAnimating}
                className='group/btn relative w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-white/20 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-400/25 disabled:opacity-50 disabled:cursor-not-allowed'
              >
                <div className='absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/20 to-purple-600/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300'></div>
                <ChevronLeft className='w-5 h-5 text-white/80 group-hover/btn:text-white transition-colors duration-300 relative z-10' />
              </button>

              <button
                onClick={handleNext}
                disabled={isAnimating}
                className='group/btn relative w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-white/20 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-400/25 disabled:opacity-50 disabled:cursor-not-allowed'
              >
                <div className='absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/20 to-purple-600/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300'></div>
                <ChevronRight className='w-5 h-5 text-white/80 group-hover/btn:text-white transition-colors duration-300 relative z-10' />
              </button>
            </div>

            {/* Indicator dots */}
            <div className='flex gap-2 justify-start'>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isAnimating) {
                      setActiveIndex(index);
                      if (autoplayRef.current) {
                        clearInterval(autoplayRef.current);
                        autoplayRef.current = null;
                      }
                    }
                  }}
                  disabled={isAnimating}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? 'bg-cyan-400 shadow-lg shadow-cyan-400/50' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Side - Content Box Only */}
          <div className='flex items-center justify-center'>
            <div className='w-full max-w-lg'>
              {/* Glass Neon Testimonial Box */}
              <div className='group relative will-change-transform' style={{ animation: 'tileFloat 4s ease-in-out infinite' }}>
                {/* Glossy glow effect */}
                <div className='absolute -inset-1 bg-white/10 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200'></div>

                {/* Main glass box */}
                <div className='relative bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 md:p-8 min-h-[380px] flex flex-col justify-center items-center text-center transition-all duration-500 hover:border-white/30 hover:bg-white/10 shadow-2xl shadow-white/5'>

                  {/* Quote */}
                  <div className='mb-6'>
                    <p 
                      ref={quoteRef}
                      className='text-lg md:text-xl text-white/90 leading-relaxed font-normal'
                    >
                      {formatQuote(testimonials[activeIndex].quote)}
                    </p>
                  </div>

                  {/* Author info */}
                  <div className='mb-6'>
                    <h3 className='text-lg md:text-xl font-medium text-white mb-2 transition-all duration-300'>
                      {testimonials[activeIndex].name}
                    </h3>
                    <p className='text-sm md:text-base text-gray-400 font-normal'>
                      {testimonials[activeIndex].designation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom disclaimer text */}
        <div className='mt-8 text-center'>
          <p className='text-muted-foreground text-sm'>
            *These early insights come straight from the creators behind Trowser. User reviews will be published following the public launch.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Reviews
