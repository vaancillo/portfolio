"use client"
import { fadeIn } from '@/utils/motionTransitions'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function Circle() {
  return (
    <motion.div variants={fadeIn('left', 0.5)} initial='hidden' animate='show' exit='hidden'className='bottom-0 right-0 hidden md:inline-block md:absolute -z-1 w-[400px] h-[400px]'>
        <Image src='/assets/react-logo-vector-1.svg' width='400' height='400' className='h-full w-full' alt='circle' />
    </motion.div>
  )
}
