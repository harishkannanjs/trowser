import React from 'react'
import { Button } from './ui/button'

function AnimatedButton() {
  return (
    <Button className=' md:px-6 md:py-5 md:text-base rounded-md text-black text-center relative overflow-hidden group/modal-btn'>
      <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
        Join Waitlist →
      </span>
      <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20 text-lg">
        🚀
      </div>
    </Button>
  )
}

export default AnimatedButton
