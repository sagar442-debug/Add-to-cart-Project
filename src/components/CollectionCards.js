import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ItemCard from './ItemCard';

const CollectionCards = () => {
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then((success) => {
        setProducts(success.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  

  return (
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
  );
};

export default CollectionCards;
