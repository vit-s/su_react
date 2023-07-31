import React             from 'react'
import {connect}         from 'react-redux'
import * as timerActions from './../../redux/timerAction'
import Layout            from "../Layout"

const Timer = ({value, step, onIncrement, onDecrement}) => (
  <Layout>
    <h2>Timer</h2>
    <div>
      <button
        type={`button`}
        onClick={() => onDecrement(step)}
      >
        &#8722;
      </button>
      <div>minutes {value}</div>
      <button
        type={`button`}
        onClick={() => onIncrement(step)}
      >
        &#43;
      </button>
    </div>
  </Layout>
)

const mapState = state => ({
  value: state.timer.value,
  step: state.timer.step.value,
})

const mapDispatch = dispatch => ({
  onIncrement: step => dispatch(timerActions.increment(step)),
  onDecrement: step => dispatch(timerActions.decrement(step)),
})

export default connect(mapState, mapDispatch)(Timer)