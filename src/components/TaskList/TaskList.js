import React, {Component} from 'react'
import Layout             from "../Layout"
import Counter            from "../Counter"

console.log(`TaskList =>> OK`)
class TaskList extends Component {
  static defaultPops = {}
  static propTypes = {}


  render() {
    return (
      <Layout>
        <Counter/>
      </Layout>
    )
  }
}

export default TaskList