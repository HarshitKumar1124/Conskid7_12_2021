import React from 'react'
import "swiper/swiper-bundle.min.js";

import "./Journey.css"
import "swiper/swiper-bundle.min.css"
import Card from "./Card"


import UserTestimonialList from './UserTestimonialList';


import { Swiper, SwiperSlide } from "swiper/react";


import SwiperCore, {
    Pagination, Navigation
} from 'swiper';

SwiperCore.use([Pagination, Navigation]);


const Carousel = () => {

    return (
        <>
          

            <Swiper slidesPerView={3} spaceBetween={-60} slidesPerGroup={3} loop={true} loopFillGroupWithBlank={false} pagination={{
                "clickable": true
            }} navigation={true} className="mySwiper">

                {
                  UserTestimonialList.map((element)=>{
                    return <SwiperSlide><Card Id={`Card${element.id}`} Content={element.Content} Company={element.Company} Name={element.Name} Institute={element.Institute} Image={element.Image}/></SwiperSlide>
                  })
                }

                
                
            </Swiper>

        </>
    )
}

export default Carousel
