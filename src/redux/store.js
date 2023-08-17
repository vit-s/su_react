import {createStore, combineReducers} from "redux"
import timerReducer                   from "./timer/timerReducer"
import {devToolsEnhancer}             from "redux-devtools-extension"

const rootReducer = combineReducers({
  timer: timerReducer
})

const store = createStore(rootReducer, devToolsEnhancer())
export default store