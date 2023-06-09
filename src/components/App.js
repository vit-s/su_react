import React   from "react"
import './App.css'
import Product from "./Product"
import Section from "./Section"

let App = () => {
  return (
    <>
      <h1>Welcome</h1>
      <Section title={`Best products`}>
        <Product name={`Apples for sale`}/>
      </Section>
      <Section title={`Recommended`}>
        <Product name={`Oranges`} price={`40`}/>
      </Section>
    </>
  )
}

export default App
