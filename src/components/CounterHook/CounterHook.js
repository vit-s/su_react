import React, {useState} from 'react'

const CounterHook = () => {
  const [count, setCount] = useState(0)
  let handleIncrement = () => {
    setCount(() => count + 1)
  }

  return (
    <div>
      <p>You clocked {count} times</p>
      <button value={`button`} onClick={handleIncrement}>
        Increment counter
      </button>
    </div>
  )
}

export default CounterHook