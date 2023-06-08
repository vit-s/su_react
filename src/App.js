import React from "react"
import './App.css';

let https = 'https://'
let randLink = 'random link'
let price = 33
let imgUrl = `${https}image.link${randLink}`
let link = `google.com`

let Product = (props) => {
  let {imgUrl, name, price, link} = props
  return (
    <div className={`block`}>
      <h2>{props.name}</h2>
      <img src={props.imgUrl} alt={props.imgUrl}/>
      <a href={props.link} target={`_blank`}>Buy now</a>
      <p>Price {props.price}</p>
      <button type={"button"}>Get it</button>
    </div>
    )
}
function App() {
  return (
    <>
      <h1>Product</h1>
      <Product imgUrl={``} name={`Kebab and lavash`} price={20} link={`google.com`}/>
      {/*<Product/>*/}
      {/*<Product/>*/}
    </>
  )
}

export default App;
