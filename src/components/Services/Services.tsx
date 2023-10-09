import { Circle } from "../Circle";

export function Services() {
  return (
    <div className='flex items-center justify-center h-screen'>
        <Circle />
        
        <div className='flex flex-col text-center md:text-left md:w-[30vw] mb-10'>
            <h1>My <span className='text-[#838383]'>Services.</span></h1>
        </div>

    </div>
  )
}

