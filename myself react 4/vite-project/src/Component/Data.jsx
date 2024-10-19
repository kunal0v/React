import React from 'react'
import './deta.css'

const Data = (props) => {
  return (
    <div id="deta">
        <h1>Name:{props.name}</h1>
        <h2> college:{props.clg}</h2>
        <img src={props.image} alt="loading"/>
    </div>
  )
}
export default Data
