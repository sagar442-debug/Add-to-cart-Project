

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';


function Header() {
    const [cartIndex, setCartIndex] = useState("hidden")
    return (
        <>
            <nav className='bg-cyan-950 flex items-center justify-between px-4 py-3 ' >
                <div className='flex space-x-5 items-center text-white '>
                    <a className='no-underline text-white text-4xl' href="">Shopping</a>
                    <a className='no-underline text-white text-xl ' href="">Home</a>
                    <a className='no-underline text-white text-xl ' href="">Cart</a>
                </div>
                <div className=' space-x-5 flex items-center'>
                    <a href=""><FontAwesomeIcon icon={faUser} className='text-white' /></a>

                    <div className={`bg-red-600 h-4 w-4 rounded-full relative left-6 top-2 text-white ${cartIndex}`} >
                        <h1 className='text-xs font-semibold'>1</h1>
                    </div>

                    <a className='flex' href="">
                        <FontAwesomeIcon icon={faCartShopping} className='text-white' /></a>

                </div>
            </nav>
        </>
    );
}

export default Header;