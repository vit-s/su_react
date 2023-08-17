import React             from 'react'
import Select            from 'react-select'
import Layout            from "../Layout"
import {connect}         from "react-redux"
import * as timerActions from '../../redux/timer/timerAction'

const options = [
  {value: 5, label: '5'},
  {value: 10, label: '10'},
  {value: 15, label: '15'},
]

const StepSelector = ({value, onChange}) => (
  <Layout>
    <h2>Step Selector</h2>
    <div>
      <Select options={options} value={value} onChange={onChange}/>
    </div>
  </Layout>
)

const mapStateToProps = state => ({
  value: state.timer.step
})

const mapDispatchToProps = dispatch => ({
  onChange: step => dispatch(timerActions.changeStep(step))
})
export default connect(mapStateToProps, mapDispatchToProps)(StepSelector)