import React, {Component} from 'react'

const WithHigherOrderComponent = WrappedComponent => {
  return class WithHigherOrderComponent extends Component {
    render() {
      return (
        <div>
          <WrappedComponent
            {...this.props}
            extraProp={`This prop from HOC`}
            pizza={`Dominos`}
          />
        </div>
      )
    }
  }
}

export default WithHigherOrderComponent