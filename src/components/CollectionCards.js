import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ItemCard from './ItemCard'





const CollectionCards = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        axios
        .get("https://dummyjson.com/products")
        .then((success)=>{
            setProducts(success.data.products)

        })
        .catch((error)=>{
            console.log(error)
        })
    },[])

    console.log("Total products", products)


    return (
        <div className='columns-3'>
            {products.map((products)=>{
                return(
                    <ItemCard image={products.thumbnail} title={products.title} description={products.description}/>
                )
            })}
        </div>
    )
}

export default CollectionCards
