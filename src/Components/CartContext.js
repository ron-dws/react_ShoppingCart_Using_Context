import React, { createContext, useState } from 'react'

export const CartContext = createContext();

export const CartProvider = (props) => {
    const [cart, setCartWith] = useState([]);
    return(
      <CartContext.Provider value={[cart, setCartWith]}>
             { props.children }
      </CartContext.Provider>
    )
}