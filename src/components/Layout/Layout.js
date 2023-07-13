import React from 'react'
import style              from './Layout.module.css'

console.log(`Layout =>> OK`)
const Layout = ({children}) => {
  return (
    <>
      <div className={`${style.Layout}`}>{children}</div>
    </>
  )

}

export default Layout