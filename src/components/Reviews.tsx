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
    <section id='testimonials' className='md:mt-44 md:mb-24 my-16 md:mx-20 mx-8 flex flex-col items-center'>
      <div className='text-center mb-16'>
        <h1 className='md:text-6xl text-3xl font-sans font-semibold tracking-tight text-white'>
          Hear from Our Developers
        </h1>
        <p className='my-4 text-gray-300'>
          The future of browsing, built by those who dream beyond the tab.
        </p>
      </div>

      <div className='w-full max-w-4xl'>
        {/* Glass Neon Testimonial Box */}
        <div className='group relative'>
          {/* Glossy glow effect */}
          <div className='absolute -inset-1 bg-white/10 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200'></div>

          {/* Main glass box */}
          <div className='relative bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 md:p-12 min-h-[400px] flex flex-col justify-center items-center text-center transition-all duration-500 hover:border-white/30 hover:bg-white/10 shadow-2xl shadow-white/5'>

            {/* Quote */}
            <div className='mb-8'>
              <p 
                ref={quoteRef}
                className='text-xl md:text-2xl text-white/90 leading-relaxed font-light max-w-3xl'
              >
                {formatQuote(testimonials[activeIndex].quote)}
              </p>
            </div>

            {/* Author info */}
            <div className='mb-8'>
              <h3 className='text-xl md:text-2xl font-semibold text-white mb-2 transition-all duration-300'>
                {testimonials[activeIndex].name}
              </h3>
              <p className='text-sm md:text-base text-gray-400'>
                {testimonials[activeIndex].designation}
              </p>
            </div>

            {/* Navigation buttons */}
            <div className='flex gap-4'>
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
            <div className='flex gap-2 mt-8'>
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
        </div>

        <p className='text-muted-foreground text-sm mt-8 text-center'>
          *These early insights come straight from the creators behind Trowser. User reviews will be published following the public launch.
        </p>
      </div>

      
    </section>
  )
}

export default Reviews
