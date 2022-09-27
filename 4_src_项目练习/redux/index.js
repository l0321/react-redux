/**
 * 创建store
 */

import { createStore,combineReducers ,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import goodIdReducer from './reducer/goodIdSlice'
import { shopReducer } from './reducer/detailSlice'
import shoplistReducer from './reducer/shoplist'

let rootReducer = combineReducers({
    goodId:goodIdReducer,
    shop:shopReducer,
    shoplist:shoplistReducer,
})
export default createStore(rootReducer,applyMiddleware(thunk))