import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AppContext from '../context/AppContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useParams } from 'react-router-dom';



function ItemCard(props) {
  const { setClickedProduct, clickedProduct, totalItems, setTotalItems, setCartIndex, setEmpty, notify} = useContext(AppContext);

  const handleCart=()=>{

    const findItem = clickedProduct.find((cart)=> cart.title === props.title)

    if(findItem){
      toast.warn("Item Already Added to the cart",{
        autoClose: 2000,
        position: "bottom-left",
      })
    }
    else{
      toast.success("Item added to the cart",{
        autoClose: 2000,
        position: "bottom-left",
      })
      setClickedProduct(prevArray => [...prevArray,props])
      setCartIndex("none")
      setTotalItems(totalItems + 1)
      setEmpty(false)
    }


  }

  const handleClick=()=>{
    localStorage.setItem('Product', JSON.stringify(props))

  }

  
 




  return (

    <Card  className=' w-80 p-10 cursor-pointer'>
      <Link to={`/product/${props.title}`}>
      <Card.Img onClick={handleClick} variant="top" className='h-36 w-40' src={props.image} />
      </Link>
      <Card.Body>
        <Card.Title>{props.title > 10 ? props.title.slice(0,10):props.title}</Card.Title>
        <Card.Text className=''>
        {props.description.length>10 ? props.description.slice(0,50) : props.description }
        </Card.Text>
        
        <Button variant="dark" onClick={handleCart}>Add To Cart</Button>
        
        
      </Card.Body>
    </Card>
  );
}

export default ItemCard;