import React, {useContext} from 'react';
import {CartContext} from './CartContext';

export const Tshirt = (props) => {
   const [cart, setCartWith] = useContext(CartContext);
   
   const addCart = ()=>{

       const prdc_in_cart = { name: props.name, price: props.price }

       //Check if the product already exist before adding to the cart
       var hasDuplicates = cart.some((current_Incart) => {
        if(current_Incart.name === props.name){
               return true;
           }else{
               return false;
           } 
        });

        if(hasDuplicates){

            //The product is already inside the cart
            alert("product already in cart"); 
            return;

        }else{

            //We add the product to the cart
            setCartWith(current_cartState => [...current_cartState, prdc_in_cart]);
        }    
   }

    return(
        <>
         <div style={{ textAlign:"left", paddingLeft:"20px"}}>
           <h2>{ props.name }</h2>
           <h4>${ props.price }</h4>
           <button onClick={ addCart }>add to cart</button>
           <br/><br/>
           <hr/>
         </div> 
        </>
    )
}
