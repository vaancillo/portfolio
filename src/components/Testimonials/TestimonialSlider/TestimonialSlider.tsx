import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Pagination } from 'swiper/modules'
import { testimonialsData } from './TestimonialsSlider.data'
import Image from 'next/image'
import Link from 'next/link'

export function TestimonialSlider() {
  return (
    <div>
        <Swiper 
           breakpoints={{
             320: {
                slidesPerView: 1,
                spaceBetween: 15
             }
           }}
           freeMode={true}
           pagination={{
            clickable: true
           }}
           modules={[Pagination]}
           className='h-[380px] md:h-[300px] w-[270px] md:w-[550px] pt-10'
        >
            {testimonialsData.map(({id, name, userName, testimonial}) => (
                <SwiperSlide key={id}>
                    <Image src={`https://unavatar.io/${userName}`} alt={name} width='100' height='100' className='mx-auto rounded-full'/>
                    <Link href={`https://github.com/${userName}`} target='_blank'>
                      <h4 className='text-center mt-1'>{name}</h4>
                    </Link>
                    <div className='text-[13px] text-center'>{testimonial}</div>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}
