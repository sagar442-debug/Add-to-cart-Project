import './App.css';
import Header from './components/Header'
import About from './components/About'
import CollectionCards from './components/CollectionCards';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import User from './components/User';
import AppContext from './context/AppContext';
import { useState } from 'react';
import CartManager from './components/CartManager';
function App() {
  const [clickedProduct, setClickedProduct] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [cartIndex, setCartIndex] = useState("invisible")
  const [empty, setEmpty] = useState(true)


  const contextValue = {
    clickedProduct,
    setClickedProduct,
    totalItems,
    setTotalItems,
    cartIndex,
    setCartIndex,
    empty, 
    setEmpty
  }
  return (

    <BrowserRouter>

      <AppContext.Provider value={contextValue} >
      <Header />
        <Routes>
          <Route path="/" element={<CollectionCards />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<CartManager />} />
          <Route path="/user" element={<User />} />
        </Routes>

      </AppContext.Provider> 

    </BrowserRouter>




  );
}

export default App;
