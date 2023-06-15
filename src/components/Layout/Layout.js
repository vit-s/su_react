import React, {Component} from 'react'
import style              from './Layout.module.css'

console.log(`Layout =>> OK`)
const Layout = ({children}) => {
  return (
    <>
      <h2>Layout</h2>
      <div className={`${style.Layout}`}>{children}</div>
    </>
  )

}

export default Layout