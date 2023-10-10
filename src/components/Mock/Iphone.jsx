import Image from "next/image"
import { motion } from "framer-motion"
import { fadeIn } from "@/utils/motionTransitions"

function Iphone() {
  return (
    <motion.div variants={fadeIn('right', 0.5)} initial='hidden' animate='show' exit='hidden' className='bottom-0 left-0 hidden md:inline-block md:absolute w-[600px] h-[400px]'>
      <Image src='/assets/679shots_so.png' priority width='200' height='200' className='w-full h-full' alt='react-logo' />
    </motion.div>
  )
}

export default Iphone