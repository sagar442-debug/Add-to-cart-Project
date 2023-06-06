import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import AppContext from '../context/AppContext';

const ProductPage = () => {
    let {title} = useParams();
    let {products} = useContext(AppContext)
    
    console.log(products)


    const product = products.find((product)=> product.title===title)

    localStorage.setItem('Product', JSON.stringify(product))

    const finalProduct = JSON.parse(localStorage.getItem('Product'))

    console.log(finalProduct)


  return (
    <div className='min-h-[80vh] text-center'>
      <h1>{finalProduct.title}</h1>
      <img  alt="" />
    </div>
  )
}

export default ProductPage
