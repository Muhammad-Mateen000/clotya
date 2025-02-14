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
    id: "1",
    img: "/public/img/slide 1.webp",
    title: "Short Nylon-Effect Puffer Jacket",
    price: "$29.90 _ $39.90",
  },
  {
    id: "2",
    img: "/public/img/slide 2.webp",
    title: "Pouch Pocket Hoodie Orange",
    price: "$29.50",
  },
  {
    id: "3",
    img: "/public/img/slide 3.webp",
    title: "Blue Starter Logo T-sirt",
    price: "$18.70",
  },
  {
    id: "4",
    img: "/public/img/slide 4.webp",
    title: "Long Sleeve Sweatshirt Dress",
    price: "$24.90",
  },
  {
    id: "5",
    img: "/public/img/slide 5.webp",
    title: "Long Sleeve Graphic T-shirt",
    price: "$19.90",
  },
  {
    id: "6",
    img: "/public/img/slide 6.webp",
    title: "Lightweight Zipped Bomber Jacket",
    price: "$27.99",
  },
];

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { add } from "../store/cartSlice";
import { useDispatch } from "react-redux";
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
          slidesPerView: 4,
          spaceBetween: 50
        }
      }}
    >
      {card.map((card, index) => {
        const { img, title, price } = card;
        return (
          <>
          <SwiperSlide key={index}>
            <div className="cursor-pointer group px-4 sm:px-0">
              <div>
                <img src={img} alt="" />
                <span className="absolute top-2 sm:left-2 left-5 border text-xs px-2 py-1 text-green-700 font-bold bg-white">76%</span>
                <div className="absolute top-2 sm:right-2 right-6 flex flex-col gap-2 opacity-0 group-hover:opacity-100 duration-300 ease-in">
                <Heart size={30} className="border p-1 rounded-full bg-white hover:ease-in duration-300 hover:bg-red-600"/>
                <Expand size={30} className="border p-1 rounded-full bg-white hover:ease-in duration-300 hover:bg-red-600"/>
                <Repeat size={30} className="border p-1 rounded-full bg-white hover:ease-in duration-300 hover:bg-red-600"/>
                <Lock onClick={() => dispatch(add(card))} size={30} className="border p-1 rounded-full bg-white hover:ease-in duration-300 hover:bg-red-600 " />
                </div>
              </div>
              <div className="flex gap-2 pt-2">
                <Star className="w-4 text-yellow-200" fill="yellow"/>
                <p>1 rewiew</p>
              </div>
              <p className="text-sm pt-1">{title}</p>
              <p className="font-semibold">{price}</p>
            </div>
          </SwiperSlide>

          
         </>
        );
      })}
       <div className="absolute top-52 w-full flex justify-between">
           <div>
           <button className="prevBtn relative z-50 opacity-40 hover:opacity-100 ease-in duration-300 cursor-pointer"> <ChevronLeft size={50} className=""/></button>
           </div>
           <div>
           <button className="nextBtn relative z-50 opacity-40 hover:opacity-100 ease-in duration-300 cursor-pointer"> <ChevronRight size={50} className=""/></button>
           </div>
         </div>
    </Swiper>
  );
};
