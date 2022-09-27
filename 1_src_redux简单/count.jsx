import React, { useState } from 'react'
import store from './redux/store'

export default function Count() {
    // 状态，useState 返回值都是状态
    const add = ()=>{
        let action = {
            type:'add',
            data:1
        }

        store.dispatch(action)
    }
    const reduce = ()=>{
    }
    return (
        <div>
            <button onClick={()=>{add()}}>每次点击+1</button>、
            {/* 
            store.getState() 作用：获取store中的state
            countReducer() 函数执行。第一次执行时候：作用：返回初始化的state
            */}
            <span>{store.getState()}</span>
            <button onClick={()=>{reduce()}}>每次点击较少1</button>
        </div>
    )
}
