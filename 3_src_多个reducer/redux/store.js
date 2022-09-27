
import { createStore,combineReducers } from 'redux';
// 导入自定义的 reducter
import countReducter from './countSlice'
import msgReducer from './msgSlice.'

/**
 * combineReducers() 
 * 作用:合并reducer函数
 * 返回值: 合并后的reducer
 * 适合:用于多个reducers函数管理多个状态
 */
const reducer = combineReducers({
    // key 将作为state的key值.
    count:countReducter,
    msg:msgReducer
})

// rootReducer
let store =  createStore(reducer)
// 导出store实例对象
export default store
