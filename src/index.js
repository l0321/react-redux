import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App'
import store from './redux'
let root = ReactDom.createRoot(document.getElementById('root'))
root.render(
   <App />
)

// store与程序结合
// 作用：store 监听 整个应用程序。
// 后果：当前程序中，所有组件，都可以监测到 store中state，并且是响应式的。
store.subscribe(()=>{
   root.render(
      <App />
   )
})
