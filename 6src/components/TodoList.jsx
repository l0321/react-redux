import React from 'react'
import store from '../redux'
import {createdeleTodolistAction} from '../redux/action/deletodo'

export default function TodoList() {
  let todolist = store.getState().todolist
  const delTodo = (id)=>{
    let data = todolist.filter()
    let action = {
      type:'delet',
      data:id
    }
    store.dispatch(createdeleTodolistAction())
  }
  return (
    <div>
        <span>
          {
            todolist.map((todo,index)=>{
              return (
                <li key={index}>
                  <span>{todo.msg}</span>
                  <button onClick={()=>{delTodo(todo.id)}}>删除</button>
                  <button >更改状态</button>
                </li>
              )
            })
          }
        </span>
    </div>
  )
}
