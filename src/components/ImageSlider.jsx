import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { MoveRight } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import 'swiper/css/pagination'
// import 'swiper/css/scrollbar';

export default () => {
  return (
    
      <div className="max-w-[1360px] mx-auto sm:pt-20 pt-10">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
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
        >
          <SwiperSlide>
            <img
              className="sm:w-full h-80 object-cover sm:h-auto"
              src="/public/img/slider-04.webp"
              alt=""
            />
            <div className="absolute sm:top-28 top-16 px-8 sm:px-14">
              <p className="text-xs font-bold">WINTER 2022 COLLECTION</p>
              <h6 className="sm:text-7xl text-3xl sm:font-light font-medium py-2 sm:w-[600px] w-[300px]">
                Valentin Paul Essential Collection
              </h6>
              <p className="sm:text-sm text-xs sm:py-8 py-4 text-gray-600">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit...
              </p>
              <button className="flex gap-2 font-semibold">
                Shop Collection <MoveRight className="pt-1" />
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="sm:w-full h-80 object-cover sm:h-auto"
              src="/public/img/slider-05.webp"
              alt=""
            />
            <div className="absolute sm:top-28 top-16 px-8 sm:px-14">
              <p className="text-xs font-bold">WINTER 2022 COLLECTION</p>
              <h6 className="sm:text-7xl text-3xl sm:font-light font-medium py-2 sm:w-[600px] w-[300px]">
                Making someone feel pretty is an art
              </h6>
              <p className="sm:text-sm text-xs sm:py-8 py-4 text-gray-600">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit...
              </p>
              <button className="flex gap-2 font-semibold">
                Shop Collection <MoveRight className="pt-1" />
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="sm:w-full h-80 object-cover sm:h-auto"
              src="/public/img/slider-06.webp"
              alt=""
            />
            <div className="absolute sm:top-28 top-16 px-8 sm:px-14">
              <p className="text-xs font-bold">WINTER 2022 COLLECTION</p>
              <h6 className="sm:text-7xl text-3xl sm:font-light font-medium py-2 sm:w-[600px] w-[300px]">
                Valentin Paul Essential Collection
              </h6>
              <p className="sm:text-sm text-xs sm:py-8 py-4 text-gray-600">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit...
              </p>
              <button className="flex gap-2 font-semibold">
                Shop Collection <MoveRight className="pt-1" />
              </button>
            </div>
          </SwiperSlide>

          <div className="absolute top-56 w-full flex justify-between">
            <div>
              <button className="prevBtn relative z-50">
                {" "}
                <ChevronLeft size={50} className="hidden sm:block" />
              </button>
            </div>
            <div>
              <button className="nextBtn relative z-50">
                {" "}
                <ChevronRight size={50} className="hidden sm:block" />
              </button>
            </div>
          </div>
        </Swiper>
      </div>
    
  );
};
