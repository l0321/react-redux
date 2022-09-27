import React, { useState } from 'react'
import store from './redux/store'
export default function Header() {
    // let [msg, setMsg] = useState('');
    const updateMsg = () => {
        /**
         * dispatch() 传入不同的action, redux, 内部会自动识别实行哪个reducer函数
         */
        store.dispatch({
            type:'update',
            data:"hellow word"
        })
    }
    return (
        <div>
            <h1>header</h1>
            <h2>{store.getState().msg}</h2>
            <button onClick={() => { updateMsg() }}>updata msg</button>
        </div>
    )
}
