import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "./store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart);

  const handleRemove = (cartId) => {
    dispatch(remove(cartId));
  };

  return (
    <div>
      <h1 className="text-2xl text-center pt-10 font-semibold">Add to cart</h1>
      {cartData.map(({ img, title, price, id }, index) => {
        return (
          <div
            key={index}
            className="flex justify-between items-center border my-10 mx-20 bg-gray-100 shadow-md hover:scale-x-105 transition-transform duration-300 ease-in-out"
          >
            <div className="flex items-center gap-10">
              <img src={img} alt="" className="w-28" />
              <p className="font-semibold">{title}</p>
            </div>
            <div>
              <p className="font-medium">{price}</p>
            </div>
            <div>
              <button
                className="border border-black py-3 px-6 mr-4 text-sm font-semibold hover:bg-gray-600 hover:text-white transition-all duration-300 ease-in-out shadow-lg"
                onClick={() => handleRemove(id)}
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
