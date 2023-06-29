import React from 'react'
import TaskListItem from '../TaskListItem'

const TaskList = ({tasks, onRemoveTask}) => {
  console.log(`tasks =>> `, tasks)
  return (
    <ul className={`TaskList`}>
      {tasks.map(({id, text}) => (
        <TaskListItem key={id} text={text} onRemove={() => onRemoveTask()}/>
      ))}
    </ul>
  )
}

export default TaskList