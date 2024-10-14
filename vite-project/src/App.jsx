import React from 'react'
import Data from './Datas.json'
import Product from './Product'

const App = () => {
  return (
    <div id="parent">
      {
        Data.map((e)=> {
          return(
          <Product img={e.image} title={e.title} description={e.description} price={e.price}/>
        )
        })
      }
    </div>
  )
}

export default App
