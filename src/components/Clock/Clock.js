import React, {useState, useEffect} from 'react'

const style = {
  clockFace: {
    fontSize: 32,
    fontWeight: 500,
  },
}

const Clock = () => {
  let [time, setTime] = useState(new Date())

  useEffect(() => {
    let intervalID = setInterval(() => {
      setTime(new Date())
    }, 1000)

  })

  return (
    <p style={style.clockFace}>
      Current time: {time.toLocaleTimeString()}
    </p>
  )
}

export default Clock