import React, { useContext, useState } from 'react'
import AppContext from '../context/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Cart = ({ product, setCartItem}) => {

    const [value, setValue] = useState(1)
    const {totalItems, setTotalItems,setCartIndex} = useContext(AppContext)

    const increment = () => {
        setValue(value + 1)
    }
    const decrement = () => {
        setValue(value > 1 ? value - 1 : 1);

    }

    const handleDelete =()=>{
        setCartItem((prevItems) => prevItems.filter((item) => item.title !== product.title));
        setTotalItems(totalItems -1 )
        
    }

    return (
        <>


            {product === null ? "" : (
                <div className='flex items-center justify-center mt-2'>
                    <div className='flex  items-center justify-between border border-black p-6 w-[65rem]'>
                        <div className="separate flex space-x-3 items-center">
                            <img className='h-24 w-40' src={product.image} alt={product.title} />
                            <div className='Details'>
                                <h5>{product.title}</h5>
                                <p className='p-2'>{product.description.length > 20 ? `${product.description.slice(0, 60)}...` : product.description}</p>
                                <div className='plus and minus flex items-center space-x-2'>
                                    <button className='bg-slate-400 w-6 h-6' onClick={increment}>+</button>
                                    <p className='mt-3'>{value}</p>
                                    <button className='bg-slate-400 w-6 h-6' onClick={decrement}>-</button>
                                    <button onClick={handleDelete} className='mx-3'>
                                        <FontAwesomeIcon icon={faTrash} className='text-black' />
                                    </button>
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
