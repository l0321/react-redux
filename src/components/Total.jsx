import React from 'react'
import store from '../redux'
import { createTodolistDeletAction } from '../redux/action/todolist';

export default function Total() {
  let todolist = store.getState().todolist;
  let arr = todolist.filter(item=>item.active);
  const delet = ()=>{
    let noActive =todolist.filter(item=>!item.active);
    // let action = {
    //   type:'delet',
    //   data:noActive
    // }
    store.dispatch(createTodolistDeletAction(noActive))
  }

  const clear = ()=>{
    // let action = {
    //   type:'delet',
    //   data:[]
    // }
    store.dispatch(createTodolistDeletAction([]))

  }

  return (
    <div>
        <h1>总任务：{todolist.length}</h1>
        <h2>已经完成：{arr.length}</h2>
        <h2>为完成：{todolist.length - arr.length}</h2>

        <div>
          {/* 思考租用 */}
          <button onClick={()=>{delet()}}>删除已完成</button>
          <button onClick={()=>clear()}>清空所有的</button>
        </div>
    </div>
  )
}
