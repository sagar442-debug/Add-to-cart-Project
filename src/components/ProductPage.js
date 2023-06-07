import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import AppContext from '../context/AppContext';

const ProductPage = () => {
    let {title} = useParams();
    console.log(title)

    const finalProduct = JSON.parse(localStorage.getItem('Product'))

    


  return (
    <div className='min-h-[80vh] container mt-10'>
      <h1>{finalProduct.title}</h1>
      <div className="flex">
      <img src={finalProduct.image} alt="" />
      <div className='mx-10 space-y-5 '>
      <h3 className='font-normal'>{finalProduct.description}</h3>
      <button className=' p-2 rounded bg-blue-600 text-white hover:bg-blue-500'>Add to cart</button>
      </div>
      </div>
    </div>
  )
}

export default ProductPage
