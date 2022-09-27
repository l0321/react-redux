import { ADD_TODO_LIST,UPDATE_TODO_LIST,DELET_TODO_LIST } from "../config"

export default function todolistReducer(state = [], action) {
    let {
        type,
        data
    } = action;
    switch (type) {
        case ADD_TODO_LIST:
            return [...state, data]
        case DELET_TODO_LIST:
            // let res = state.filter(item=>item.id != data)
            // return res;

            // 在组件中完成删除 
            return data;
        case UPDATE_TODO_LIST:
            state.map(item => {
                if (item.id == data) {
                    item.active = !item.active;
                }
                return item
            })
            return state; // 注意页面能不能渲染
        default:
            return state

    }
}