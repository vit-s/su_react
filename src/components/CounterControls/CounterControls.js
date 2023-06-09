import React from 'react'

const CounterControls = ({onIncrement, onDecrement}) => {

  return (
    <div>
      <button type={`button`} onClick={onDecrement}>Decrement</button>
      <button type={`button`} onClick={onIncrement}>Increment</button>
    </div>
  )
}

export default CounterControls