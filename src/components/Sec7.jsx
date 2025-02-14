import React from "react";
import { MoveRight } from "lucide-react";
import { Star } from "lucide-react";

const Sec7 = () => {
  return (
    <>
      <div className="sm:flex justify-between max-w-7xl m-auto sm:py-16 px-4 border-b-2">
        <div>
          <img src="/public/img/image-03.jpg" alt="" />
        </div>

        {/* Second div */}

        <div>
          <div>
            <p className="text-sm font-bold pt-8 sm:pt-0">NEW COLLECTIONS</p>
            <h1 className="sm:text-5xl text-2xl sm:pt-6 pt-2 sm:w-[500px]">
              Best Sweatshirts and tracksuits for everyone!
            </h1>
            <p className="sm:pt-6 pt-3 sm:w-[500px] text-sm sm:text-base">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
              maecenas accumsan lacus vel facilisis.
            </p>
            <button className="flex gap-2 text-sm font-semibold items-center sm:mt-8 mt-6 sm:mb-24 mb-8 p-2 px-6 border hover:bg-gray-500 hover:text-white  ease-in duration-300">
              Shop Now <MoveRight />
            </button>
          </div>
          <div className="flex gap-6 border-t-2 sm:pt-10 pt-6">
            <div className="flex">
              <Star className="w-4 text-yellow-200" fill="yellow" />
              <Star className="w-4 text-yellow-200" fill="yellow" />
              <Star className="w-4 text-yellow-200" fill="yellow" />
              <Star className="w-4 text-yellow-200" fill="yellow" />
              <Star className="w-4 text-yellow-200" fill="yellow" />
            </div>
            <div className="text-gray-500 text-sm">
              <p>4.5 (10.000+) Rating </p>
            </div>
          </div>
          <p className="sm:w-[500px] text-gray-500 pt-2 text-sm sm:text-base">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Quis ipsum suspendisse ultrices gravida.
          </p>
          <p className="pt-3 font-semibold text-sm sm:text-base pb-6 sm:pb-0">Petra van der Meer</p>
        </div>
      </div>
    </>
  );
};

export default Sec7;
