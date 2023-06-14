import React, {Component} from 'react'

console.log(`Counter =>> OK`)

class Counter extends Component {
  constructor() {
    super();
  }


  static defaultPops = {}
  static propTypes   = {}

  handleIncrement = () => {
    console.log(`Inc =>> `)
    console.log(`Inc this =>> `, this)
  }

  handleDecrement = () => {
    console.log(`Dec =>> `)
    console.log(`Dec this =>> `, this)
  }

  render() {
    return (
      <div>
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
          0
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