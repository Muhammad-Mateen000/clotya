import React from "react";

const card = [
  {
    img: "/public/img/blog-4.jpg",
    desc: "COLLECTION __ 25 Apr 2022",
    title: "The Best Products That Shape Fashion",
    detail:
      "Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque, sem sed convallis ultricies, ante eros",
  },
  {
    img: "/public/img/blog-5.jpg",
    desc: "FASHION __ 25 Apr 2022",
    title: "New Finds From Tuckernuck",
    detail:
      "Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque, sem sed convallis ultricies, ante eros",
  },
  {
    img: "/public/img/blog-6.jpg",
    desc: "CLOTHING __ 25 Apr 2022",
    title: "Sunset Sets From Saks",
    detail:
      "Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque, sem sed convallis ultricies, ante eros",
  },
];

const Sec11 = () => {
  return (
    <div className="sm:flex max-w-7xl m-auto gap-6">
      {card.map(({img, desc, title, detail}, index) => {
        return <div key={index}>
            <img src={img} alt="" className="px-4 sm:px-0" />
            <p className="text-xs font-semibold py-3 text-gray-500 px-4 sm:px-0">{desc}</p>
            <h3 className="text-xl font-semibold px-4 sm:px-0">{title}</h3>
            <p className="text-sm py-2 text-gray-500 sm:w-[400px] px-4 sm:px-0">{detail}</p>
        </div>
      })}
    </div>
  );
};

export default Sec11;
