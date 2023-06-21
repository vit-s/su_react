import {loremIpsum} from 'lorem-ipsum'
import {v4 as uuidv4} from 'uuid'

const CreateTask = () => {
  return {
    id: uuidv4(),
    text: loremIpsum(),
    completed: false,
  }
}

export default CreateTask
