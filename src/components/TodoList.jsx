import React from 'react'
import store from '../redux'
import './todolist.scss'
import { createTodolistDeletAction,createTodolistUpdateAction } from '../redux/action/todolist';

export default function TodoList() {
  let todolist = store.getState().todolist;
  const delTodo = (id)=>{
    let data = todolist.filter(item=>item.id != id)
    // let acion = {
    //   type:'delet',
    //   data:id
    // }

    // let acion = {
    //   type:'delet',
    //   data,
    // }
    store.dispatch(createTodolistDeletAction(data))
  }

  const updateTodo = (id) =>{
    // let acion = {
    //   type:'update',
    //   data:id
    // }

    store.dispatch(createTodolistUpdateAction(id))
  }
  return (
    <div>
      <ul>
        {
          todolist.map(todo => {
            return (
              <li key={todo.id}>
                <span className={todo.active?'active':''}  >{todo.msg}</span>
                <button onClick={()=>{delTodo(todo.id)}}>删除</button>
                <button onClick={()=>{updateTodo(todo.id)}}>更改状态</button>
              </li>
            )
          })
        }
      </ul>

      {
        todolist.length === 0 ? (
          <h1>没有更多列表</h1>
        ):''
      }
    </div>
  )
}
