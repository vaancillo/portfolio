"use client"

import { fadeIn } from "@/utils/motionTransitions"
import { Circle } from "../Circle"
import Iphone from "../Mock/Iphone"
import { motion } from "framer-motion"
import { cardContent } from "./Work.data"
import { useState } from "react"

function Work() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <div className='h-screen'>
        <div className='grid pb-32 md:min-h-screen mt-28 md:mt-0 place-items-center'>
            <motion.h1
             variants={fadeIn('left', 0.5)}
             initial='hidden'
             animate='show'
             exit='hidden'
             className='my-5 text-2xl md:text-4xl font-bold text-center'
            >My<span className='text-[#838383]'> latest works</span></motion.h1>
            <motion.div 
             variants={fadeIn('up', 0.5)}
             initial='hidden'
             animate='show'
             exit='hidden'
            >
                {cardContent.map(({id, title, imageUrl, description, skills}) => (
                    <motion.div key={id} className={`card cursor-pointer h-[400px] bg-auto bg-no-repeat bg-center rounded-[20px] ${id === expandedIndex ? 'expanded' : ''}`}>
                        <p>{title}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </div>
  )
}

export default Work