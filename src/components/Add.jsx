import React, { useRef } from 'react'
import store from '../redux'
import { createTodolistAddActicon } from '../redux/action/todolist'
export default function Add() {
  // ？？？ 如何获取input 的value值
  let ipt = useRef(null)
  const addtodo = () => {
    let msg = ipt.current.value;
    if(msg.trim()==''){
      window.alert('请输入内容在添加');
      // msg 提示框 提示
      return
    }

    // 带上action  触发todoReducer函数
    // ???? 如何获取action? action是什么
    // ???? 如何触发todoReducer函数呢

    let data = {
      id: new Date().getTime(),
      active: false,
      msg,
    }

    // 只有action是异步的情况的，dispatch() 返回值才是promise,
    // 同步：undefined
    store.dispatch(createTodolistAddActicon(data))
    ipt.current.value = ''
  }
  return (
    <div>
      <input type="text" ref={ipt} />
      <button onClick={() => { addtodo() }}>添加列表内容</button>
    </div>
  )
}
