import React                    from 'react'
import WithHigherOrderComponent from "../hoc/withHigherOrderComponent"

const MyComponent = props => {
  return (
    <div>
      <h1>MyComponent</h1>
      {JSON.stringify(props, null, 2)}
    </div>
  )
}

export default WithHigherOrderComponent(MyComponent)