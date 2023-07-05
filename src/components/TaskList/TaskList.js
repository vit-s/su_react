import React from 'react'
import TaskListItem from '../TaskListItem'

const TaskList = ({tasks, onRemoveTask}) => {
  return (
    <ul className={`TaskList`}>
      {tasks.map(({id, text}) => (
        <TaskListItem key={id} text={text} onRemove={() => onRemoveTask()}/>
      ))}
    </ul>
  )
}

export default TaskList