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
            <nav className='bg-cyan-950 flex items-center justify-between px-4 py-3 ' >
                <div className='flex space-x-5 items-center text-white '>
                    <Link className='no-underline text-white text-4xl' to="/">Shopping</Link>
                    <Link className='no-underline text-white text-xl ' to="/about">About</Link>
                    {/* <Link className='no-underline text-white text-xl ' to="/cart">Cart</Link> */}
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