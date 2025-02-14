import React from "react";
import { ChevronDown } from 'lucide-react';

const navbar = [
  {
    title: "HOME" ,
    href: "/",
    
  },
  {
    title: "SHOP",
    href: "/",
    children: [
      {
        title: "T-Shirts",
        href: "/",
      },
      {
        title: "Pents",
        href: "/",
      },
      {
        title: "Jeans",
        href: "/",
      },
      {
        title: "Cotton Pent",
        href: "/",
      },
      {
        title: "Trowser",
        href: "/",
      },
      {
        title: "Track Suit",
        href: "/",
      },
    ],
  },
  {
    title: "WOMEN",
    href: "/",
  },
  {
    title: "MEN",
    href: "/",
  },
  {
    title: "OUTERWEAR",
    href: "/",
  },
  
  {
    title: "BLOG",
    href: "/",
  },
  {
    title: "CONTACT",
    href: "/",
  },
];

const NavList = () => {
  return (
    <>
    <div className="font-semibold hidden sm:block">
      <ul className="flex gap-6">
        {navbar.map(({ title, href, children }, index) => {
          return (
            <li key={index} className="relative group py-8">
              <a href={href} className="flex">{title}{children && <ChevronDown size={20} className="pt-1"/>}</a>
              {children && <Dropdown list={children} />}
            </li>
          ); 
        })}
      </ul>
    </div>
    <div>
    
    </div>
    </>
  );
};

const Dropdown = ({list})=>{
  return <ul className="-left-6 absolute w-52 h-56 bg-white hidden group-hover:block border pt-2 px-6 font-normal top-full z-50">
    {list.map(({title, href})=>(
      <li className="pt-2">
        <a href={href}>{title}</a>
        </li>
    ))}
  </ul>
}

export default NavList;
