"use client"
import { fadeIn } from '@/utils/motionTransitions'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function Circle() {
  return (
    <motion.div variants={fadeIn('left', 0.5)} initial='hidden' animate='show' exit='hidden'className='bottom-0 right-0 hidden md:inline-block md:absolute -z-1 w-[500px] h-[400px] z-10'>
        <Image src='/assets/643shots_so.png' width='600' height='400' className='h-full w-full' alt='circle' />
    </motion.div>
  )
}
