import React   from "react"
import './App.css'
import Product from "./Product"
import Section from "./Section"

let favoriteBooks = [
  {id: 'id-1', name: 'React'},
  {id: 'id-2', name: 'JS'},
  {id: 'id-3', name: 'Angular'},
  {id: 'id-4', name: 'HTML'},
]

let App = () => {
  return (
    <>
      <h1>Welcome</h1>
      <Section
        title={`Best products`}
        // classSection={`first_prod`}
        idSection={`welc_prod`}
      >
        <Product
          name={`Apples for sale`}
        />
      </Section>
      <Section
        title={`Recommended`}
        classSection={`second_prod`}
        idSection={`recc_prod`}
      >
        <p>
          New classSection and ID
        </p>
        <Product
          name={`Oranges`}
          price={`40`}
        />
      </Section>
    </>
  )
}

export default App
