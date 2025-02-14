import React from "react";
import { MoveRight } from "lucide-react";

const Sec4 = () => {
  return (
    <>
      <div className="sm:flex justify-around gap-32 sm:mt-32 mt-10 border-t-2 sm:py-20 py-6 cursor-pointer max-w-7xl m-auto">
        <div>
          <img className="w-auto h-auto px-4 sm:px-0" src="/public/img/image-01.webp" alt="" />
          <p className="pt-6 text-gray-500 sm:pl-24 px-4 sm:px-0 text-sm sm:text-base">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Quis ipsum suspendisse ultrices gravida.
          </p>
          <p className="sm:pl-24 pt-4 font-medium px-4 sm:px-0 pb-8 sm:pb-0">Petra van der Meer</p>
        </div>

        {/* div two  */}

        <div>
          <p className="text-sm font-bold px-4 sm:px-0">NEW COLLECTIONS</p>
          <h1 className="sm:text-5xl text-2xl sm:pt-6 pt-2 sm:w-[500px] px-4 sm:px-0">
            Best Sweatshirts and tracksuits for everyone!
          </h1>
          <p className="sm:pt-6 pt-3 sm:w-[500px] w-[370px] px-4 sm:px-0 text-sm sm:text-base">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
            maecenas accumsan lacus vel facilisis.
          </p>
          <button className="flex gap-2 text-sm font-semibold items-center sm:mt-8 mt-4 sm:mb-24 mb-8 p-2 px-6 border hover:bg-gray-500 hover:text-white  ease-in duration-300 mx-4 sm:mx-0">
            Shop Now <MoveRight />
          </button>
          <img className="w-full px-4 sm:px-0" src="/public/img/image-02.webp" alt="" />
        </div>
      </div>
    </>
  );
};

export default Sec4;
