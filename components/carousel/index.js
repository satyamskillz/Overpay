import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper'

function Carousel() {
  return (
    <>
      <div className="w-full p-4">
        <img src="/pattern.svg" alt="pattern" className="w-full" />
      </div>
      <div className="absolute inset-0">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={false}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper w-full h-full"
        >
          <SwiperSlide className="flex flex-col items-center justify-center">
            <img src="/images/img-1.png" alt="image one" />
            <h2 className="text-[40px] mt-10 text-[#fff] font-extrabold">
              Get better with money
            </h2>
            <p className="text-[#fff] text-sm mt-4 w-[56ch] text-center">
              Overpay help you set saving goals, earn cash back offers, Go to
              disclaimer for more details and get paychecks up to two days
              early. Get a $20 bonus when you receive qualifying direct deposits
            </p>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-center justify-center">
            <img src="/images/img-2.png" alt="image two" />
            <h2 className="text-[40px] mt-10 text-[#fff] font-extrabold">
              Speady, Easy and Fast
            </h2>
            <p className="text-[#fff] text-sm mt-4 w-[56ch] text-center">
              Overpay help you set saving goals, earn cash back offers, Go to
              disclaimer for more details and get paychecks up to two days
              early. Get a $20 bonus when you receive qualifying direct deposits
            </p>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-center justify-center">
            <img src="/images/img-1.png" alt="image three" />
            <h2 className="text-[40px] mt-10 text-[#fff] font-extrabold">
              Get better with money
            </h2>
            <p className="text-[#fff] text-sm mt-4 w-[56ch] text-center">
              Overpay help you set saving goals, earn cash back offers, Go to
              disclaimer for more details and get paychecks up to two days
              early. Get a $20 bonus when you receive qualifying direct deposits
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default Carousel
