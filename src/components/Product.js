import React from "react"

let https    = 'https://'
let randLink = 'randomlink.com'
let price    = 33
let imgUrl   = `${https}${randLink}`

let Product = ({
  imgUrl = `${https}home.com`,
  name = 'testname_if_none',
  price = 0,
  link = `${https}home.com from the default`,
  linkName = `Click from the default`,
}) => {

  return (
    <div className={`block`}>
      <h2>{name}</h2>
      <img src={imgUrl} alt={imgUrl}/>
      <a href={link} target={`_blank`}>{linkName}</a>
      <p>Price {price}</p>
      <button type={"button"}>Get it</button>
    </div>
  )
}

export default Product