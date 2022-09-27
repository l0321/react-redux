import React,{useRef} from 'react'
import store from '../redux'
import {createTodolistAddAction} from '../redux/action/todolist'


export default function Add() {
  let ipt = useRef(null)
  const addtodo = ()=>{
    // ??? 如何获取input 的value值
    
    let msg = ipt.current.value

    // 带上action 触发todoReducer函数
    // ？？？如何获取action？action

    // ??? 如何触发todoReducer函数呢
    let data= {
      id:new Date().getTime(),
      active:false,
      msg,
    }

    store.dispatch(createTodolistAddAction(data))
  }
  return (
    <div>
        <input type="text" ref={ipt}/>
        <button onClick={()=>{addtodo()}}>添加列表内容</button>
    </div>
  )
}
