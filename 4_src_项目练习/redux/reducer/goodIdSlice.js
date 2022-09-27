/**
 * goodId状态 的reducer函数
 */
 import { GOOD_ID_NAVIGATE } from '../config'

export default function goodIdReducer(state='',action){
    console.log('test goodid reducer run');
    console.log(state,action);
    let {type,data} = action
    switch(type){
        case GOOD_ID_NAVIGATE:
            return data;
        default :
        return state
    }
}