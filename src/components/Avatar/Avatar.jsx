"use client"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Avatar() {
  return (
    <motion.div>
        <Image src='/assets/avatar-1.png' width='400' height='400' className='w-full h-full' alt='particles' />
    </motion.div>
  )
}
