import React from 'react'
import cartBuy from "../assets/cart-buy.svg";

export default function Cart() {
  return (
    <div className='pl-[72.75px] pr-[100px]'>
        <img src={cartBuy} alt="Cart Icon" className='w-6 h-6' />
    </div>
  )
}
