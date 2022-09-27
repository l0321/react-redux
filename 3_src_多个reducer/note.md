# redux

一个state,有一个reducer函数,

多个state,有多个reducer

## 简单版目录

~~~
|-- redux
  |-- store.js         
  |-- countSlice.js    设置的count的reducer
  |-- msgSlice.js      设置msg的reducer
|-- count.jsx          
|-- header.jsx
~~~

### store如何处理对各reducer
> combineReducers 合并reducers函数
~~~js
// store.js
import { createStore,combineReducers } from 'redux';
import countReducter from './countSlice'
import msgReducer from './msgSlice.'
const reducer = combineReducers({
    count:countReducter,
    msg:msgReducer
})
let store =  createStore(reducer)
export default store
~~~

#### 以下代码可以不用看，运行可以复制
~~~js
// countSlice.js
const initState = 100;
export default function countReducer(preventState=initState,action){
    console.log('count reducer run ',action);
    let { type,data } = action;
    if(type=='add') {
        return preventState + data
    }else if(type=='reduce'){
        return preventState -data
    }else {
        return preventState 
    }
}
~~~

~~~js
// msgSlice.js
export default function msgReducer(state='msg',action){
    console.log('msg reducter run');
    let {type,data} = action;
    if(type==='update'){
        return  state + data
    }else {
        return state
    }

}
~~~

### ui中如何获取state

> 由于多个state 所有getState() 返回值为对象

~~~JSX
 <span>{JSON.stringify(store.getState())}</span>
~~~

### dispatch触发reducer有什么变化？

> 没有，与一个reducer函数写法没有区别；

**代码如下：**
~~~jsx
import React, { useEffect } from 'react'
import store from './redux/store'
export default function Count() {
    useEffect(()=>{
        console.log(store);
        console.log(store.getState().count);
    },[])
    const add = ()=>{
        store.dispatch({
            type:'add',
            data: 1
        })
    }
    return (
        <div>
            <span>{JSON.stringify(store.getState())}</span>
            <span>{store.getState().count}</span>
            <button onClick={()=>add()}>佳佳</button>
        </div>
    )
}
~~~

