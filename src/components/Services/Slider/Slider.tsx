import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { serviceData } from './Slider.data'

export default function Slider() {
  return (
    <Swiper 
     breakpoints={{
        320: {
            slidesPerView: 1,
            spaceBetween: 15
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 15
        },
     }}
     freeMode={true}
     pagination={{
        clickable: true
     }}
     modules={[Pagination]}
     className='h-[240px] md:h-[340px] w-[270px] md:w-[550px]'>
        {serviceData.map((item, index) => (
            <SwiperSlide key={index}>
                {item.title}
            </SwiperSlide>
        ))}
     </Swiper>
  )
}
