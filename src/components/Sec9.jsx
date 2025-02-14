import React from "react";
import { MoveRight } from "lucide-react";

const Sec9 = () => {
  return (
    <>
    <div className="max-w-7xl m-auto relative cursor-pointer px-4 sm:px-0">
      <div className=" mt-20 ">
        <img src="/public/img/banner-box2.webp" alt="" className="h-[400px] sm:h-full w-full object-cover" />
      </div>
      <div className="absolute sm:top-28 top-14 sm:left-20 left-12">
        <p className="sm:text-sm text-xs font-bold">NEW COLLECTIONS</p>
        <h1 className="sm:text-5xl text-3xl sm:pt-6 pt-4 sm:w-[500px] w-[310px]">
          Best Sweatshirts and tracksuits for everyone!
        </h1>
        <p className="pt-6 sm:w-[500px] w-[300px] text-xs sm:text-base">
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
          maecenas accumsan lacus vel facilisis.
        </p>
        <button className="flex gap-2 text-sm font-semibold items-center mt-8 mb-24 p-2 sm:px-6 px-4 border border-black hover:bg-gray-500 hover:text-white  ease-in duration-300">
          Shop Now <MoveRight />
        </button>
      </div>
    </div>
    </>
  );
};

export default Sec9;
