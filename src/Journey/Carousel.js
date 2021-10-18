import React from 'react'
import "swiper/swiper-bundle.min.js";

import "./Journey.scss"
import "swiper/swiper-bundle.min.css"
import Card from "./Card"


import { Swiper, SwiperSlide } from "swiper/react";


import SwiperCore, {
    Pagination, Navigation
} from 'swiper';

SwiperCore.use([Pagination, Navigation]);


const Carousel = () => {

    return (
        <>
          

            <Swiper slidesPerView={3} spaceBetween={0} slidesPerGroup={3} loop={true} loopFillGroupWithBlank={true} pagination={{
                "clickable": true
            }} navigation={true} className="mySwiper">
                <SwiperSlide><Card/></SwiperSlide>
                <SwiperSlide><Card/></SwiperSlide>
                <SwiperSlide><Card/></SwiperSlide>
                <SwiperSlide><Card/></SwiperSlide>
                <SwiperSlide><Card/></SwiperSlide>
                <SwiperSlide><Card/></SwiperSlide>
                <SwiperSlide><Card/></SwiperSlide>
                <SwiperSlide><Card/></SwiperSlide>
                <SwiperSlide><Card/></SwiperSlide>
            </Swiper>

        </>
    )
}

export default Carousel
