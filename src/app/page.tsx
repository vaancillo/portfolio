import { Cover } from '@/components/Cover'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Jared Portfolio',
  description: 'Portfolio animated ',
}


export default function Home() {
  return (
    <main className='bg-[#202020] h-[100vh]'>
      <Cover />
    </main>
  )
}
