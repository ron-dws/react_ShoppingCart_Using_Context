import React from 'react';
import { Tshirt } from './Tshirt';

export const TshirtList = () => {
    const database = [
        { name: "red one", price: 11.99, id:1 },
        { name: "blue one", price: 9.99, id:2 },
        { name: "magento one", price: 10.99, id:3 },
    ]

    const displayPrdcs = (val) => {
        let prdcs = val.map((item, index) => (
            <div key={index}>
                <li> {item.name}</li>
                <li> {item.price}</li>
            </div>
        ));
        return prdcs;
    }

    return(
        <>
          {
             database.map( (val) =>( 
                <Tshirt 
                    name={val.name} 
                    price={val.price} 
                    key={val.id} 
                />
             )) 
          }

        <div className="prdcs-display" style={{background:"dodgerblue", color:"white"}}>{displayPrdcs(database)}</div>
        </>
    )
}