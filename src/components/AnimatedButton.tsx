
import Link from 'next/link'
import React from 'react'

interface AnimatedButtonProps {
  href: string
  children: React.ReactNode
}

function AnimatedButton({ href, children }: AnimatedButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105"
    >
      {children}
    </Link>
  )
}

export default AnimatedButton
