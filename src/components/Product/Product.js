import React from "react"
import style from './Product.module.css'

console.log(`Product =>> OK`)

let https    = 'https://'

let Product = ({
  imgUrl = `${https}home.com`,
  name,
  price = 0,
  buyLink = `${https}home.com from the default`,
  buyLinkName = `Click from the default`,
  qty = 0,
}) => {
  let PRODUCT_QTY = 50,
      inStock     = qty < PRODUCT_QTY,
      qtyClasses  = inStock ? style.available : style[`not-available`]

  return (
    <div className={`${style.block}`}>
      {
        name
          ? <h2 className={`${style.name}`}>{name}</h2>
          : <p>Add name 👉 <a href="google.com">Edit profile</a></p>
      }
      <img src={imgUrl} alt={``}/>
      <p>Price $<span>{price}</span></p>
      <a href="#">{buyLinkName}</a>
      <p className={`${style.qty}`}>Quantity: {qty} <span
        className={qtyClasses}>{inStock ? `Few left` : `In Stock`}</span></p>
      <button type={"submit"} value={`Send request`}>Get it</button>
    </div>
  )
}

export default Product
