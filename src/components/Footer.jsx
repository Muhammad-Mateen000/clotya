import React from "react";

const Footer = () => {
  return (
    <div className="sm:flex justify-between py-10 max-w-7xl m-auto">
      <div>
        <p className="text-xs">
          Copyright 2024 © Clotya WordPress Theme. All right reserved. Powered
          by KLBTheme.
        </p>
      </div>
      <div>
        <img src="/public/img/cards.webp" alt="" />
      </div>
      <div className="flex text-xs gap-3 ">
        <p className="border-r-2 pr-3">Privacy Policy</p>
        <p className="border-r-2 pr-3">Terms and Conditions</p>
        <p>Returns Policy</p>
      </div>
    </div>
  );
};

export default Footer;
