'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-100 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Image
              src="/logo1.webp"
              height={200}
              width={200}
              alt="Miraweb Logo"
              className="h-40 w-40"
            />
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="#hero" className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium">
                Home
              </Link>
              <Link href="#features" className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium">
                Features
              </Link>
              <Link href="#download" className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium">
                Download
              </Link>
              <Link href="#contact" className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar