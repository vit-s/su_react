import React, {useEffect, useState} from 'react'

const CounterHook = () => {
  let [count, setCount] = useState(0)
  let [textValue, setTextValue] = useState('')

  let handleIncrement = () => {
    setCount(() => count + 1)
  }

  useEffect(() => {
    console.log(`useEffect =>> OK`)
  }, [count]) // Follow this state only

  return (
    <div>
      <input type="text" value={textValue} onChange={e => setTextValue(e.target.value)}/>
      <p>You clocked {count} times</p>
      <button value={`button`} onClick={handleIncrement}>
        Increment counter
      </button>
    </div>
  )
}

export default CounterHook