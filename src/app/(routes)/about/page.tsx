import About from "@/components/About/About";
import { CoverAbout } from "@/components/Cover";
import { Transition } from "@/components/Transition/Transition";

export default function AboutPage() {
  return (
    <div className='min-h-screen'>
        <Transition />
        <CoverAbout />
    </div>
  )
}
