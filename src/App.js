import React from 'react';
import './App.css';
import './CSS/mainStyle.css';
import { InCart } from './Components/InCart';
import { TshirtList } from './Components/TshirtList';
import { CartProvider } from './Components/CartContext';

const App = () => {
  return (
    <div className="App">
       <h1>My Shopping Cart</h1>
       <CartProvider>

         <InCart />
         <TshirtList />
         
       </CartProvider>
      
    </div>
  );
}

export default App;
