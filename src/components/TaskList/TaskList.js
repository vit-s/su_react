import React, {Component} from 'react'
import Layout             from "../Layout"
import Counter            from "../Counter"

console.log(`TaskList =>> OK`)
class TaskList extends Component {

  render() {
    return (
      <Layout>
        <Counter initialValue={0} step={5}/>
      </Layout>
    )
  }
}

export default TaskList