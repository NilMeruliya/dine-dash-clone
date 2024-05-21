import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import ItemCard from './ItemCard';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const [activeCart, setActiveCart] = useState(false)

  const navigate = useNavigate();

  // state.cart.cart: first cart is reducer(slice), second cart is initialState(actual state name)
  const cartItems = useSelector((state) => state.cart.cart)

  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const subtotal = +cartItems.reduce((subtotal, item) => subtotal + item.qty * item.price, 0).toFixed(2);

  const tax = +(subtotal * 13 / 100).toFixed(2);

  const totalPrice = +(subtotal + tax).toFixed(2);

  
  console.log(cartItems);

  return (
    <>
    <div
      className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full p-5 bg-white mb-3
      ${activeCart ? "translate-x-0" : "translate-x-full"}
      transition-all duration-500 z-50`}
    >
      <div className="flex justify-between items-center my-3">
        <span className="text-xl font-bold text-gray-800">My Order</span>
        <IoMdClose
          onClick={() => setActiveCart(!activeCart)}
          className="border-2 border-gray-600 text-gray-600 font-bold  p-1 text-xl  rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer"
        />
      </div>

{
  cartItems.length > 0 ?
  cartItems.map((ele) => 
  <div  key={ele.id}>
  <ItemCard  
   
    foodName={ele.foodName}
    id={ele.id}
    price={ele.price}
    img={ele.srcImg}
    qty={ele.qty}
    />

<div className="absolute bottom-0 ">

        <h3 className="font-semibold text-gray-800">{totalQty === 1 ? "Item : " : "Items : "}  
         {` ${totalQty}`}
         </h3>
         
        <h3 className="font-semibold text-gray-800">
          Subtotal : 
           ${subtotal}

        </h3>
        <h3 className="font-semibold text-gray-800">HST : ${`${tax}`}
         </h3>
         <h3 className="font-semibold text-gray-800">
          Total Amount :
           ${totalPrice}

        </h3>
        <hr className="w-[90vw] lg:w-[18vw] my-2" />
        <button
          onClick={() => navigate("/success")}
          className="bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-[90vw] lg:w-[18vw] mb-5"
        >
          Checkout
        </button>
      </div>
  </div>
   )
    : <>
    <h2 className="text-center text-xl font-bold text-gray-800">
          Your cart is empty
        </h2>

        <button
           onClick={() => {
            setActiveCart(!activeCart)
            navigate("/")
           }
           }
          className="bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-[90vw] lg:w-[18vw] mb-5"
        >
          Search Items
        </button>
    </> 
}

    </div>
    <FaShoppingCart
      onClick={() => setActiveCart(!activeCart)}
      className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4  ${cartItems.length > 0 && "animate-bounce delay-500 transition-all"}`}
    />
  </>
  )
}

export default Cart
