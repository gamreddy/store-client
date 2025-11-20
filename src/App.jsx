import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from "./Footer";
import Header from "./Header";
import Products from "./Products";
import Detail from './Detail';
import Cart from "./Cart";
import Checkout from './Checkout';

function App() {
  const [cart, setCart] = useState([]);
  
  function addToCart(id, sku){
    setCart(items =>{
      const itemInCart = items.find(i => i.sku === sku);
      if(itemInCart){
        return items.map(i => i.sku === sku ? {...i, quantity: i.quantity + 1} : i);
      }else{
        return [...items, {id, sku, quantity: 1}];
      }
    });    
  }  

  function updateQuantity(sku, quantity){
    const itemInCart = cart.find(i => i.sku === sku);
    if(itemInCart){
      if(quantity === 0){
        setCart(items => items.filter(i => i.sku !== sku));
      }else{
        setCart(items => items.map(i => i.sku === sku ? {...i, quantity} : i));   
      }
         
    }
  }

  function emptyCart(){
    setCart([]);
  }  

  return (
    <>
      <div className="content">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<h1>Welcome to the Store.</h1>} />
            <Route path="/products/:category" element={<Products />} />
            <Route path="/cart" element={<Cart cart={cart} updateQuantity={updateQuantity}/>} />
            <Route path="/products/:category/:id" element={<Detail addToCart={addToCart}/>} />   
            <Route path="/checkout" element={<Checkout emptyCart={emptyCart}/>} />         
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  )
}

export default App
