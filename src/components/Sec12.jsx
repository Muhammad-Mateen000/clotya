import React from "react";

const Sec12 = () => {
  return (
    <div className="bg-black">  
      <div className="sm:flex justify-between sm:mt-20 mt-10 max-w-7xl m-auto text-white py-20 px-4">
        <div>
          <h3 className="text-3xl sm:w-96">
            Get our emails for info on new items, sales and more.
          </h3>
          <p className="text-gray-500 font-semibold py-3">
            We'll email you a voucher worth £10 off your first order over £50.
          </p>
          <div className="border sm:w-[500px] flex justify-between mt-4">
            <input
              className="outline-none p-2 sm:w-96"
              type="text"
              placeholder="Enter your email address"
            />
            <button className="w-28 font-semibold">Subscribe</button>
          </div>
          <p className="text-xs text-gray-500 pt-2"> 
            By subscribing you agree to our Terms & Conditions and Privacy &
            Cookies Policy.
          </p>
        </div>

        {/* div two */}

        <div>
          <h4 className="text-3xl">Need help?</h4>
          <h5 className="text-3xl">(+800) 1234 5678 90</h5>
          <p className="py-3 text-gray-500">We are available 8:00am – 7:00pm</p>
          <div className="flex pt-3 items-center gap-2">
            <img src="/public/img/app-store.webp" alt="" />
            <img className="h-9" src="/public/img/google-play.webp" alt="" />
          </div>
          <p className="text-xs pt-2 text-gray-500">
            Shopping App: Try our View in Your Room feature, manage registries
            and save payment info.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sec12;
