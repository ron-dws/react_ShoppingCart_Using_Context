import React, { useContext, useRef } from 'react';
import { CartContext } from './CartContext';

export const InCart = () => {
   const [cart, setCartWith] = useContext(CartContext);
   const totalPrice = cart.reduce((val, curr)=> val + curr.price, 0);
   console.log(cart);

  // Use useEffect to save the cart data permanently in a local storage
   React.useEffect(() => {
       const data = localStorage.getItem("allprdcs");
       if(data){
           setCartWith(JSON.parse(data));
       }
   }, []);

   React.useEffect(() => {
       localStorage.setItem("allprdcs", JSON.stringify(cart));
   });


   //read cart from loccalstorage
   const disPrdName = (cart) => {

      console.log("prd :: " + JSON.stringify(cart));

      let prdcNameInCart = cart.map((val, index)=>(
          //track if that item is already inside the cart
          //loop through the cart and compare value
          <div key={index}>
            <ul style={{listStyle:"none", display:"flex", margin:"5px", width:"100%", justifyContent:"center"}}>
              <li style={{padding:"10px"}}>{val.name}</li>
              <li style={{padding:"10px"}}>{val.price}</li>
              <li style={{padding:"1px", marginTop:"10px", color:"white", width:"25px", height:"25px", borderRadius:"100%", cursor:"pointer", background:"red"}} onClick={ e => deletePrdc(e, index) }>X</li>
            </ul>
          </div> 
      ));
      return prdcNameInCart;

   }

   const deletePrdc = (e, prdcindex) => {
       //alert(prdcindex);
       cart.splice(prdcindex,1); //remove product to the cart
       
       //localStorage.removeItem("allprdcs");
       console.log(cart);
       disPrdName(cart);
   }

   const cleanCart = (e) => {
       e.preventDefault();
       localStorage.removeItem("allprdcs");
   }

   const sendToCheckout = (e) =>{
       e.preventDefault();
       //alert("checkout");
       window.location.href = "./checkout";

   }
   return(
      <>
        <span>Item: { disPrdName(cart) } </span>
        <br/>
        <span>Total: ${ totalPrice }</span>
        <br/>
        <button type="button" style={{padding:"6px", borderRadius:"5px", margin:"5px", border:"none",background:"dodgerblue", color:"white" }} onClick={e => sendToCheckout(e) }>Checkout</button>
        <button type="button" style={{padding:"6px", borderRadius:"5px", margin:"5px", border:"none",background:"dodgerblue", color:"white" }} onClick={ e => cleanCart(e)}>clean cart</button>
      </>
   )
}