"use client"

import { fadeIn } from "@/utils/motionTransitions"
import { Circle } from "../Circle"
import Iphone from "../Mock/Iphone"
import { motion } from "framer-motion"
import { cardContent } from "./Work.data"
import { useState } from "react"

function Work() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

    const handleClick = (index: number) => {
        setExpandedIndex(index === expandedIndex ? -1 : index)
    }

    const cardVariants = {
        expanded: {
            width: '360px',
            opacity: 1
        },
        collapsed: {
            width: '200px',
            opacity: 1
        }
    }

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
                    <motion.div key={id} className={`card cursor-pointer h-[400px] bg-auto bg-no-repeat bg-center rounded-[20px] ${id === expandedIndex ? 'expanded' : ''}`}
                     initial={{opacity: 1}}
                     variants={cardVariants}
                     animate={id === expandedIndex ? 'expanded' : 'collapsed'}
                     exit={{
                       opacity: 1 
                     }}
                     transition={{ duration: 0.5 }}
                     onClick={() => handleClick(id)}
                     style={{
                        backgroundImage: `url(/assets/${imageUrl})`
                     }}
                    >
                        <p>{title}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </div>
  )
}

export default Work