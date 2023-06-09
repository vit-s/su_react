import React   from "react"
import './App.css'
import Product from "./Product"

// let https    = 'https://'
// let randLink = 'randomlink.com'
// let price    = 33
// let imgUrl   = `${https}${randLink}`
// let link = `google.com - from the let variable`
// let linkName = `Click from the let`

// let Product = ({
//   imgUrl = `${https}home.com`,
//   name = 'testname_if_none',
//   price = 0,
//   link = `${https}home.com from the default`,
//   linkName = `Click from the default`,
// }) => {
//
//   return (
//     <div className={`block`}>
//       <h2>{name}</h2>
//       <img src={imgUrl} alt={imgUrl}/>
//       <a href={link} target={`_blank`}>{linkName}</a>
//       <p>Price {price}</p>
//       <button type={"button"}>Get it</button>
//     </div>
//   )
// }

function App() {
  return (
    <>
      <h1>Product</h1>
      <Product/>
    </>
  )
}

export default App
