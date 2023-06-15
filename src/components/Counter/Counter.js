import React, {Component} from 'react'

console.log(`Counter =>> OK`)

class Counter extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: this.props.initialValue
  //   }
  // }

  static defaultProps = {initialValue: 1}
  static propTypes = {}

  state = {
    value: this.props.initialValue,
    step: this.props.step,
    text: 'Hello'
  }

  handleIncrement = () => {
    console.log(`Inc =>> `)
    console.log(`Inc this =>> `, this)
    this.setState((prevState, props) => {
      return {
        value: prevState.value += props.step
      }
    })
  }

  handleDecrement = () => {
    console.log(`Dec =>> `)
    console.log(`Dec this =>> `, this)
    this.setState((prevState, props) => {
      return {
        value: prevState.value -= props.step
      }
    })
  }

  render() {
    console.log(`state value =>> `, this.state.value)
    return (
      <div>
        <h2>Counter section</h2>
        Counter:
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