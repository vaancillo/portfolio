"use client"
import { fadeIn } from "@/utils/motionTransitions"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Avatar() {
  return (
    <motion.div variants={fadeIn('left', 0.5)} initial='hidden' animate='show' exit='hidden' className='bottom-0 left-0 hidden md:inline-block md:absolute w-[400px] h-[400px]'>
        <Image src='/assets/react-logo-vector-1.svg' width='200' height='200' className='w-full h-full' alt='particles' />
    </motion.div>

  )
}
