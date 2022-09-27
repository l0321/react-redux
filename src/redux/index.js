import { createStore,combineReducers,applyMiddleware } from 'redux'
import  { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import todolistReducer from './redecer/ttodolist';



// combineReducers(); 可以有多个state状态
// 一个reducer 一个 state
// 多个state 用什么结构区别，对象。
let rootReducter = combineReducers({
    // key 将作为 state 的key值
    todolist:todolistReducer
})
/**
 * createStore()
 * 参一：必填
 */
export default createStore(rootReducter,composeWithDevTools(applyMiddleware(thunk)))