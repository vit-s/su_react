import React   from "react"
import './App.css'
import Product from "./Product"

let App = () => {
  return (
    <>
      <h1>Welcome</h1>
      <section>
        <h2>Best product</h2>
        <Product name={`Apples for sale`}/>

      </section>
      <section>
        <h2>Recommended products</h2>
        <Product/>
      </section>
    </>
  )
}

export default App
