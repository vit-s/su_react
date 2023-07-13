import React, {Component} from 'react'

console.log(`WithLog =>> OK `)

const WithLog = WrappedComponent => {
  return class WithLog extends Component {
    componentDidMount() {
      console.log(`WrappedComponent name =>> `, WrappedComponent.name)
      console.log(`WrappedComponent this props =>> `, this.props)
    }

    render() {
      return <WrappedComponent {...this.props} moreprop={`more prop`}/>
    }
  }
}

export default WithLog