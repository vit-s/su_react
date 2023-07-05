import React, {Component} from 'react'
import CounterControls    from "../CounterControls"

console.log(`Counter class =>> OK`)

class Counter extends Component {

  static defaultProps = {initialValue: 1, step: 1, text: `Hello`}
  static propTypes    = {}

  state = {
    value: this.props.initialValue,
    step: this.props.step,
    text: this.props.text,
  }

  handleIncrement = () =>
    this.setState((prevState, props) =>
      ({value: prevState.value += props.step}))

  handleDecrement = () =>
    this.setState((prevState, props) =>
      ({value: prevState.value -= props.step}))

  render() {
    return (
      <div>
        <h2>Counter</h2>
        {this.state.text} Counter:
        <span className={`count`}>{this.state.value}</span>
        <CounterControls onIncrement={this.handleIncrement} onDecrement={this.handleDecrement}/>
      </div>
    )
  }
}

export default Counter