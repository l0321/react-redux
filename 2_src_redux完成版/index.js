import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App'
import store from './redux/store'

let root = ReactDom.createRoot(document.getElementById('root'))
root.render(<App />)

store.subscribe(()=>{
    root.render(<App />)
})

