"use client"
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motionTransitions'

export function Navbar() {
    const pathname = usePathname()

    return (
        <motion.div
          className='fixed bottom-0 z-20 flex flex-col items-center w-full md:justify-center h-max md:top-1/4 md:right-10 md:max-w-md md:h-screen'
          variants={fadeIn('right', 0.5)} initial="hidden" animate="show" exit="hidden"
        >
          <div className='flex items-center justify-between w-full px-4 py-3 md:py-8 md:flex-col md:justify-center gap-y-10 md:px-4 md:h-max bg-white/10 backdrop-blur-sm md:rounded-full'>

          </div>
        </motion.div>
    )
}
