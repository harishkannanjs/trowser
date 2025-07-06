'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface NavigationProps {
  className?: string;
}

const navLinks = [
  {
    name: 'Home',
    href: '#home'
  },
  {
    name: 'Features',
    href: '#features'
  },
  {
    name: 'Testimonials',
    href: '#testimonials'
  },
  {
    name: 'Get Started',
    href: '#getstarted'
  },
]

const Navigation: React.FC<NavigationProps> = ({ className = '' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <nav className={`flex h-12 md:h-14 rounded-full bg-white/10 backdrop-blur-md w-full max-w-4xl items-center justify-between px-3 md:px-6 z-10 ${className}`}>
        <Link className="w-max flex-shrink-0 flex items-center gap-2" aria-label="Trowser" href="/">
          <div className='h-8 w-8 md:h-10 md:w-10 rounded-full'>
            <Image
              src={'/Trowser_Transparant.webp'}
              height={40}
              width={40}
              alt='Logo'
              className='h-full w-full object-cover'
            />
          </div>
          <span className='text-lg md:text-xl text-white font-regular'>
            Trowser™
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8" style={{ opacity: 1 }}>
          {navLinks.map((link, index) => (
            <Link 
              key={index}
              className="text-sm group relative transition-opacity duration-200 ease-in-out hover:opacity-100 opacity-70 whitespace-nowrap" 
              href={link.href}
            >
              <div className="absolute rounded-full top-1/2 -translate-y-1/2 left-0 -translate-x-3 h-1.5 w-1.5 bg-current transition-all duration-300 ease-in-out group-hover:opacity-100 opacity-0 group-hover:scale-100 scale-50"></div>
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Join Waitlist Button */}
        <Link 
          className="hidden md:flex h-8 md:h-10 rounded-full text-white bg-black px-3 md:px-6 items-center gap-2 md:gap-3 text-xs md:text-sm group flex-shrink-0" 
          title="Join the waitlist" 
          target="_blank" 
          rel="noopener noreferrer" 
          href="https://tally.so/r/w4Yber"
        >
          <span className="hidden sm:inline">Join the waitlist</span>
          <span className="sm:hidden">Join</span>
          <svg 
            className="transition-transform duration-200 ease-in-out group-hover:translate-x-0.5 w-3 h-2.5 md:w-4 md:h-3" 
            width="15" 
            height="12" 
            viewBox="0 0 15 12" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M14.4688 6.21191C14.4688 6.39746 14.3955 6.56104 14.249 6.70264L9.37842 11.5586C9.23682 11.6953 9.07812 11.7637 8.90234 11.7637C8.72168 11.7637 8.57031 11.7026 8.44824 11.5806C8.32617 11.4634 8.26514 11.3145 8.26514 11.1338C8.26514 11.0459 8.27979 10.9629 8.30908 10.8848C8.33838 10.8018 8.38232 10.731 8.44092 10.6724L10.0815 9.00244L12.9893 6.3584L13.1357 6.71729L10.7773 6.86377H1.51221C1.32178 6.86377 1.16553 6.80273 1.04346 6.68066C0.92627 6.55859 0.867676 6.40234 0.867676 6.21191C0.867676 6.02148 0.92627 5.86523 1.04346 5.74316C1.16553 5.62109 1.32178 5.56006 1.51221 5.56006H10.7773L13.1357 5.70654L12.9893 6.07275L10.0815 3.42139L8.44092 1.75146C8.38232 1.69287 8.33838 1.62451 8.30908 1.54639C8.27979 1.46338 8.26514 1.37793 8.26514 1.29004C8.26514 1.10937 8.32617 0.960449 8.44824 0.843262C8.57031 0.721191 8.72168 0.660156 8.90234 0.660156C8.99023 0.660156 9.07324 0.677246 9.15137 0.711426C9.23438 0.745605 9.31494 0.801758 9.39307 0.879883L14.249 5.72119C14.3955 5.86279 14.4688 6.02637 14.4688 6.21191Z" 
              fill="white"
            />
          </svg>
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="md:hidden flex items-center justify-center w-8 h-8 rounded-full bg-white/10 backdrop-blur-md transition-all duration-300"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`text-white transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'rotate-45' : 'rotate-0'}`}
          >
            <path
              d="M10 3V17M3 10H17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={toggleMobileMenu}></div>
      )}

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-20 right-4 left-4 bg-white/10 backdrop-blur-md rounded-2xl z-50 transition-all duration-300 ${
        isMobileMenuOpen 
          ? 'opacity-100 translate-y-0 visible' 
          : 'opacity-0 -translate-y-4 invisible'
      }`}>
        <div className="p-6 space-y-4">
          {/* Mobile Navigation Links */}
          <nav className="space-y-3">
            {navLinks.map((link, index) => (
              <Link 
                key={index}
                className="block text-white text-lg font-medium hover:text-gray-300 transition-colors py-2" 
                href={link.href}
                onClick={toggleMobileMenu}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Join Waitlist Button */}
          <Link 
            className="flex w-full h-12 rounded-full text-white bg-black items-center justify-center gap-3 text-sm group mt-6" 
            title="Join the waitlist" 
            target="_blank" 
            rel="noopener noreferrer" 
            href="https://tally.so/r/w4Yber"
            onClick={toggleMobileMenu}
          >
            Join the waitlist
            <svg 
              className="transition-transform duration-200 ease-in-out group-hover:translate-x-0.5 w-4 h-3" 
              width="15" 
              height="12" 
              viewBox="0 0 15 12" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M14.4688 6.21191C14.4688 6.39746 14.3955 6.56104 14.249 6.70264L9.37842 11.5586C9.23682 11.6953 9.07812 11.7637 8.90234 11.7637C8.72168 11.7637 8.57031 11.7026 8.44824 11.5806C8.32617 11.4634 8.26514 11.3145 8.26514 11.1338C8.26514 11.0459 8.27979 10.9629 8.30908 10.8848C8.33838 10.8018 8.38232 10.731 8.44092 10.6724L10.0815 9.00244L12.9893 6.3584L13.1357 6.71729L10.7773 6.86377H1.51221C1.32178 6.86377 1.16553 6.80273 1.04346 6.68066C0.92627 6.55859 0.867676 6.40234 0.867676 6.21191C0.867676 6.02148 0.92627 5.86523 1.04346 5.74316C1.16553 5.62109 1.32178 5.56006 1.51221 5.56006H10.7773L13.1357 5.70654L12.9893 6.07275L10.0815 3.42139L8.44092 1.75146C8.38232 1.69287 8.33838 1.62451 8.30908 1.54639C8.27979 1.46338 8.26514 1.37793 8.26514 1.29004C8.26514 1.10937 8.32617 0.960449 8.44824 0.843262C8.57031 0.721191 8.72168 0.660156 8.90234 0.660156C8.99023 0.660156 9.07324 0.677246 9.15137 0.711426C9.23438 0.745605 9.31494 0.801758 9.39307 0.879883L14.249 5.72119C14.3955 5.86279 14.4688 6.02637 14.4688 6.21191Z" 
                fill="white"
              />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
};

const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 right-0 z-[100] flex justify-center items-center px-4 md:px-24 py-4'>
      <Navigation />
    </div>
  )
}

export default Navbar