import React from 'react';
import './App.css';
import './CSS/mainStyle.css';
import { Home } from './Components/Home';
import { CartProvider } from './Components/CartContext';
import { Checkout } from './Components/Checkout';
import { ErrorPage } from './Components/ErrorPage';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
       <h1>My Shopping Cart</h1>
       <BrowserRouter>
        
          <CartProvider>
           <Switch>
             <Route exact path="/" component={Home} />
             <Route path="/checkout" component={Checkout} />
             <Route path="*" component = { ErrorPage } />
            </Switch>
          </CartProvider>
        
       </BrowserRouter>
    </div>
  );
}

export default App;
