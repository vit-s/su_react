import React                    from 'react'
import {connect}                from 'react-redux'
import * as timerActions from './../../redux/timerAction'

const Timer = ({value, step, onIncrement, onDecrement}) => (
  <div>
    <button
      type={`button`}
      onClick={() => onIncrement}
    >
      &#8722;
    </button>
    <div>{value} minutes</div>
    <button
      type={`button`}
      onClick={() => onDecrement}
    >
      &#43;
    </button>
  </div>
)

const mapState = state => ({
  value: state.timer.value,
  step: state.timer.step
})

const mapDispatch = dispatch => ({
  onIncrement: step => dispatch(timerActions.increment(step)),
  onDecrement: step => dispatch(timerActions.decrement(step)),
})

export default connect(mapState, mapDispatch)(Timer)