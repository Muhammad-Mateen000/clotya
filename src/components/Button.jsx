import React, { useState } from 'react'
import { User } from 'lucide-react';
import { Search } from 'lucide-react';
import { Heart } from 'lucide-react';
import { Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCsrtItems } from '../store/cartSlice';


  const Button = () => {
  const {isSideVisible, setIsSIteVisible} = useState(false);
  const cartItems = useSelector(selectCsrtItems);
  const totalItems = cartItems.length;
  
  return (
    <div className='flex gap-4 sm:py-8 py-4 pr-4 sm:pr-0'>
       <User className='hidden sm:block'/>
       <Search className='hidden sm:block'/>
       <Heart className='hidden sm:block' />
       <Link to={"/cart"}>
       <span className='absolute font-bold bg-red-600 px-1 sm:right-9 right-5 sm:top-8 top-4 rounded-lg text-[10px] cursor-pointer text-white'>
        {totalItems}
        </span>
       <Lock/>
       </Link>
    </div>
  )
}

export default Button;
