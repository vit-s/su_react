import React from "react"
// import "./Product.css"
import './Product.module.css'

let https    = 'https://'
let reg_link = 'google.com'

let Product = ({
  imgUrl = `${https}home.com`,
  name,
  price = 0,
  link = `${https}home.com from the default`,
  linkName = `Click from the default`,
  qty = 0,
}) => {
  let PRODUCT_QTY = 50
  let inStock     = qty < PRODUCT_QTY
  let qtyClasses  = ['Product_qty', inStock ? 'available' : 'not-available'].join(' ')

  return (
    <div className={`block Product`}>
      {
        name
          ? <h2>{name}</h2>
          : <p>Add name 👉 <a href="google.com">Edit profile</a></p>
      }
      <img src={imgUrl} alt={``}/>
      <a href={link} target={`_blank`}>{linkName}</a>
      <p>Price $<span>{price}</span></p>
      <p className={`Product_qty`}>Quantity: {qty} <span
        className={qtyClasses}>{inStock ? `Few left` : `In Stock`}</span></p>
      <button type={"button"}>Get it</button>
    </div>
  )
}

export default Product
