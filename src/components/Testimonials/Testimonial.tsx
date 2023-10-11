"use client"
import { fadeIn } from "@/utils/motionTransitions"
import { motion } from "framer-motion"
import { TestimonialSlider } from "./TestimonialSlider"

export default function Testimonial() {
  return (
    <div className='bg-[#131424]/50 w-full z-10 h-screen'>
        <div className='flex flex-col justify-center min-h-screen'>
            <motion.h1
             variants={fadeIn('up', 0.5)}
             initial='hidden'
             animate='show'
             exit='hidden'
             className='my-5 text-4xl text-center md:my-10'

            >
              Some comments <span className='text-[#838383]'>of my teammates.</span>
            </motion.h1>
              <motion.div
              variants={fadeIn('up', 0.5)}
              initial='hidden'
              animate='show'
              exit='hidden'
          
              >
                <TestimonialSlider />
              </motion.div>
        </div>
    </div>
  )
}
