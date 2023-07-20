import React, {useState, useEffect, useRef} from 'react'

const style = {
  clockFace: {
    fontSize: 32,
    fontWeight: 500,
  },
}

const Clock = () => {
  let [time, setTime] = useState(new Date())

  const intervalID = useRef()

  useEffect(() => {
    intervalID.current = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => {
      clearInterval(intervalID.current)
    }
  })

  return (
    <p style={style.clockFace}>
      Current time: {time.toLocaleTimeString()}
    </p>
  )
}

export default Clock