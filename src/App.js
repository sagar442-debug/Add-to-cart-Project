import './App.css';
import Header from './components/Header'
import About from './components/About'
import CollectionCards from './components/CollectionCards';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import User from './components/User';
function App() {
  return (
    <BrowserRouter>
    <Header/>
    

      <Routes>
        <Route path="/" element={<CollectionCards />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/user" element={<User />} />
        
      </Routes>

    </BrowserRouter>
     
      
      

  );
}

export default App;
