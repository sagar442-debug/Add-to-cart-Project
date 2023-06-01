import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import Cart from './Cart';

const CartManager = () => {
  const { clickedProduct, setClickedProduct, empty } = useContext(AppContext);


  return (
    <div className='mt-10'>
      
      {empty=== true? (<h1 className='text-center'>Please add Items to the cart to display</h1>):""}

      
      {clickedProduct === false
        ? ""
        : clickedProduct.map((product,index) => (
            <Cart key={index} product={product} index={index} setCartItem={setClickedProduct}/>
          ))}
    </div>
  );
};

export default CartManager;
