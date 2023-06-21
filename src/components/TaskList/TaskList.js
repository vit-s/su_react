import React from 'react'

const TaskList = ({tasks}) => {
  console.log(`tasks =>> `, tasks)
  return (
    <ul className={`TaskList`}>
      {tasks.map(({id, text}) => (
        <li key={id} className={`TaskList-item`}>
          <p className={`TaskList-text`}>
            {id}
            <br/>
            {text}
          </p>
        </li>
      ))}
      <section className={`TaskList-actions`}>
        <button type={`button`} className={`TaskList-button`}>
          Delete task
        </button>
      </section>
    </ul>
  )
}

export default TaskList