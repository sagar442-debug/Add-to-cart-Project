import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AppContext from '../context/AppContext';

function ItemCard(props) {
  const { setClickedProduct, totalItems, setTotalItems, setCartIndex, setEmpty} = useContext(AppContext);

  const handleCart=()=>{
    setClickedProduct(prevArray => [...prevArray,props])
    setCartIndex("none")
    setTotalItems(totalItems + 1)
    setEmpty(false)
  }


  return (
    <Card  className=' w-80 p-10 '>
      <Card.Img variant="top" className='h-36 w-40' src={props.image} />
      <Card.Body>
        <Card.Title>{props.title > 10 ? props.title.slice(0,10):props.title}</Card.Title>
        <Card.Text className=''>
        {props.description.length>10 ? props.description.slice(0,50) : props.description }
        </Card.Text>
        <h5>${props.brand}</h5>
        <Button variant="primary" onClick={handleCart}>Add To Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default ItemCard;