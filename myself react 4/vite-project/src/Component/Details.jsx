import React from 'react'

const Details = (props) => {
  return (
    <div id='detail'>
        <img src={props.photo}  alt="dfkdfl"/>
        <h1>Name: {props.name}</h1>
        <p>{props.desc}</p>
    </div>
  )
}

export default Details
