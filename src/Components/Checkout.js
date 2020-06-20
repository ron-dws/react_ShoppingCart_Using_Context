import React, {Component, useState, useContext} from "react";
import { CartContext } from "./CartContext";


export const Checkout = () => {
   const [cart, setCartWith] = useContext(CartContext);
   console.log(JSON.stringify(cart));

   const new_all_prdcs = JSON.parse(localStorage.getItem("allprdcs"));

   console.log(JSON.stringify(new_all_prdcs));
   const checkoutPage = (cart) => {
    if(!cart){
        const emptyCart = <h4 style={{color:"red"}}>No Product in cart</h4>;
        return  emptyCart;
    }
    const prdcsInCart =  cart.map((val, index )=>(
                             <div key={ index }>
                                <ul style={{listStyle:"none", display:"flex", width:"100%", justifyContent:"center" }}>
                                    <li style={{padding:"8px"}}>{val.name}</li>
                                    <li style={{padding:"8px"}}>{val.price}</li>
                                </ul>
                              </div>
                         ))
       return  prdcsInCart;
   }
    return(
        <>
          <div>{ checkoutPage(new_all_prdcs) }</div>
        </>
    )
}