import React                    from 'react'
// import WithHigherOrderComponent from "../hoc/withHigherOrderComponent"
// import WithLog                  from "../hoc/withLog"
// import WithFetch                from "../hoc/withFetch"
import WithToggle from "../hoc/withToggle"

const MyComponent = props => {
  return (
    <div>
      <div>{JSON.stringify(props, null, 2)}</div>
    </div>
  )
}

// export default WithHigherOrderComponent(MyComponent)
// export default WithLog(MyComponent)
// let url = 'https://jsonplaceholder.typicode.com/todos/?userId=3'
// export default WithFetch(url)(MyComponent)

export default WithToggle(MyComponent)