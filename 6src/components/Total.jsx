import React from 'react'
import store from '../redux'

export default function Todolist() {
  console.log(store.getState());
  return (
    <div>
       <h1>1</h1>
       <h1>2</h1>
       <h1>3</h1>
    </div>
  )
}
