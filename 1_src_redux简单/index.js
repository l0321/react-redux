import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App'
import store from './redux/store'

// 渲染应用
let root = ReactDom.createRoot(document.getElementById('root'))
root.render(<App />)

// 监听应用：
// store.subscribe() 添加监听去
// 作用：让react应用与store结合，可以将store的状态变为响应式。
// 执行条件：当disptch时候，触发监听器
store.subscribe(()=>{
    let root = ReactDom.createRoot(document.getElementById('root'))
    root.render(<App />)
})

