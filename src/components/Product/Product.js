import React from "react"
// import "./Product.css"
import style from './Product.module.css'

let https    = 'https://'
let reg_link = 'google.com'

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
      // let qtyClasses = ['Product_qty', inStock ? `${style.available}` : `${style['not-available']}`].join(' ')
      qtyClasses  = inStock ? style.available : style[`not-available`],
      fastConnect = 'online'

  return (
    <div className={`${style.block}`}>
      {
        name
          ? <h2 className={`${style.name}`}>{name}</h2>
          : <p>Add name 👉 <a href="google.com">Edit profile</a></p>
      }
      <img src={imgUrl} alt={``}/>
      <a href={buyLink} target={`_blank`}>{buyLinkName}</a>
      <p>Price $<span>{price}</span></p>
      <p className={`${style.qty}`}>Quantity: {qty} <span
        className={qtyClasses}>{inStock ? `Few left` : `In Stock`}</span></p>
      <button type={"button"}>Get it</button>
    </div>
  )
}

export default Product
