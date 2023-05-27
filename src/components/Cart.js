import React, { useContext, useState } from 'react'
import AppContext from '../context/AppContext';

const Cart = ({ product }) => {

    const [value, setValue] = useState(1)

    const increment = () => {
        setValue(value + 1)
    }
    const decrement = () => {
        value < 1 ? setValue(0) : setValue(value - 1)

    }

    return (
        <>


            {product === null ? "" : (
                <div className='flex items-center justify-center mt-2'>
                    <div className='flex space-x-96 items-center justify-around border border-black p-6 w-[65rem]'>
                        <div className="separate flex space-x-3 items-center">
                            <img className='h-24 w-40' src={product.image} alt={product.title} />
                            <div className='Details'>
                                <h5>{product.title}</h5>
                                <p>{product.description.length > 20 ? `${product.description.slice(0, 30)}...` : product.description}</p>
                                <div className='plus and minus flex space-x-2'>
                                    <button className='bg-slate-400 w-6 h-6' onClick={increment}>+</button>
                                    <p>{value}</p>
                                    <button className='bg-slate-400 w-6 h-6' onClick={decrement}>-</button>
                                </div>
                            </div>
                        </div>
                        <button className='bg-rose-600 hover:bg-rose-700 text-white p-2'>Buy Now</button>
                    </div>
                </div>
            )}


        </>

    )
}

export default Cart
