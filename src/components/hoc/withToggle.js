import React, {Component} from 'react'

const withToggle = WrappedComponent => {
  return class WithToggle extends Component {
    state = {
      isOpen: false,
    }

    toggle = () => {
      return this.setState(prevState => ({isOpen: !prevState.isOpen}))
    }

    render() {
      return (
        <div>
          <button type={`button`} onClick={this.toggle}>
            {' '}
            {this.state.isOpen ? 'Hide' : 'Show'}
            {' '}
          </button>
          <WrappedComponent {...this.props}/>
        </div>
      )
    }
  }
}

export default withToggle