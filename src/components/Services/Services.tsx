"use client"
import { fadeIn } from "@/utils/motionTransitions";
import { Circle } from "../Circle";
import { motion } from 'framer-motion'
import Slider from "./Slider/Slider";

export function Services() {
  return (
    <div className='flex items-center justify-center h-screen bg-[#131424]/50 w-full z-10'>
        <Circle />
     <div className='flex flex-col md:flex-row gap-x-5'>
        <div className='flex flex-col text-center md:text-left md:w-[30vw] mb-10'>
            <motion.h1 className="mb-4 text-3xl" variants={fadeIn('up', 0.5)}
             initial='hidden'
             animate='show'
             exit='hidden'>
                My <span className='text-[#838383]'>Services.</span>
            </motion.h1>
            <motion.p
            variants={fadeIn('up', 0.5)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-md'>
                I offer a wide range of web development and programming services to help businesses and individuals achieve their digital goals. My approach is based on creating customized and efficient solutions using the latest technologies and best practices. With experience creating user interfaces, system design, and working collaboratively with UX/UI design teams, I can provide end-to-end solutions that are not only functional, but also visually appealing. My skills include mastery of HTML, CSS, SASS, Bootstrap, Tailwind, JavaScript, TypeScript and Node.js.
            </motion.p>
        </div>
        <motion.div
         variants={fadeIn('up', 0.5)}
         initial='hidden'
         animate='show'
         exit='hidden'>
            <Slider />
        </motion.div>
        </div>
    </div>
  )
}

