import React, { useState } from 'react'
import store from './redux/store'
import {createAcion,createReduceAcion} from './redux/countAction'
export default function Count() {
    // 状态，useState 返回值都是状态
    // let [num,setNum] = useState(0);
    // 行为
    const add = ()=>{
        // setNum(++num)
        store.dispatch( createAcion(1) )
        console.log('add run');
    }
    const reduce = ()=>{
        store.dispatch( createReduceAcion(1) )

    }

    const addAsync = ()=>{
        // setNum(++num)
        setTimeout(()=>{
            store.dispatch( createAcion(1) )
        },1000)
    }
    return (
        <div>
            <button onClick={()=>{add()}}>每次点击+1</button>
            <span>{ store.getState() }</span>
            <button onClick={()=>{reduce()}}>每次点击较少1</button>
            <button onClick={()=>{addAsync()}}>异步加+1</button>

        </div>
    )
}
