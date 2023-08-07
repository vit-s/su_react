import {v4 as uuid} from 'uuid'

let addTask = text => (
  {
    type: 'tasks/add',
    payload: {
      task: {
        id: uuid(),
        text,
        completed: false,
      }
    }
  }
)

let removeTask = taskID => (
  {
    type: 'tasks/remove',
    payload: {
      taskID
    }
  }
)

let toggleCompleted = taskID => (
  {
    type: 'tasks/toggleCompleted',
    payload: {
      taskID
    }
  }
)

let changeFilter = filter => (
  {
    type: 'tasks/changeFilter',
    payload: {
      filter
    }
  }
)

export default {
  addTask,
  removeTask,
  toggleCompleted,
  changeFilter
}

