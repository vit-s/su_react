import {combineReducers} from "redux" // to export multiple reducers (in our case 2 reducers)
import {Type} from "./timerAction"

// value reducer
const valueReducer = (state = 0, action) => {
  switch(action.type) {
    case Type.INCREMENT:
      return state += action.payload

    case Type.DECREMENT:
      return state -= action.payload

    default:
      return state
  }
}

// step reducer
const stepReducer = (state = {value: 5, label: '5'}, action) => {
  switch(action.type) {
    case Type.CHANGE_STEP:
      return action.payload

    default:
      return state
  }
}

export default combineReducers({
  value: valueReducer,
  step: stepReducer
})