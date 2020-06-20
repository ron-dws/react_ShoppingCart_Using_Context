import React, { useContext, useRef } from 'react';
import { CartContext } from './CartContext';

export const InCart = () => {
   const [cart, setCartWith] = useContext(CartContext);
   const totalPrice = cart.reduce((val, curr)=> val + curr.price, 0);
   console.log(cart);

   //Use useEffect to save the cart data permanently in a local storage
//    React.useEffect(() => {
//        const data = localStorage.getItem("allprdcs");
//        if(data){
//            setCartWith(JSON.parse(data));
//        }
//    }, []);

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
              <li style={{padding:"13px", color:"white", width:"50px", height:"50px", borderRadius:"100%", cursor:"pointer", background:"red"}} onClick={ e => deletePrdc(e, index) }>X</li>
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
   return(
      <>
        <span>Item: { disPrdName(cart) } </span>
        <br/>
        <span>Total: ${ totalPrice }</span>
      </>
   )
}