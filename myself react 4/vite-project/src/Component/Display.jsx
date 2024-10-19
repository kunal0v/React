import React from 'react'
import pro from "./Prooo.json"
import Product from './Product'
import "./DisplayPro.css"
const Display = () => {
  return (
    <div id='pro1'>
      {
        pro.map((e)=>{
            return(
                <Product 
                imga={e.image}
                title={e.title}
                price={e.price}></Product>
            )
        })
        
      }
    </div>
  )
}

export default Display
