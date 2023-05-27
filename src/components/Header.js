import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useContext, useEffect, useState } from 'react';
import AppContext from '../context/AppContext';


function Header() {
    
    const {totalItems, setTotalItems, cartIndex, setCartIndex} = useContext(AppContext)
    
    useEffect(() => {
        if (totalItems === 0) {
          setCartIndex('invisible');
        } else {
          setCartIndex('');
        }
      }, [totalItems, setCartIndex]);
    
    return (
        <>
            <nav className='bg-[#2c2424] flex items-center justify-between px-20 py-5 ' >
                <div className='flex items-center text-white '>
                    <Link className='no-underline text-white text-3xl font-semibold border-r-2 px-6 border-zinc-500' to="/">Shoppers Mart</Link>
                    <div className="mx-20 space-x-10">
                    <Link className='no-underline text-white text-base hover:border-b-2 hover:border-white ' to="/about">About</Link>
                    <Link className='no-underline text-white text-base hover:border-b-2 hover:border-white ' to="/cart">Cart</Link>

                    </div>
                </div>
                <div className=' space-x-5 flex items-center'>
                    <Link to="/user"><FontAwesomeIcon icon={faUser} className='text-white' /></Link>

                    <div className={`bg-red-600 h-4 w-5 rounded-full flex justify-center relative left-6 top-2 text-white ${cartIndex}`} >
                        <h1 className='text-xs font-semibold'>{totalItems}</h1>
                    </div>

                    <Link className='flex' to="/cart">
                        <FontAwesomeIcon icon={faCartShopping} className='text-white' /></Link>

                </div>
            </nav>
        </>
    );
}

export default Header;