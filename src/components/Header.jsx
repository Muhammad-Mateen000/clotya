import React, { useState } from "react";
import Logo from "./Logo";
import NavList from "./NavList";
import Button from "./Button";
import SideMenu from "./SideMenu";
import { Menu } from "lucide-react";

const Header = () => {
  const [isSideVisible, setIsSideVisible] = useState(false);

  return (
    <div className="max-w-7xl">
    <div className="flex sm:px-10 px-2 gap-6 justify-between fixed z-10 bg-white w-full ">
      <div className="flex gap-8">
        <div className="sm:py-8 py-4">
        <Menu onClick={() => setIsSideVisible(true)} className="pl-4 w-full sm:pl-0"/>
        </div>
        <Logo />
        <NavList />
      </div>
      <div>
        <Button />
      </div>
      <SideMenu isVisible={isSideVisible} onClick={() => setIsSideVisible(false)} />
    </div>
    </div>
  );
};

export default Header;
