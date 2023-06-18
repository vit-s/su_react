import React, {Component} from 'react'

console.log(`Counter =>> OK`)

class Counter extends Component {

  static defaultProps = {initialValue: 1}
  static propTypes    = {}

  state = {
    value: this.props.initialValue,
    step: this.props.step,
    text: 'Hello',
  }

  handleIncrement = () =>
    this.setState((prevState, props) =>
      ({value: prevState.value += props.step}))

  handleDecrement = () =>
    this.setState((prevState, props) =>
      ({value: prevState.value -= props.step}))

  render() {
    console.log(`state value =>> `, this.state.value)
    return (
      <div>
        <h2>Counter</h2>
        {this.state.text} Counter:
        <button
          type={`button`}
          onClick={this.handleIncrement}
        >
          Increment
        </button>
        <span
          className={`count`}
        >
          {this.state.value}
        </span>
        <button
          type={`button`}
          onClick={this.handleDecrement}
        >
          Decrement
        </button>
      </div>
    )
  }
}

export default Counter