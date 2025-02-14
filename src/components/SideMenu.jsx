import React from "react";
import { X } from "lucide-react";
import { ChevronDown } from "lucide-react";
const navbar = [
  {
    title: "Home",
    href: "/",
    children: [
      {
        title: "Home 1",
        href: "/",
      },
      {
        title: "Home 2",
        href: "/",
      },
      {
        title: "Home 3",
        href: "/",
      },
      {
        title: "Home 4",
        href: "/",
      },
      {
        title: "Home 5",
        href: "/",
      },
    ],
  },
  {
    title: "Shop",
    href: "/",
    children: [
      {
        title: "Home 1",
        href: "/",
      },
      {
        title: "Home 2",
        href: "/",
      },
      {
        title: "Home 3",
        href: "/",
      },
      {
        title: "Home 4",
        href: "/",
      },
      {
        title: "Home 5",
        href: "/",
      },
    ],
  },
  {
    title: "Women",
    href: "/",
  },
  {
    title: "Men",
    href: "/",
  },
  {
    title: "Outerwear",
    href: "/",
  },

  {
    title: "Blog",
    href: "/",
  },
  {
    title: "Contact",
    href: "/",
  },
];

const SideMenu = ({ onClick, isVisible }) => {
  return (
    <>
    <div
        className={`fixed inset-0 bg-black bg-opacity-90 z-40 transition-opacity duration-500 ${
          isVisible ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClick}
      ></div>
      <div
        className={`h-screen flex flex-col bg-white top-0 left-0 w-80 fixed border z-50 transition-transform ${
          isVisible ? "translate-x-0 duration-300" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between">
          <img className="w-28 mx-6 my-6" src={"/logo.webp"} alt="" />
          <X onClick={onClick} className="border black mx-6 my-6 bg-gray-300" />
        </div>
        <div className="font-bold px-6 pt-2 text-sm text-gray-600">
          <h1>Main Menu</h1>
        </div>
        <div className="flex-grow overflow-y-auto">
          {navbar.map(({ title, href, children }, index) => {
            return (
              <ul className="px-4">
                <li className="mt-6 mx-2" key={index}>
                  <a className="flex justify-between" href={href}>
                    {title}
                    {children && <ChevronDown size={18} />}
                  </a>
                </li>
              </ul>
            );
          })}
          <hr className="mt-6 pt-6"/>
          <div className="px-4">
            <h6 className="font-bold text-gray-600">Categories</h6>
            <ul>
              <li className="pt-6 px-2">
                <a href="#">Men</a>
              </li>
              <li  className="pt-6 px-2 ">
                <a href="#">Women</a>
              </li>
              <li className="pt-6 px-2 ">
                <a href="#">Kids</a>
              </li>
              <li className="pt-6 px-2 ">
                <a href="#">Baby</a>
              </li>
              <li className="pt-6 px-2 ">
                <a href="#">Shoes</a>
              </li>
              <li className="pt-6 px-2 ">
                <a href="#">Bags</a>
              </li>
              <li className="pt-6 px-2 ">
                <a href="#">Accessories</a>
              </li>
              <li className="pt-6 px-2 ">
                <a href="#">Watches</a>
              </li>
              <li className="pt-6 px-2 ">
                <a href="#">Cargo Trouser</a>
              </li>
              <li className="pt-6 px-2 ">
                <a href="#">Outerwear</a>
              </li>
              <li className="py-6 px-2 ">
                <a href="#">Watches</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
