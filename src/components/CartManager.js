import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Cart from './Cart';

const CartManager = () => {
  const { clickedProduct, setClickedProduct } = useContext(AppContext);

  return (
    <div className='mt-10'>
      {clickedProduct === null
        ? ''
        : clickedProduct.map((product) => (
            <Cart key={product.id} product={product} />
          ))}
    </div>
  );
};

export default CartManager;
