import React                    from 'react'
// import WithHigherOrderComponent from "../hoc/withHigherOrderComponent"
// import WithLog                  from "../hoc/withLog"
import WithFetch                from "../hoc/withFetch"

const MyComponent = props => {
  console.log(`MyComponent =>> OK`)
  return (
    <div>
      <h1>MyComponent</h1>
      {JSON.stringify(props, null, 2)}
    </div>
  )
}

// export default WithHigherOrderComponent(MyComponent)
// export default WithLog(MyComponent)
let url = 'https://jsonplaceholder.typicode.com/todos/?userId=3'
export default WithFetch(url)(MyComponent)