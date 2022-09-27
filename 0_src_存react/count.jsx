import React, { useState } from 'react'

export default function Count() {
    // 状态，useState 返回值都是状态
    let [num,setNum] = useState(0);
    // 行为
    const add = ()=>{
        setNum(++num)
    }
    const reduce = ()=>{
        setNum(--num);
    }
    return (
        <div>
            <button onClick={()=>{add()}}>每次点击+1</button>
            <span>{num}</span>
            <button onClick={()=>{reduce()}}>每次点击较少1</button>
        </div>
    )
}
