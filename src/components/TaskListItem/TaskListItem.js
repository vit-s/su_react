import React from 'react'

const TaskListItem = () => {
  return (
    <li key={`2`} className={`TaskList-item`}>
      <p className={`TaskList-text`}>{`some text`}</p>
      <section className={`TaskList-actions`}>
        <button
          type={`button`}
          className={`TaskList-button`}
          // onClick={() => onRemoveTask(id)}
        >
          Delete task
        </button>
      </section>
    </li>
  )
}

export default TaskListItem