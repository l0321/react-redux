import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App'
import store from './redux'
let root = ReactDom.createRoot(document.getElementById('root'))
root.render(
        <App />
)

// store与程序结合
// 作用：store监听 整个应用程序
// 后果：当前程序中，所有组件都可以检测到store中state，并响应式
store.subscribe(()=>{
        root.render(
                <App />
        )
     })
