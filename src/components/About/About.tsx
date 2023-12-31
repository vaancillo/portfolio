"use client"
import { motionTransitionsAbout } from '@/utils/motionTransitions'
import Avatar from '../React/ReactLogo'
import { motion } from 'framer-motion'
import { dataAboutSkills, dataCounter } from './About.data'
import CountUp from 'react-countup'
import { useState } from 'react'
import { BiDownArrow, BiRightArrow } from 'react-icons/bi'

export default function About() {
    const [index, setIndex] = useState(0)

  return (
    <div className='bg-[#131424]/50 w-full z-10'>
    <div className='items-center min-h-screen px-6 mx-auto align-middle mt-36 md:mt-0 md:flex md:max-w-4xl pb-36 md:pb-0'>
        <Avatar />
        <motion.div 
        initial={motionTransitionsAbout.initial} 
        animate={motionTransitionsAbout.animate}
        transition={motionTransitionsAbout.transition}
        >
            <h1 className='mb-6 md:text-4xl'>Creating websites with <br /> <span className='text-[#838383]'>spectacular designs.</span></h1>
            <p className=''>I am currently in a process of learning Typescript and Nextjs and I dedicate about 6 to 8 hours of my day to continue learning to become a FullStack profile and contribute as much as possible to companies, for me it would be a great opportunity to demonstrate that I can contribute a lot to the company that trusts in my skills and abilities.</p>

            <div className='grid justify-between grid-cols-2 gap-3 my-8 md:flex md:grid-cols-4 md:gap-6'>
                {dataCounter.map(({id, endCounter, text, lineRight, lineRightMobile}) => (
                        <div key={id} className={`${lineRight && 'ltr'}`}>
                            <div className={`${lineRight && 'px-4 border-2 border-transparent md:border-e-gray-100'} ${lineRightMobile && 'border-e-gray-100'}`}>
                                <p className='flex mb-2 text-2xl font-extrabold md:text-4xl text-[#838383]'>
                                    + <CountUp end={endCounter} start={0} duration={5} />
                                </p>
                                <p className='text-sm uppercase font-semibold max-w-[100px]: text-[#838383]'>{text}</p>
                            </div>
                        </div>
                ))}
            </div>
            <div className='flex flex-col mt-10 mb-3 md:flex-row justify-between md:mt-28 md:mb-5'>
                {dataAboutSkills.map((dataText, itemIndex) => {
                    const {id, text} = dataText
                    return (
                        <div key={id} className={`${index === id ? 'text-[#838383] duration-300 transition-all border-[#838383]' : 'border-white'} cursor-pointer md:text-lg relative px-2 md:px-8 py-4 border-2 rounded-xl flex justify-between items-center my-3`}
                         onClick={() => setIndex(itemIndex)}
                        >
                            <p className='mr-4 text-md md-text-lg'>{text}</p>
                            {index === id ? (
                                <BiDownArrow />
                            ) : (
                                <BiRightArrow />
                            )}
                        </div>
                    )
                })}   
            </div>
            <div className='max-w-4xl p-4 mx-auto bg-[#838383]/20 rounded-xl'>
                {dataAboutSkills[index].skills.map((items, index) => (
                    <div key={index} className='flex justify-center max-w-md gap-4 mx-auto'>
                        <span>{items.title} {' '} </span> - <span>{items.date}</span>
                    </div>
                ))}
            </div>
        </motion.div>
    </div>
    </div>
  )
}
