import React from 'react'
import TaskListItem from '../TaskListItem'

const TaskList = ({tasks}) => {
  console.log(`tasks =>> `, tasks)
  return (
    <ul className={`TaskList`}>
      {tasks.map(({id, text}) => (<TaskListItem/>))}
    </ul>
  )
}

export default TaskList