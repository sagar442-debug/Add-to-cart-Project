import React, { useState } from 'react'

const Cart = () => {

    const [totalItems, setTotalItems] = useState(1)


    return (
        <div className='flex items-center ml-60 mt-10'>
            <div className='flex space-x-3 items-center'>
                <img className='h-24' src='https://i.dummyjson.com/data/products/1/thumbnail.jpg'></img>
                <div className='Details'>
                    <h5 className=''>Iphone 9 ultra pro max</h5>
                    <p>This is Details</p>
                    <div className='plus and minus flex space-x-2 '>
                        <button className='bg-slate-400 w-6 h-6'>+</button>
                        <p>{totalItems}</p>
                        <button className='bg-slate-400 w-6 h-6'>-</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
