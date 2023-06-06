import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import ItemCard from './ItemCard';
import Spinner from '../Spinner.gif'
import { ToastContainer } from 'react-toastify';
import AppContext from '../context/AppContext';

const CollectionCards = () => {
  const {products, setProducts} = useContext(AppContext)
  
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then((success) => {
        setProducts(success.data.products);
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  



  return (
    <div className='min-h-[80vh]'>
      {loading === true ? ( <div className='flex justify-center mt-10'><img alt='Loading' src={Spinner}/></div>  ) : ''}
      <ToastContainer/>

      <div className='flex justify-center'>
        <div className='grid grid-cols-5 gap-4 mt-10 '>


          {products.map((product, index) => (
            <ItemCard
              key={index}
              image={product.thumbnail}
              title={product.title}
              description={product.description}
            />
          ))}
        </div>

      </div>

    </div>
  );
};

export default CollectionCards;
