import { fadeIn } from '@/utils/motionTransitions'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export function Introduction() {
  return (
    <div className='bg-[#131424]/50 w-full z-10'>
        <div className='w-full h-full'>
            <div className='container grid items-center h-full px-5 mx-auto md:grid-cols-2 md-text-left'>
        <motion.div className='hidden w-auto h-auto mx-auto md:block'
         variants={fadeIn('right', 0.5)}
         initial='hidden'
         animate='show'
         exit='hidden'
        >
            <Image src='/assets/me.png' priority width='400' height='200' alt='Avatar' className='rounded-full border'/>
        </motion.div>
             
             <motion.div variants={fadeIn('left', 0.5)}
             initial='hidden'
             animate='show'
             exit='hidden'
             >
                <h1 className='mb-5 text-4xl leading-tight md:mb-10'>Jared Portocarrero <br />
                <span className='text-[#838383]'>Portfolio</span></h1>
                <p className='max-w-sm mx-auto mb-10 text-xl md:max-w-2xl md:mx-0 md:mb-16 md:text-xl'>A passionate frontend developer specialized in creating attractive and functional websites. <span> My approach focuses on combining design and technology to deliver exceptional web experiences that captivate users and meet project objectives.</span></p>
                <div className='flex flex-col items-center gap-3 md:gap-10 md:flex-row'>
                    <Link href='/works' className='px-6 py-3 my-2 transition-all border-2 cursor-pointer w-fit rounded-xl hover:shadow-md hover:shadow-white/50'>See projects</Link>
                    <Link href='https://www.instagram.com/_jared1x_/' className='px-6 py-3 my-2 transition-all border-2 cursor-pointer w-fit rounded-xl hover:shadow-md hover:shadow-white/50'>Contact me</Link>
                </div>
             </motion.div>
             </div>
        </div>
    </div>
  )
}
