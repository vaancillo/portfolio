import { Cover } from '@/components/Cover'
import { Transition } from '@/components/Transition/Transition'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Jared Portfolio',
  description: 'Portfolio animated ',
}


export default function Home() {
  return (
    <main className='bg-[#202020] h-[100vh]'>
      <Transition />
      <Cover />
    </main>
  )
}
