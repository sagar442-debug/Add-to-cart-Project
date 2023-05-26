import React, { useContext, useState } from 'react'
import AppContext from '../context/AppContext';

const Cart = ({product}) => {

    
    
    return (
        <>
         

            {product=== null ? null: (<div className='flex items-center justify-center mt-2 '>
            <div className='flex space-x-96 items-center justify-around border border-black p-6 w-[65rem]'>
                <div className="separate flex space-x-3 items-center">
                <img className='h-24' src={product.image}></img>
                <div className='Details'>
                    <h5 className=''>{product.title}</h5>
                    <p>{product.description.length>20? product.description.slice(0,30): product.description}...</p>
                    <div className='plus and minus flex space-x-2 '>
                        <button className='bg-slate-400 w-6 h-6'>+</button>
                        <p>1</p>
                        <button className='bg-slate-400 w-6 h-6'>-</button>
                    </div>
                </div>
                </div>
                <button className='bg-rose-600 hover:bg-rose-700 text-white p-2'>Buy Now</button>
                
            </div>
        </div>)}
        
        </>
        
    )
}

export default Cart
