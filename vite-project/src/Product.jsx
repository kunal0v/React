import React from 'react'
import './App.css'
const Product = (props) => {
  return (
    <div id="pata">
        <img src={props.img}/>
        <h3>{props.title}</h3>
        <h6>{props.description}</h6>
        <p>{props.price}</p>
    </div>
  )
}
export default Product
