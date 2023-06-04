import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ItemCard from './ItemCard';
import Spinner from '../Spinner.gif'

const CollectionCards = () => {
  const [products, setProducts] = useState([]);
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
    <div className=''>
      {loading === true ? ( <div className='flex justify-center mt-10'><img src={Spinner}/></div>  ) : ''}

      <div className='flex justify-center'>
        <div className='grid grid-cols-5 gap-4 mt-10 cursor-pointer '>


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
