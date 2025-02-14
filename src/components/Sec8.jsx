import React from "react";
import { Star } from "lucide-react";
import { Heart } from 'lucide-react';
import { Expand } from 'lucide-react';
import { Repeat } from 'lucide-react';
import { Lock } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';


const card = [
  {
    id: "7",
    img: "/public/img/card1.webp",
    title: "Basic Coloured Sweatplants With Elastic Hems",
    price: "$29.90 _ $39.90",
  },
  {
    id: "7",
    img: "/public/img/card2.webp",
    title: "Basic High-Neck Puff Jacket",
    price: "$29.50",
  },
  { 
    id: "9",
    img: "/public/img/card3.webp",
    title: "Basic Relax Fit Leggings",
    price: "$18.70",
  },
  {
    id: "10",
    img: "/public/img/card4.webp",
    title: "Check Overshirt With Pocket Detail",
    price: "$24.90",
  },
  {
    id: "11",
    img: "/public/img/card5.webp",
    title: "Rose Printed Hoodie",
    price: "$19.90",
  },
  {
    id: "12",
    img: "/public/img/card6.webp",
    title: "World Wide Cup Print T-Shirt",
    price: "$27.99",
  },
  {
    id: "13",
    img: "/public/img/card7.webp",
    title: "Sheeveless Ribbed Short Dress Black",
    price: "$27.99",
  },
  {
    id: "14",
    img: "/public/img/card8.webp",
    title: "Slogan Hoodie With Label Detail",
    price: "$27.99",
  },
];

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";
// import 'swiper/css/pagination'
// import 'swiper/css/scrollbar';

export default () => {
  const dispatch = useDispatch();
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={30}
      slidesPerView={1}
      navigation={{
        prevEl: ".prevBtn",
        nextEl: ".nextBtn",
      }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      loop
      breakpoints={{
        640:{
          slidesPerView: 1,
          spaceBetween: 20
        },
        768:{
          slidesPerView: 2,
          spaceBetween: 30
        },
        1024:{
          slidesPerView: 3,
          spaceBetween: 50
        }
      }}
    >
      {card.map((card, index) => {
        const { img, title, price} = card
        return (
          <SwiperSlide key={index}>
            <div className="cursor-pointer mb-10 group px-4 sm:px-0">
              <div>
                <img src={img} alt="" />
                <span className="absolute top-2 sm:left-2 left-6 border text-xs px-2 py-1 text-green-700 font-bold bg-white">76%</span>
                <div className="absolute top-2 sm:right-2 right-6 flex flex-col gap-2 opacity-0 group-hover:opacity-100 duration-300 ease-in-out">
                <Heart size={30} className="border p-1 rounded-full bg-white hover:ease-in duration-300 hover:bg-red-600"/>
                <Expand size={30} className="border p-1 rounded-full bg-white hover:ease-in duration-300 hover:bg-red-600"/>
                <Repeat size={30} className="border p-1 rounded-full bg-white hover:ease-in duration-300 hover:bg-red-600"/>
                <Lock onClick={() => dispatch(add(card))} size={30} className="border p-1 rounded-full bg-white hover:ease-in duration-300 hover:bg-red-600 " />
                </div>
              </div>

              <div className="bg-white sm:w-[350px] w-[300px] absolute sm:bottom-4 bottom-0 sm:right-6 right-10 px-4 border">
              <div className="flex gap-2 pt-4">
                <Star className="w-4 text-yellow-200" fill="yellow"/>
                <p className="text-sm sm:text-base">1 rewiew</p>
              </div>
              <p className="text-sm pt-2">{title}</p>
              <p className="font-semibold py-2">{price}</p>
              </div>
              
            </div>
          </SwiperSlide>
        );
      })}
      <div className="absolute top-64 w-full flex justify-between">
           <div>
           <button className="prevBtn relative z-50"> <ChevronLeft size={50} /></button>
           </div>
           <div>
           <button className="nextBtn relative z-50"> <ChevronRight size={50} /></button>
           </div>
         </div>
    </Swiper>
  );
};

