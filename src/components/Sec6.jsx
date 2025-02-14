import React from "react";

const logo = [
  {
    img: "/public/img/logo-1.webp",
  },
  {
    img: "/public/img/logo-2.webp",
  },
  {
    img: "/public/img/logo-3.webp",
  },
  {
    img: "/public/img/logo-4.webp",
  },
  {
    img: "/public/img/logo-5.webp",
  },
  {
    img: "/public/img/logo-6.webp",
  },
];

const Sec6 = () => {
  return (
    <div className="flex flex-wrap justify-around max-w-7xl m-auto py-6 border-b-2 mb-10">
      {logo.map(({ img },index) => {
        return <img key={index} src={img} alt="" className="w-36 opacity-40 hover:opacity-100 ease-in duration-300 cursor-pointer" />;
      })}
    </div>
  );
};

export default Sec6;
