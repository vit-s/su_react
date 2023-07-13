import React, {Component} from 'react'

const WithToggle = WrappedComponent => {
  return class WithToggle extends Component {
    state  = {isOpen: false}

    toggle = () => this.setState(prevState => ({isOpen: !prevState.isOpen}))

    render() {
      return (
        <>
          <button type={`button`}>{this.state.isOpen ? 'Hide' : 'Show'}</button>
          
          <WrappedComponent {...this.props}/>
        </>
      )
    }
  }
}

export default WithToggle