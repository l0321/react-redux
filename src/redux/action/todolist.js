import { ADD_TODO_LIST,UPDATE_TODO_LIST,DELET_TODO_LIST } from "../config"
// 新增action
export function createTodolistAddActicon(data){
    return {
        type:ADD_TODO_LIST,
        data,
    }
}

// 新增删除action
export function createTodolistDeletAction(data){
    return  {
        type:DELET_TODO_LIST,
        data,
      }
}


// 更新action
export function createTodolistUpdateAction(data){
    return  {
        type:UPDATE_TODO_LIST,
        data,
      }
}