import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import AppContext from '../context/AppContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ProductPage = () => {

  const { title } = useParams();
  const { clickedProduct, setClickedProduct, setEmpty, setCartIndex, setTotalItems, totalItems} = useContext(AppContext)

  const finalProduct = JSON.parse(localStorage.getItem('Product'))

  const findItem = clickedProduct.find((cart) => cart.title === title)
  const filteredItem = clickedProduct.find((items)=> items===findItem)



  const handleClick = () => {
    if (findItem) {
      toast.warn("Item Already Added to the cart", {
        autoClose: 2000,
        position: "bottom-left",
      })
    }
    else {
      toast.success("Item added to the cart", {
        autoClose: 2000,
        position: "bottom-left",
      })
      setClickedProduct(prevArray => [...prevArray, finalProduct])
      setCartIndex("none")
      setTotalItems(totalItems + 1)
      setEmpty(false)
    }
  }

  const handleRemove = () => {
    if(filteredItem){
      if(findItem){
        setClickedProduct((prevItems) => prevItems.filter((item) => item!==findItem));
      }
      if(totalItems<1){
        setCartIndex('invisible')
      }
      else{
        setTotalItems(totalItems-1)
      }
    }
    

  }


  return (
    <div>
      <ToastContainer />
      <div className='min-h-[80vh] container mt-10'>
        <h1>{finalProduct.title}</h1>
        <div className="flex">
          <img src={finalProduct.image} alt="" />
          <div className='mx-10 space-y-5 '>
            <h3 className='font-normal'>{finalProduct.description}</h3>
            <button onClick={handleClick} className=' p-2 rounded bg-blue-600 text-white hover:bg-blue-500'>Add to cart</button>
            <button onClick={handleRemove} className='mx-2 p-2 rounded bg-red-600 text-white hover:bg-red-500'>Remove From Cart</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ProductPage
