import React, { useEffect } from 'react'
import store from './redux/store'

export default function Count() {
    useEffect(()=>{
        console.log(store);
        console.log(store.getState().count);
    },[])
    const add = ()=>{
        // setCount(++couont)

        store.dispatch({
            type:'add',
            data: 1
        })
    }
    return (
        <div>
            {/* 
              1 多个sate 多个reducer函数 所以 getState() 返回值为对象
               {coutn:100,msg:'msg'}
              2: react 默认禁止渲染对象和数组
              3: 获取state时候一定要对象取值
            */}
            <span>{JSON.stringify(store.getState())}</span>
            <span>{store.getState().count}</span>
            <button onClick={()=>add()}>佳佳</button>
        </div>
    )
}
