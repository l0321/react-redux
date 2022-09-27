const initState = 100;
export default function countReducer(preventState=initState,action){
    console.log('count reducer run ',action);
    let { type,data } = action;


    // 根据不同的type完成具体的state更新逻辑
    if(type=='add') {
        // 返回最新的状态
        return preventState + data
    }else if(type=='reduce'){
        return preventState -data
    }else {
        // 作用：返回初始化状态。
        return preventState 
    }
}