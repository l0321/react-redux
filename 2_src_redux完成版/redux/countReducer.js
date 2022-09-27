import { ADD_TYPE,REDUCE_TYPE } from './count'

export default function countReducer(prevState=100,action){
    console.log('count reduccer');
    // 不同的行为return 输出值不同的。
    if(action.type===ADD_TYPE){
        // .....
        return prevState + action.data
    }else if(action.type === REDUCE_TYPE){
        return prevState - action.data
    }else{
        return prevState

    }
    
    
}