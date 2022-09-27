import { createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import TodoListReducer from './reducer/todoList'

let rootReducer = combineReducers({
    todolist:TodoListReducer
})

export default createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))