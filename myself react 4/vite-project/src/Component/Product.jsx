import React from 'react'
import "./Productpro.css"
const Product = (props) => {
  return (
    <div id="pro">
        <img src={props.imga} alt="loading"/>
      <h3>{props.title}</h3>
      <h4>{props.price}</h4>
    </div>
  )
}

export default Product
