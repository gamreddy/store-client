import { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from "./Footer";
import Header from "./Header";
import Products from "./Products";
import Detail from './Detail';
import Cart from "./Cart";
import Checkout from './Checkout';
import cartReducer from './cartReducer';

function App() {
  const [cart, dispatch] = useReducer(cartReducer, []);
  
  return (
    <>
      <div className="content">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<h1>Welcome to the Store.</h1>} />
            <Route path="/products/:category" element={<Products />} />
            <Route path="/cart" element={<Cart cart={cart} dispatch={dispatch}/>} />
            <Route path="/products/:category/:id" element={<Detail dispatch={dispatch}/>} />   
            <Route path="/checkout" element={<Checkout dispatch={dispatch}/>} />         
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  )
}

export default App
