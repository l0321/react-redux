import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './assets/common.scss'
import store from './redux'
let root = ReactDom.createRoot(document.getElementById('root'))
root.render(
   <BrowserRouter>
        <App />
   </BrowserRouter>
)

// 对整个应用程序进行监听
store.subscribe(()=>{
   root.render(
      <BrowserRouter>
           <App />
      </BrowserRouter>
   )
})
